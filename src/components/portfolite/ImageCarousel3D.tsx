'use client';

import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimationPlaybackControls,
  useReducedMotion,
} from 'framer-motion';
import Link from '@/components/Link';

export interface HeroCarouselCard {
  id: string;
  image: string;
  imageFallback?: string;
  alt: string;
  href: string;
  title: string;
  objectPosition?: string;
}

export interface ImageCarousel3DProps {
  items?: HeroCarouselCard[];
  className?: string;
  spacing?: number; // default: 22
  curve?: number; // default: 0.95
  aspectRatio?: number; // default: 1.6 (16:10 / 16:9 widescreen card)
  speed?: number; // default: 2.5
}

// 5 Official Hero Slider Images (100% verified local assets)
export const DEFAULT_HERO_SLIDER_ITEMS: HeroCarouselCard[] = [
  {
    id: 'hero-01-software-development',
    image: '/images/hero/hero-01-software-development.webp',
    imageFallback: '/images/hero/hero-01-software-development.png',
    alt: 'ARKA Technovation - Software Engineering & Enterprise Architecture',
    href: '/services/development',
    title: 'Software Development',
    objectPosition: 'center center',
  },
  {
    id: 'hero-02-digital-marketing',
    image: '/images/hero/hero-02-digital-marketing.webp',
    imageFallback: '/images/hero/hero-02-digital-marketing.png',
    alt: 'ARKA Technovation - Digital Marketing & Paid Acquisition Telemetry',
    href: '/services/digital-marketing',
    title: 'Digital Marketing',
    objectPosition: 'center center',
  },
  {
    id: 'hero-03-search-ai-engines',
    image: '/images/hero/hero-03-search-ai-engines.webp',
    imageFallback: '/images/hero/hero-03-search-ai-engines.png',
    alt: 'ARKA Technovation - SEO, GEO & AI Answer Engine Optimization',
    href: '/seo-lead-generation',
    title: 'SEO, GEO & AEO Services',
    objectPosition: 'center center',
  },
  {
    id: 'hero-04-film-production',
    image: '/images/hero/hero-04-film-production.webp',
    imageFallback: '/images/hero/hero-04-film-production.png',
    alt: 'ARKA Technovation - Cinematic Video Production Studio & Soundstage',
    href: '/services/film-making',
    title: 'Film Production & Cinema',
    objectPosition: 'center center',
  },
  {
    id: 'hero-05-corporate-world-news',
    image: '/images/hero/hero-05-corporate-world-news.webp',
    imageFallback: '/images/hero/hero-05-corporate-world-news.png',
    alt: 'ARKA Technovation - Corporate World News & Executive Media',
    href: '/blogs',
    title: 'Corporate World News',
    objectPosition: 'center center',
  },
];

interface Geometry {
  focal: number;
  offset: number;
  spacing: number;
  span: number;
  cardW: number;
  cardH: number;
  limit: number;
}

function isClipped(angle: number, cosVal: number, geo: Geometry) {
  return (
    Math.abs(angle) >= 84 ||
    cosVal <= 0.05 ||
    Math.abs(Math.sin((angle * Math.PI) / 180) / cosVal) > geo.limit
  );
}

