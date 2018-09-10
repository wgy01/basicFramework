import routers from '@/router/router.js'; //调用路由表
import { getMenuByRouter, setBreadcrumb, getHomeRoute } from '@/toolBox'; //调用工具

const mainFrame = {
	
	state: {//数据
		
		openNamesArr: [],//展开的菜单数组
		
		homeRoute: getHomeRoute(routers),//默认首页面包屑导航
		
		breadCrumbList: [],//面包屑导航列表
		
	},
	
	mutations: { //事件集,mutation是同步的
		
		setOpenNames(state,routeInstance){//设置当前展开的菜单
			
			state.openNamesArr = routeInstance.path.slice(1).split('/');
			
			state.openNamesArr.splice(state.openNamesArr.length-1,1)
			
		},
		
		setBreadCrumb (state, routeMatched) {
	    	state.breadCrumbList = setBreadcrumb(routeMatched, state.homeRoute)
	    },
		
	},
	
	getters: {//计算属性
		
		menuList: (state, getters) => getMenuByRouter(routers, [1,3]),//菜单列表
		
	},
	
	actions: {//专门放置异步交互代码,Action 是异步的
		
	},
	
	modules: {//模板
		
	}
	
}

export default mainFrame;
