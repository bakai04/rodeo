import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteEnvCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    strictPort: true,
    port: 3000,
  },
  plugins: [
    react(),
  ],
  // define: {
  //   'process.env': {}
  // }
});

