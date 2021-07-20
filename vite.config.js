import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'/@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
		},
	},
	base: './', // 设置打包路径
	css: {
		preprocessorOptions: {
			//这里注意，键名是scss不是sass！一字之差能让你折腾好久
			scss: {
				//这里写你想导入全局scss变量的路径
				//这里注意只能写相对路径，alias貌似在css中不会生效
				additionalData: "@import './src/design/index.scss';",
			},
		},
	},
	server: {
		port: 4000, // 设置服务启动端口号
		open: true, // 设置服务启动时是否自动打开浏览器
		cors: true, // 允许跨域

		// 设置代理，根据我们项目实际情况配置
		// proxy: {
		//   '/api': {
		//     target: 'http://xxx.xxx.xxx.xxx:8000',
		//     changeOrigin: true,
		//     secure: false,
		//     rewrite: (path) => path.replace('/api/', '/')
		//   }
		// }
	},
})
