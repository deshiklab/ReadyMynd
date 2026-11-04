import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InsightArticleContent } from '@/components/pages/insight-article-content';
import { insights } from '@/lib/content';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return { title: 'Insight not found' };

  return {
    title: insight.title.en,
    description: insight.excerpt.en,
    alternates: { canonical: `/insights/${insight.slug}/` },
    openGraph: {
      type: 'article',
      title: insight.title.en,
      description: insight.excerpt.en,
      publishedTime: insight.date,
    },
  };
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  if (!insights.some((item) => item.slug === slug)) notFound();
  return <InsightArticleContent slug={slug} />;
}
