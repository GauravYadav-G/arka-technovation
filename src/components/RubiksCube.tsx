'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Application } from '@splinetool/runtime';
import { Loader2 } from 'lucide-react';

interface RubiksCubeProps {
  className?: string;
  preset?: number;
  onLoaded?: () => void;
}

// ARKA Brand Palettes (Matching Liquid Background presets)
const THEME_PALETTES: Record<
  number,
  {
    cubies: Array<{ r: number; g: number; b: number }>;
    spotLight: string;
    directionalLight: string;
  }
> = {
  // 0: ARKA Solar Fire (Primary Brand: Solar Amber, Warm Gold, Obsidian Bronze)
  0: {
    cubies: [
      { r: 0.96, g: 0.62, b: 0.04 }, // Solar Gold (#f59e0b)
      { r: 0.85, g: 0.47, b: 0.02 }, // Warm Amber (#d97706)
      { r: 0.98, g: 0.75, b: 0.14 }, // Bright Solar (#fbbf24)
      { r: 0.71, g: 0.33, b: 0.04 }, // Dark Amber Bronze (#b45309)
      { r: 0.16, g: 0.13, b: 0.11 }, // Obsidian Charcoal (#262626)
      { r: 0.92, g: 0.55, b: 0.08 }, // Flame Gold (#ea580c)
    ],
    spotLight: '#ffb74d',
    directionalLight: '#ffe082',
  },
  // 1: Quantum Cyan
  1: {
    cubies: [
      { r: 0.02, g: 0.71, b: 0.82 },
      { r: 0.06, g: 0.52, b: 0.72 },
      { r: 0.22, g: 0.85, b: 0.95 },
      { r: 0.09, g: 0.13, b: 0.18 },
    ],
    spotLight: '#4dd0e1',
    directionalLight: '#80deea',
  },
  // 2: Growth Emerald
  2: {
    cubies: [
      { r: 0.06, g: 0.72, b: 0.42 },
      { r: 0.02, g: 0.55, b: 0.31 },
      { r: 0.20, g: 0.86, b: 0.55 },
      { r: 0.08, g: 0.16, b: 0.11 },
    ],
    spotLight: '#69f0ae',
    directionalLight: '#a7f3d0',
  },
  // 3: Royal Violet
  3: {
    cubies: [
      { r: 0.66, g: 0.33, b: 0.98 },
      { r: 0.49, g: 0.23, b: 0.82 },
      { r: 0.78, g: 0.47, b: 0.99 },
      { r: 0.14, g: 0.09, b: 0.22 },
    ],
    spotLight: '#ce93d8',
    directionalLight: '#e1bee7',
  },
};

// Calculate optimal 3D model scale so the cube is completely uncropped on any device
function getOptimalScale(): number {
  if (typeof window === 'undefined') return 0.56;
  const w = window.innerWidth;
  if (w < 480) return 0.50; // Small mobile phones (<480px)
  if (w < 768) return 0.53; // Large phones / Phablets (<768px)
  if (w < 1024) return 0.55; // Tablets (<1024px)
  return 0.58; // Laptops / Desktops (>=1024px)
}

