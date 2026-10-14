import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoPageView from "@/components/SeoPageView";
import { SEO_PAGES, pagePath } from "@/lib/seo";
const TYPE = "alternatives" as const;
const pages = SEO_PAGES.filter(p => p.type === TYPE);
export const dynamicParams = false;
export function generateStaticParams() { return pages.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = pages.find(x => x.slug === slug); if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: pagePath(p) }, openGraph: { title: p.title, description: p.description, url: pagePath(p) } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages.find(x => x.slug === slug); if (!p) notFound();
  return <SeoPageView p={p} />;
}
