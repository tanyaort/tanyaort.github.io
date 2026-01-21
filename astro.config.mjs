import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tanya-ortega.com",
  base: "/",
  vite: {
    resolve: {
      alias: {
        "@layouts": "/src/layouts",
        "@components": "/src/components",
        "@styles": "/src/styles",
      },
    },
  },
});

