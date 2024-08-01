/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 8080,
        },
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'app'),
                '@user': path.resolve(__dirname, 'accounts/user'),
                '@admin': path.resolve(__dirname, 'accounts/admin'),
                '@shared': path.resolve(__dirname, 'shared'),
                '@styles': path.resolve(__dirname, 'shared/styles/index.scss'),
            },
        },

        css: {
            modules: {
                generateScopedName:
                    mode === 'production' ? '[local]-[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
                localsConvention: 'camelCase',
            },
        },
        plugins: [react(), svgr()],
    };
});
