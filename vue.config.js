/*
 * 基础配置修改
 */

const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = '/'

module.exports = {

	baseUrl: BASE_URL, // 基本路径

	outputDir: 'dist', // 输出文件目录

	productionSourceMap: false, // 打包时不生成.map文件

	chainWebpack: config => { //自定义路径配置
		config.resolve.alias
			.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	},

	css: { // 配置css模块
		loaderOptions: { // 向预处理器 Loader 传递配置选项
			less: { // 配置less（其他样式解析用法一致）
				javascriptEnabled: true // 设置为true
			}
		}
	},

}