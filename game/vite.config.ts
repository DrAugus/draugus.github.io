import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    css: {
        preprocessorOptions: {
            // fix: Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
            scss: {
                api: "modern-compiler" // or 'modern'
            }
        }
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            // devOptions: {
            //     enabled: true,
            // },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}'],
                maximumFileSizeToCacheInBytes: 20971520, // 10Mb
            },
            includeAssets: ['favicon.ico'],
            manifest: {
                name: 'AugusのGame',
                short_name: 'AugusのGame',
                description: 'AugusのGame',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'home.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'home.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        })
    ],
});
