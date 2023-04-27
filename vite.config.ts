import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  base: "/test-employcity/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
