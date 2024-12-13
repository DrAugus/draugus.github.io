import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// refer
//  https://github.com/ecomfe/vue-echarts/issues/652#issuecomment-1250203941
//  https://github.com/SUSTech-CRA/sustech-online-ng/commit/f306bb8813e4bf917aca96814ea2a033d75748ec
//  https://vitejs.dev/config/ssr-options.html
//   
export default defineConfig({
    ssr: {
        noExternal: [
            'echarts', 'vue-echarts',
            'resize-detector', 'zrender',
            '@amap/amap-jsapi-loader', 'AMapLoader',
            '@kjgl77/datav-vue3'
        ],
    },
    // https://vitejs.dev/config/server-options.html#server-proxy
    server: {
        proxy: {
            '/api': {
                target: 'https://en.wikipedia.org',
                changeOrigin: true
            }
        }
    },
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
            includeAssets: ['favicon.ico', 'home.png', 'logo.png'],
            manifest: {
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
        })
    ],
});
