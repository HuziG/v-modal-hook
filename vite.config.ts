import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	resolve: {
		alias: [
			{
				find: /\/#\//,
				replacement: pathResolve('types') + '/',
			},
			{
				find: '@p',
				replacement: pathResolve('packages') + '/',
			},
			{
				find: '@e',
				replacement: pathResolve('example') + '/',
			},
		],
		dedupe: ['vue'],
	},
  build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'), //指定组件编译入口文件
			name: 'vModalHook',
			fileName: 'v-modal-hook',
		},//库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},// rollup打包配置
	},
})
