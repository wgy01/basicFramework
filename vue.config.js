/*
 * 基础配置修改
 */

const path = require('path');//Node.js语法（引入处理文件路径的小工具模块）

const webpack = require('webpack')

const resolve = dir => {//绝对路径
	return path.join(__dirname, dir);//Node.js语法用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
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

	chainWebpack: config => {
		config.resolve.alias //定义路径
			.set('@', resolve('src'))//自定义路径配置, key,value自行定义，比如.set('@@', resolve('src/components'))
			.set('_AXIOS', resolve('src/axios'))
	},

	css: { // 配置css模块
		loaderOptions: { // 向预处理器 Loader 传递配置选项
			less: { // 配置less（其他样式解析用法一致）
				javascriptEnabled: true // 设置为true
			}
		}
	},
	
	configureWebpack: {//配置webpack
	    plugins: [//插件
	     	new webpack.ProvidePlugin({//全局变量插件
			 	$ax: '_AXIOS',
			})
	    ]
	},
	
	pluginOptions: {// 第三方插件配置
		//...
	},


}