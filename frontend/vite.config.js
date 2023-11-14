import { defineConfig } from "vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "mo-burgerz-backend.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
