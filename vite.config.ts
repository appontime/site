import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true }, // Not needed for Vite 5+
  plugins: [react(), mkcert()],
  base: "/site",
});
