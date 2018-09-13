import Vue from 'vue'
import Router from 'vue-router'
import routers from './router.js'; //调用路由表
import { pathImperfect } from '@/toolBox'; //调用工具

Vue.use(Router)

export const router = new Router({
	routes: routers
});

router.beforeEach((to, from, next) => {//路由跳转前
	
	pathImperfect(routers,router,to.name,next);
	
});