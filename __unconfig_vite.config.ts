
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import dts from 'vite-plugin-dts'
import WindiCSS from 'vite-plugin-windicss'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
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
        name: 'v-modal-hook', // 仓库或组件的名字
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },

      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
      ],
    },
  },
  plugins: [
    vue(),
    dts(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    WindiCSS(),
  ],
})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;