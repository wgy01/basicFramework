import routers from '@/router/router.js'; //调用路由表
import plant from '@/toolBox'; //调用工具

const mainFrame = {
	
	state: {//数据
		
		menuList: [],//要显示的菜单列表
		
	},
	
	mutations: { //事件集,mutation是同步的
		
		menuFiltration(state){//左侧菜单过滤
			
			let routerList = routers;//所有路由列表
			
			let userAccess = [3,4,2];
			
			function abc (routerAccess,userAccess){
				
				let passed;
				
				passed = userAccess.some((item,i,arr) => {//判断是否有对应的权限
					return routerAccess.indexOf(arr[i]) >= 0
				});
				
				return passed;
				
			}
			
			
			routerList.forEach((item,index,arr) => {//1
				
				if(item.meta.access && plant.accessJudge(item.meta.access,userAccess)){
					
//					console.log(item);
					arr.splice(index,1);

				}
				
			})
			console.log(routerList);
			
		}
		
	},
	
	getters:{//计算属性
		
	},
	
	actions:{//专门放置异步交互代码,Action 是异步的
		
	},
	
	modules:{//模板
		
	}
	
}

export default mainFrame;