function CarouselCard({
  item,
  slot,
  rotation,
  geometry,
  version,
  labelled,
  width,
  height,
}: {
  item: HeroCarouselCard;
  slot: number;
  rotation: any;
  geometry: React.MutableRefObject<Geometry>;
  version: any;
  labelled: boolean;
  width: number;
  height: number;
}) {
  const angle = useTransform([rotation, version], ([rot]: [number, number]) => {
    const geo = geometry.current;
    const raw = slot * geo.spacing + rot;
    const halfSpan = geo.span / 2;
    return (((raw + halfSpan) % geo.span) + geo.span) % geo.span - halfSpan;
  });

  const transform = useTransform([angle, version], ([ang]: [number, number]) => {
    const geo = geometry.current;
    const rad = (ang * Math.PI) / 180;
    const cosVal = geo.offset + Math.cos(rad);

    if (isClipped(ang, cosVal, geo)) {
      return 'translate3d(0, 0, -10000px)';
    }

    const x = Math.sin(rad) * geo.focal;
    const z = (1 - cosVal) * geo.focal;
    return `translate3d(${x.toFixed(2)}px, 0, ${z.toFixed(2)}px) rotateY(${(-ang).toFixed(3)}deg)`;
  });

  const opacity = useTransform([angle, version], ([ang]: [number, number]) => {
    const geo = geometry.current;
    const cosVal = geo.offset + Math.cos((ang * Math.PI) / 180);
    if (isClipped(ang, cosVal, geo)) return 0;
    const abs = Math.abs(ang);
    return abs <= 76 ? 1 : 1 - (abs - 76) / 8;
  });

  const zIndex = useTransform(angle, (ang: number) => {
    return Math.round(200 - 100 * Math.cos((ang * Math.PI) / 180));
  });

  return (
    <motion.div
      aria-hidden={!labelled || undefined}
      className="absolute left-1/2 top-1/2 overflow-hidden bg-zinc-950 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_18px_45px_-20px_rgba(0,0,0,0.9)] select-none group/card cursor-pointer"
      style={{
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        borderRadius: Math.max(10, 0.045 * width),
        transform,
        opacity,
        zIndex,
        backfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      <Link href={item.href} className="block w-full h-full focus:outline-none">
        <picture>
          <source srcSet={item.image} type="image/webp" />
          <img
            src={item.imageFallback || item.image}
            alt={labelled ? item.alt : ''}
            draggable={false}
            loading="eager"
            decoding="sync"
            className="pointer-events-none h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
            style={{ objectPosition: item.objectPosition ?? 'center center' }}
          />
        </picture>
        <span
          aria-hidden={true}
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] group-hover/card:shadow-[inset_0_0_0_1px_rgba(232,116,44,0.5)] transition-all duration-300"
        />
      </Link>
    </motion.div>
  );
}

export default function ImageCarousel3D({
  items = DEFAULT_HERO_SLIDER_ITEMS,
  className = '',
  spacing = 22,
  curve = 0.95,
  aspectRatio = 1.6, // 16:10 / 16:9 widescreen card proportion for hero slides
  speed = 2.5,
}: ImageCarousel3DProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const cards = items && items.length > 0 ? items : DEFAULT_HERO_SLIDER_ITEMS;

  const boundedSpacing = Math.min(40, Math.max(8, spacing));
  const offset = 1.2 - 1.2 * Math.min(1, Math.max(0, curve));

  // Repeat items so the curved cylinder wall never gaps
  const repeatCount = Math.max(
    2,
    Math.ceil((168 + 2 * boundedSpacing) / (cards.length * boundedSpacing))
  );
  const totalCards = cards.length * repeatCount;
  const span = totalCards * boundedSpacing;

  const cardW = 2 * Math.sin(((boundedSpacing / 2) * Math.PI) / 180) * 0.93;
  const cardH = cardW / Math.max(0.3, aspectRatio);

  const containerRef = useRef<HTMLDivElement>(null);
  const [focal, setFocal] = useState(0);
  const [limit, setLimit] = useState(4);

  const rotation = useMotionValue(0);
  const version = useMotionValue(0);

  const geometryRef = useRef<Geometry>({
    focal: 0,
    offset,
    spacing: boundedSpacing,
    span,
    cardW,
    cardH,
    limit,
  });

  useLayoutEffect(() => {
    geometryRef.current = {
      focal,
      offset,
      spacing: boundedSpacing,
      span,
      cardW,
      cardH,
      limit,
    };
    version.set(version.get() + 1);
  }, [version, focal, offset, boundedSpacing, span, cardW, cardH, limit]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width < 1 || height < 1) return;

      const angleRad = Math.min(72, 3.3 * boundedSpacing) * (Math.PI / 180);
      const cosVal = offset + Math.cos(angleRad);
      const sinOverCos = Math.sin(angleRad) / cosVal;
      const scaleH = (0.92 * height * cosVal) / cardH;
      const calculatedFocal = Math.min(scaleH, Math.max(width / 2 / sinOverCos, 0.88 * scaleH));

      setFocal((prev) => (Math.abs(prev - calculatedFocal) > 0.5 ? calculatedFocal : prev));
      setLimit((width / 2 + calculatedFocal * cardH * 1.2) / calculatedFocal);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [offset, boundedSpacing, cardH]);

  const cardSlots = useMemo(
    () =>
      Array.from({ length: totalCards }, (_, idx) => ({
        slot: idx,
        item: cards[idx % cards.length],
        labelled: idx < cards.length,
      })),
    [cards, totalCards]
  );

  const steerSpeedRef = useRef(0);
  const isHoveringRef = useRef(false);
  const currentSpeedRef = useRef(0);
  const pointerStateRef = useRef({
    active: false,
    pointerId: -1,
    x: 0,
    t: 0,
    velocity: 0,
  });
  const isAnimatingRef = useRef(false);
  const animationControlsRef = useRef<AnimationPlaybackControls | null>(null);

  const deltaToAngle = useCallback(
    (deltaX: number) => {
      return (deltaX * (1 + offset)) / (geometryRef.current.focal || 1) * (180 / Math.PI);
    },
    [offset]
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 48) / 1000;
      lastTime = now;

      if (pointerStateRef.current.active || isAnimatingRef.current) {
        currentSpeedRef.current = 0;
      } else {
        const targetSpeed = isHoveringRef.current ? 26 * steerSpeedRef.current : -speed;
        currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * (1 - Math.exp(-dt / 0.45));
        if (Math.abs(currentSpeedRef.current) > 0.001) {
          rotation.set(rotation.get() + currentSpeedRef.current * dt);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReducedMotion, rotation, speed]);

  const stopAnimation = useCallback(() => {
    animationControlsRef.current?.stop();
    animationControlsRef.current = null;
    isAnimatingRef.current = false;
  }, []);

  const springTo = useCallback(
    (target: number, vel: number) => {
      const finalAngle = speed === 0 ? Math.round(target / boundedSpacing) * boundedSpacing : target;
      isAnimatingRef.current = true;
      animationControlsRef.current = animate(rotation, finalAngle, {
        type: 'spring',
        velocity: vel,
        stiffness: 110,
        damping: 24,
        restDelta: 0.05,
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });
    },
    [rotation, speed, boundedSpacing]
  );

  const handlePointerUp = useCallback(() => {
    if (!pointerStateRef.current.active) return;
    pointerStateRef.current.active = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';

    const vel = pointerStateRef.current.velocity;
    pointerStateRef.current.velocity = 0;

    if (!prefersReducedMotion && (Math.abs(vel) >= 4 || speed === 0)) {
      springTo(rotation.get() + 0.28 * vel, vel);
    }
  }, [prefersReducedMotion, rotation, springTo, speed]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button > 0) return;
      stopAnimation();
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.style.cursor = 'grabbing';
      pointerStateRef.current = {
        active: true,
        pointerId: e.pointerId,
        x: e.clientX,
        t: e.timeStamp,
        velocity: 0,
      };
    },
    [stopAnimation]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'mouse') isHoveringRef.current = true;

      if (!pointerStateRef.current.active) {
        if (!prefersReducedMotion && e.pointerType === 'mouse') {
          const rect = e.currentTarget.getBoundingClientRect();
          const halfW = rect.width / 2;
          if (halfW > 0) {
            const normalized = (e.clientX - (rect.left + halfW)) / halfW;
            const abs = Math.abs(normalized);
            if (abs <= 0.18) {
              steerSpeedRef.current = 0;
            } else {
              const clamped = Math.min(1, (abs - 0.18) / (1 - 0.18));
              steerSpeedRef.current = Math.sign(normalized) * clamped * clamped;
            }
          }
        }
        return;
      }

      if (pointerStateRef.current.pointerId !== e.pointerId) return;

      const deltaX = e.clientX - pointerStateRef.current.x;
      const dt = Math.max(e.timeStamp - pointerStateRef.current.t, 8) / 1000;
      const deltaAngle = deltaToAngle(deltaX);

      rotation.set(rotation.get() + deltaAngle);

      pointerStateRef.current = {
        active: true,
        pointerId: e.pointerId,
        x: e.clientX,
        t: e.timeStamp,
        velocity: 0.5 * pointerStateRef.current.velocity + (deltaAngle / dt) * 0.5,
      };
    },
    [deltaToAngle, prefersReducedMotion, rotation]
  );

  const handlePointerLeave = useCallback(() => {
    isHoveringRef.current = false;
    steerSpeedRef.current = 0;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stopAnimation();
        const target = Math.round(rotation.get() / boundedSpacing) * boundedSpacing - boundedSpacing;
        if (prefersReducedMotion) {
          rotation.set(target);
        } else {
          isAnimatingRef.current = true;
          animationControlsRef.current = animate(rotation, target, {
            type: 'spring',
            stiffness: 170,
            damping: 30,
            onComplete: () => {
              isAnimatingRef.current = false;
            },
          });
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stopAnimation();
        const target = Math.round(rotation.get() / boundedSpacing) * boundedSpacing + boundedSpacing;
        if (prefersReducedMotion) {
          rotation.set(target);
        } else {
          isAnimatingRef.current = true;
          animationControlsRef.current = animate(rotation, target, {
            type: 'spring',
            stiffness: 170,
            damping: 30,
            onComplete: () => {
              isAnimatingRef.current = false;
            },
          });
        }
      }
    },
    [boundedSpacing, prefersReducedMotion, rotation, stopAnimation]
  );

  const computedWidth = cardW * focal;
  const computedHeight = cardH * focal;
  const isReady = focal > 0;

  return (
    <div
      ref={containerRef}
      className={`relative isolate aspect-[16/6.2] sm:aspect-[16/5.4] lg:aspect-[16/4.8] max-h-[580px] min-h-[320px] w-full select-none overflow-hidden outline-none ${className}`}
      style={{
        cursor: 'grab',
        touchAction: 'pan-y',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)',
        maskImage:
          'linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)',
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="3D hero cylinder slider. Drag or hover sides to turn the wall."
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onLostPointerCapture={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isReady ? 1 : 0,
          perspective: isReady ? focal : undefined,
        }}
      >
        {isReady
          ? cardSlots.map(({ slot, item, labelled }) => (
            <CarouselCard
              key={`${item.id}-${slot}`}
              item={item}
              slot={slot}
              rotation={rotation}
              geometry={geometryRef}
              version={version}
              labelled={labelled}
              width={computedWidth}
              height={computedHeight}
            />
          ))
          : null}
      </div>
    </div>
  );
}
