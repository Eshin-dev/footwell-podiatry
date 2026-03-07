import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = ["/", "/services", "/what-is-biomechanics"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
