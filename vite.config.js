import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    glsl(),
    Sitemap({
      hostname: "https://ashwoq.netlify.app/",
      generateRobotsTxt: true,
    }),
  ],
});
