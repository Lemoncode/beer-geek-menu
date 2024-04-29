import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    envPrefix: 'PUBLIC_',
    plugins: [react()],
    server: {
      proxy: {
        '/api': env.PUBLIC_API_URL,
      },
    },
  };
});
