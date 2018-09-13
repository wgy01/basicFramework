import Vue from 'vue'
import Router from 'vue-router'
import routers from './router.js'; //调用路由表
import { pathImperfect, canTurnTo } from '@/toolBox'; //调用工具

Vue.use(Router)

export const router = new Router({
	routes: routers
});

router.beforeEach((to, from, next) => {//路由跳转前
	
	
	
	
	//权限
	if(canTurnTo(routers, window.USE_RACCESS, to.name)){
		
		if(pathImperfect(routers, to.name)){
			next({
				replace: true,
				name: 'error-401'
			});
		}else{
			next()
		}
		
	}else{
		
		next({
			replace: true,
			name: 'error-403'
		});
		
	}
	
	
	
	
});