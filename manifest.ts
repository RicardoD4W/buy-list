import { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  name: "to-buy-list",
  short_name: "TBL",
  description: "Site for having a  buy-list",
  theme_color: "#2C3E50",
  background_color: "#F8F8F0",
  display: "fullscreen",
  lang: "es",
  icons: [
    {
      src: "/icon/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};
