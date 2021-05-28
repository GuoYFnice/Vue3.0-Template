const path = require('path')
// vite.config.js # or vite.config.ts

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  // hostname: '0.0.0.0',
  port: 8080,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  cssPreprocessOptions: {
    //这里注意，键名是scss不是sass！一字之差能让你折腾好久
    scss: {
        //这里写你想导入全局scss变量的路径
        //这里注意只能写相对路径，alias貌似在css中不会生效
        additionalData: "@import './src/design/index.scss';",
    },
  },
  // 配置Dep优化行为
  optimizeDeps: {
      include: ['lodash-es'],
  },
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  // 反向代理
  proxy: {
    '/api': {
      // target: 'https://blog.csdn.net/weixin_45292658',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}