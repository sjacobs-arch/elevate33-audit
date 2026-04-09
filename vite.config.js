import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // Increase chunk size warning limit — App.jsx is large due to embedded logo
    chunkSizeWarningLimit: 2000,
  },
});
