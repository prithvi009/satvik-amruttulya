import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import districts from "@/data/districts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));

  // v1 ships Pune only; the /franchise/[city] route exists for future
  // programmatic city pages once real content is ready for each district.
  const cityRoutes = districts
    .filter((d) => d.district === "Pune")
    .map((d) => ({
      url: `${SITE.url}/franchise/${encodeURIComponent(d.district.toLowerCase())}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...cityRoutes];
}
