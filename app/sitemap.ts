import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  return ["", "/features", "/privacy"].map((path) => ({ url: `${base}${path}` }));
}
