import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Page2File",
    short_name: "Page2File",
    description: "Preview webpage sections as PDF pages or PowerPoint slides.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f4f7fb",
    theme_color: "#155eef",
    icons: [
      {
        src: "/demos/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
