import type { MetadataRoute } from "next";
import { absoluteUrl, indexingEnabled } from "@/shared/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap: absoluteUrl("/sitemap.xml"),
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*/preview/", "/*/download/", "/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
