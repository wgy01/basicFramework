import axios from 'axios';

/*
 * 全局axios配置
*/

axios.defaults.baseURL = window.BASE_URL; //配置接口基础地址

axios.defaults.timeout = 15000; //响应超时时间（毫秒）

axios.defaults.withCredentials = true; //**********允许携带cookie,实现跨域登录（非常重要）*************

axios.interceptors.request.use( config => { // 添加请求拦截器
	
	// 在发送请求之前做些什么
	
	console.info({
		'请求的接口': config.baseURL + config.url,
		'请求的类型': config.method,
		'发送的数据': config.data,
	});
	
	return config;
	
}, error => {
	
	// 对请求错误做些什么
	
	console.error(error);
	
	return Promise.reject(error);
	
});

axios.interceptors.response.use( res => { // 添加响应拦截器
	
    // 对响应数据做点什么
    
    console.log('返回的数据：', res.data);
    
    return res.data;
    
}, error => {
	
	// 对响应错误做点什么
    
    console.error('axios发生了错误！：' + error);
    
	return Promise.reject(error);
    
});

export const request = axios;

export const post = dataObj => {
	
	return new Promise( resolve => {
		
		let defaultParam = {
			url: '',
			data: '',
			config: {},
			allSuccess: () => {},
			success: () => {},
			fail: () => {},
			complete: () => {},
		}
		
		let defaultConfig = {
			
			transformRequest: [data => { // 在发送数据之前进行数据转换
				
				let formData = new FormData(); // formData可以实现文件的异步上传
				
				for(let _key in data) {
					
					formData.append(_key, data[_key]);
			
				}
				
				return formData;
				
			}]
			
		};
		
		let param = Object.assign({}, defaultParam, dataObj);
		
		let newConfig = Object.assign({}, defaultConfig, param.config);
		
		axios.post(param.url, param.data, newConfig).then(res => {
			
			if(res.code == 0){
				
				param.allSuccess(res);
				
			}else{
				
				param.fail(res);
				
			}
		
			param.success(res);
		
			param.complete(res);
			
			resolve(res);
			
		}).catch(error => {
		
			param.fail(error);
		
			param.complete(error);
			
		});
		
	});
	
}