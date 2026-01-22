import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    base: "/private-page/",
    define: {
      // Define process.env to be accessible in the browser
      "process.env": JSON.stringify(env),
      // Or specifically for libraries expecting `process.env.NODE_ENV`
      // 'process.env.NODE_ENV': JSON.stringify(mode),
    },
  });
};
