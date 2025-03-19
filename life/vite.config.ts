import { defineConfig } from 'vite';
import ElementPlus from 'unplugin-element-plus/vite';

// refer
//  https://github.com/ecomfe/vue-echarts/issues/652#issuecomment-1250203941
//  https://github.com/SUSTech-CRA/sustech-online-ng/commit/f306bb8813e4bf917aca96814ea2a033d75748ec
//  https://vitejs.dev/config/ssr-options.html
//   
export default defineConfig({
    plugins: [
        ElementPlus({
            // useSource: true,
        }),
    ],
    ssr: {
        noExternal: [
            'echarts', 'vue-echarts',
            'resize-detector', 'zrender',
            '@amap/amap-jsapi-loader', 'AMapLoader',
            '@kjgl77/datav-vue3',
            'element-plus',
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
});
