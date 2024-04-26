import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@question', replacement: '/src/question' },
      { find: '#types', replacement: '/src/types' },
      { find: '@apis', replacement: '/src/apis' },
    ],
  },
});
