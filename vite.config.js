import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/scss/stisla/app.scss'
            ],
            ssr: 'resources/js/ssr.js',
            refresh: false,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
          'vueNative': 'vue/dist/vue.esm-bundler.js',
        },
      },
    css: {
        preprocessorOptions: {
          sass: {
            sassOptions: {
                includePaths: [path.join(__dirname, 'node_modules')],
            },
          },
        },
    },
});
