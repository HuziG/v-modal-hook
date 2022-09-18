import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
function pathResolve(dir) {
    return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '::',
        open: true,
        https: false,
        port: 3008,
    },
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: `${pathResolve('packages/')}/`,
            },
            {
                find: 'v-modal-hook',
                replacement: `${pathResolve('packages/index.ts')}`,
            },
        ],
    },
    build: {
        minify: 'esbuild',
        lib: {
            formats: ['umd', 'es'],
            entry: resolve(__dirname, 'packages/index.ts'),
            name: 'v-modal-hook',
        },
        rollupOptions: {
            output: {
                name: 'v-modal-hook',
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
            // 确保外部化处理那些你不想打包进库的依赖
            external: [
                'vue',
                '@highlightjs/vue-plugin',
                'highlight.js',
                'vue-highlightjs',
            ],
        },
    },
    plugins: [
        vue(),
        WindiCSS(),
    ],
});
