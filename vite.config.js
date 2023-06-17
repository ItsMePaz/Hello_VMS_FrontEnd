import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Hello_VMS_FrontEnd/",
  plugins: [react()],
  server: {
    proxy: "http://localhost:3005",
  },
});