export default function RubiksCube({
  className = '',
  preset = 0,
  onLoaded,
}: RubiksCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const applyColorsAndScale = useCallback((appInstance: Application, activePreset = 0) => {
    try {
      const theme = THEME_PALETTES[activePreset] || THEME_PALETTES[0];
      const objs = appInstance.getAllObjects ? appInstance.getAllObjects() : [];

      // 1. Color each cubie mesh with brand palette
      objs.forEach((obj, idx) => {
        const mat = obj.material as unknown as {
          layers?: Array<{
            type?: string;
            color?: { r: number; g: number; b: number };
          }>;
        };
        if (mat?.layers) {
          const colorLayer = mat.layers.find(
            (l) => l.type === 'color'
          );
          if (colorLayer && colorLayer.color) {
            const c = theme.cubies[idx % theme.cubies.length];
            colorLayer.color.r = c.r;
            colorLayer.color.g = c.g;
            colorLayer.color.b = c.b;
          }
        }
      });

      // 2. Scale root Cube object to guarantee 100% uncropped clearance on all sides
      const targetScale = getOptimalScale();
      const cubeObj = appInstance.findObjectByName ? appInstance.findObjectByName('Cube') : undefined;
      if (cubeObj && cubeObj.scale) {
        cubeObj.scale.x = targetScale;
        cubeObj.scale.y = targetScale;
        cubeObj.scale.z = targetScale;
      }

      // 3. Warm directional and spot lights to complement the theme & adjust camera frustum
      const internalScene = (
        appInstance as unknown as {
          _scene?: {
            traverse: (
              fn: (node: {
                isLight?: boolean;
                type?: string;
                color?: { set: (hex: string) => void };
                intensity?: number;
                isCamera?: boolean;
                zoom?: number;
                updateProjectionMatrix?: () => void;
              }) => void
            ) => void;
          };
        }
      )._scene;

      if (internalScene?.traverse) {
        internalScene.traverse((node) => {
          if (node.isLight) {
            if (node.type === 'SpotLight' && node.color) {
              node.color.set(theme.spotLight);
              node.intensity = 42;
            }
            if (node.type === 'DirectionalLight' && node.color) {
              node.color.set(theme.directionalLight);
              node.intensity = 15;
            }
          }
          if (node.isCamera) {
            node.zoom = 0.65;
            if (typeof node.updateProjectionMatrix === 'function') {
              node.updateProjectionMatrix();
            }
          }
        });
      }

      if (typeof appInstance.setZoom === 'function') {
        appInstance.setZoom(0.65);
      }

      if (typeof (appInstance as unknown as { requestRender?: () => void }).requestRender === 'function') {
        (appInstance as unknown as { requestRender: () => void }).requestRender();
      }
    } catch (err) {
      console.warn('Failed to apply theme colors to Rubik\'s Cube:', err);
    }
  }, []);

  const initSpline = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setLoading(true);
    setError(null);

    try {
      if (splineAppRef.current) {
        try {
          splineAppRef.current.dispose();
        } catch {
          // ignore
        }
      }

      const app = new Application(canvas);
      splineAppRef.current = app;

      // Primary source: local asset from public/cube.splinecode
      // Fallback: direct upstream asset from resend.com
      try {
        await app.load('/cube.splinecode');
      } catch (localErr) {
        console.warn('Local cube asset failed, trying upstream resend.com URL:', localErr);
        await app.load('https://resend.com/static/cube.splinecode');
      }

      // Apply ARKA brand colors and scale to fit without cropping
      applyColorsAndScale(app, preset);

      if (typeof window !== 'undefined') {
        (window as unknown as { __splineApp: Application }).__splineApp = app;
      }

      setLoading(false);
      onLoaded?.();
    } catch (err: unknown) {
      console.error('Failed to initialize Spline Rubik\'s Cube:', err);
      setError('Could not render 3D scene');
      setLoading(false);
    }
  }, [preset, applyColorsAndScale, onLoaded]);

  useEffect(() => {
    initSpline();

    return () => {
      if (splineAppRef.current) {
        try {
          splineAppRef.current.dispose();
        } catch {
          // cleanup
        }
      }
    };
  }, [initSpline]);

  // Dynamically update colors & scale on preset change
  useEffect(() => {
    if (splineAppRef.current && !loading) {
      applyColorsAndScale(splineAppRef.current, preset);
    }
  }, [preset, loading, applyColorsAndScale]);

  // Dynamically rescale on window resize
  useEffect(() => {
    const handleResize = () => {
      if (splineAppRef.current && !loading) {
        applyColorsAndScale(splineAppRef.current, preset);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loading, preset, applyColorsAndScale]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas with Grab Cursor */}
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        <canvas
          ref={canvasRef}
          className={`w-full h-full transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100 cursor-grab active:cursor-grabbing'
            }`}
        />

        {/* Minimalist Loading Indicator */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 text-white/60">
            <Loader2 className="w-6 h-6 animate-spin text-solar" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-white/50">
              Loading 3D Experience...
            </span>
          </div>
        )}

        {/* Error Fallback with Retry */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40 rounded-2xl">
            <p className="text-red-400 text-xs font-medium">{error}</p>
            <button
              onClick={initSpline}
              className="mt-2.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-mono transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
