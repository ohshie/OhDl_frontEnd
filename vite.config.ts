import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      server: { https: { cert: "./server.pem", key: "./server.key" } },
      plugins: [react()],
    };
  } else {
    return {
      server: { https: true },
      plugins: [react()],
    };
  }
});
