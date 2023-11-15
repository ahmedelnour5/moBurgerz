import { defineConfig } from "vite";
import commonjs from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs],
  define: { _global: {} },
  server: {
    proxy: {
      "/api": {
        target: "https://mo-burgerz-backend.vercel.app/",
        changeOrigin: true,
      },
    },
  },
});
