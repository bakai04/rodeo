import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    strictPort: true,
    port: 3000,
  },
  plugins: [react()],
  define: {
    'process.env': {}
  }
});
