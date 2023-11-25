import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // css: {
  //   // To use custom scss file with Vuetify
  //   preprocessorOptions: {
  //     sass: {
  //       additionalData: ['@import "src/style/main.scss"', ""].join("\n"),
  //     },
  //   },
  // },
});
