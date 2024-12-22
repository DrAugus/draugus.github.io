import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            // fix: Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
            scss: {
                api: "modern-compiler" // or 'modern'
            }
        }
    },
});
