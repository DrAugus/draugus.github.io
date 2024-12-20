import { VitePWA } from 'vite-plugin-pwa'

// refer
//  https://github.com/vite-pwa/vite-plugin-pwa/blob/main/docs/scripts/pwa.ts
//   
export function pwa() {
    return VitePWA({
        outDir: '.vitepress/dist',
        registerType: 'prompt',
        includeManifestIcons: false,
        selfDestroying: true,
        manifest: {
            id: '/',
            name: 'Augusの享楽',
            short_name: 'Augusの享楽',
            description: 'Augusの享楽',
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
        workbox: {
            globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
            maximumFileSizeToCacheInBytes: 20971520, // 10Mb
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'gstatic-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'jsdelivr-images-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        },
    })
}