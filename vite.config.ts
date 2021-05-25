import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({command, mode}) => {

  const options = {
    plugins: [vue()],
    resolve: {alias: [{ find: '@', replacement: '/src' },]},
  };

  if (command == 'serve') { // serve
    return {
      ...options,
      server: {
        proxy: {
          '^/api': { target: 'http://localhost:8001', ws: true, changeOrigin: true }
        }
      }
    }
  } else {
    return options;
  }

})