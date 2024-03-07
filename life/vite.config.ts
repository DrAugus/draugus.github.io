import { defineConfig } from 'vite';

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
            '@amap/amap-jsapi-loader', 'AMapLoader'
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
});
