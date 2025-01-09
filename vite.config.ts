import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import {fileURLToPath} from "url";


// define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "src/ui"),
      "@views": path.resolve(__dirname, "src/views"),
    }
  }
})
