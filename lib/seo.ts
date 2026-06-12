import type { Metadata } from "next";
import { defaultDescription, defaultKeywords, siteName, siteUrl } from "./site";

type PageSeoOptions = {
  title: string;
  description?: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path,
  keywords = defaultKeywords,
  noIndex = false,
}: PageSeoOptions): Metadata {
  const canonicalUrl = `${siteUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteName}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonicalUrl,
      siteName,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
