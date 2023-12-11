import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from "vite-jsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/youtube-clone/",
  plugins: [react(), jsconfigPaths()],
})