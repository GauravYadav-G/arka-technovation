import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticlePage from '@/views/NewsArticlePage';
import { BLOG_POSTS, getBlogBySlug } from '@/lib/blogs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} — ARKA Technovation Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ARKA Technovation Private Limited`,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: 'article',
      images: [
        {
          url: post.image,
          alt: post.alt,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsArticlePage post={post} />;
}

