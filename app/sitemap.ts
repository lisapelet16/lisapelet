import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/urunler", changeFrequency: "weekly", priority: 0.9 },
  { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.8 },
  { path: "/iletisim", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sss", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
