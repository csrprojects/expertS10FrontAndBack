import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vite.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         port: import.meta.env.VITE_PORT || '3001', // Porta personalizada
//     },
// });

export default defineConfig (({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [react()],
        server: {
            port: env.VITE_PORT || '3001', // Porta personalizada
        },
    };
});

