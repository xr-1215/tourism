const { defineConfig } = require("@vue/cli-service");
console.log(process.env.VUE_APP_SERVER_URL);
module.exports = defineConfig({
  //基本路径
  publicPath: "./",
  //构建时的输出目录
  outputDir: "dist",
  //放置静态资源的目录
  assetsDir: "static",
  //html的输出路径
  indexPath: "index.html",
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: true,
  // 关闭ESLint的规则
  lintOnSave: false,
  // 使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  runtimeCompiler: true,
  // 生产环境不生成source map
  productionSourceMap: false,
  //dev环境下,webpack-dev-server相关配置
  // devServer: {
  //   open: true, // npm run serve 时是否直接打开浏览器
  //   proxy: {
  //     "/vcp-server": {
  //       target: "http://8.140.110.122:80", // 阿里云
  //       changeOrigin: true,
  //       ws: true,
  //     },
  //   },
  // },
});
