import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Page 2 File",
    short_name: "Page 2 File",
    description: "Preview webpage sections as PDF pages or PowerPoint slides.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f4f7fb",
    theme_color: "#155eef",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
