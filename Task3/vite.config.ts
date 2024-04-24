import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "#types", replacement: "/src/types" },
      { find: "#question", replacement: "/src/question" },
      { find: "#apis", replacement: "/src/apis" },
      { find: "#const", replacement: "/src/const" },
    ],
  },
})
