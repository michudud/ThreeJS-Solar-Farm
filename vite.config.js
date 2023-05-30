import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ThreeJS-Solar-Farm/",
  plugins: [react()],
  root: "src",
  build: { outDir: "../dist" },
  assetsInclude: ["**/*.glb", "**/*.fbx"],
});
