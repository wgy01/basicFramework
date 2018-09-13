import routers from '@/router/router.js'; //调用路由表
import { getMenuByRouter, setBreadcrumb, getHomeRoute, setTagNavListInLocalstorage, getTagNavListFromLocalstorage, routeHasExist } from '@/toolBox'; //调用工具

const mainFrame = {
	
	state: {//数据
		
		tagNavList: [],//tag标签列表
		
		homeRoute: getHomeRoute(routers),//name属性等于home路由数据
		
		breadCrumbList: [],//面包屑导航列表
		
	},
	
	mutations: { //事件集,mutation是同步的
		
		setBreadCrumb (state, routeMatched) {//设置面包屑导航
			
	    	state.breadCrumbList = setBreadcrumb(routeMatched, state.homeRoute);
	    	
	    },
	    
	    setTagNavList(state, list) {//设置tag标签导航
	    	
			if(list) {
				
				state.tagNavList = [...list];
				
				setTagNavListInLocalstorage([...list]);
				
			}else{
				
				state.tagNavList = getTagNavListFromLocalstorage();
				
			}
			
		},
		
		addTag(state, {route,type = 'unshift'}){//添加默认的tag标签
			
			if(!routeHasExist(state.tagNavList, route)) {
				
				if(type === 'push') {
					
					state.tagNavList.push(route);
					
				}else {
					
					if(route.name === 'home'){
						
						state.tagNavList.unshift(route);
						
					}else{
						
						state.tagNavList.splice(1, 0, route);
						
					}
					
				}
				
				setTagNavListInLocalstorage([...state.tagNavList]);
				
			}
			
		},
		
	},
	
	getters: {//计算属性
		
		menuList: (state, getters) => getMenuByRouter(routers, window.USE_RACCESS),//获取菜单列表
		
	},
	
	actions: {//专门放置异步交互代码,Action 是异步的
		
	},
	
	modules: {//模板
		
	}
	
}

export default mainFrame;
