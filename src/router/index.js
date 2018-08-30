import Vue from 'vue'
import Router from 'vue-router'
import routers from './router.js'; //调用路由表

Vue.use(Router)

export const router = new Router({
	routes: routers
})