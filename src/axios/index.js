/*
 * axios配置管理
 */

import Vue from 'vue'//vue组件

const vm = new Vue();//vue实例

import axios from 'axios';//axios组件

/*
	---------------------vue内使用方式---------------------
	
	this.$axios.post('接口路径', {
		要发送的数据
	})
	.then(response => {//返回请求数据
		console.log(response)
	})
	.catch(function (error) {//返回错误
		console.log(error);
	});
	
*/

//--------------------------------------------全局设置-------------------------------

axios.defaults.baseURL = window._HOST.BASE_URL; //配置接口地址,在globalVariable.js

//axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';//不能打开这个配置,打开用不了FormData

axios.defaults.timeout = 5000; //响应时间

axios.defaults.withCredentials = true; //允许携带cookie,实现跨域登录	

//-----------------在发送数据之前进行数据转换 , get不会转换,因为get走的是 parmas属性----------------------

axios.defaults.transformRequest = function(_data) { //第一个参数_data是接收过来的数据

	var formData = new FormData(); //使用formData方式发送表单 否则程序接收不到表单变量（formData可以实现文件的异步上传）

	for(let v in _data) { //for in 遍历数据进行转换

		formData.append(v, _data[v]);

	}
	console.log('-->发送了数据:', _data);

	// console.log('发送了数据:',formData);

	return formData;

};

//--------------------添加一个请求拦截器,每次请求都会拦截一次,但是尽量使用全局设置,方便每次使用不同的设置--------------

axios.interceptors.request.use(function(_config) { //在请求发出之前对配置进行一些操作

	let config = _config;
	//如果想每次请求的时候更改配置, 在这里增加config配置项

	console.log('-->请求了URL(' + _config.method + '):', _config.baseURL + _config.url);

	return config;

}, function(err) {

});

//------------------------添加一个响应拦截器----------------------

axios.interceptors.response.use(

	function(_res) { //在这里对返回的数据进行处理
		
		console.log('<--返回了数据', _res.data);

		if(_res.data.status == 200) { //获取数据成功
			
			
			
		}else { //获取数据失败

			vm.$Message.error(_res.data.message);

		}

		return _res.data;

	},
	function(_err) { //处理错误

		console.log('>>>>>>发生了ajax错误');

		console.log('-------------------------------------------');

		if(_err.response) { //请求已经发出，但是服务器响应返回的状态码不在2xx的范围内		

			// console.log('_err.response',_err.response);

			console.log('status:', _err.response.status);

			console.log('statusText:', _err.response.statusText);

		} else { //一些错误是在设置请求的时候触发		   
			
		}

		// console.log('_err.config',_err.config);

		console.log('url:', _err.config.url);

		console.log('method:', _err.config.method);

		console.log('data:', _err.config.data);

		console.log('headers:', _err.config.headers);

		console.log('-------------------------------------------');

		// return Promise.reject(_err);

		return _err;

	}
);

//axios组件完毕------------------------------------------

export default axios