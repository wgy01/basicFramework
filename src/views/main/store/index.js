import routers from '@/router/router.js'; //调用路由表
import plant from '@/toolBox'; //调用工具

const mainFrame = {
	
	state: {//数据
		
		menuList: [],//要显示的菜单列表
		
		openNamesArr: [],//展开的菜单数组
		
		breadcrumbList: [//面包屑列表
			{
				title: '',
				icon: '',
				name: '',
			}
		],
		
	},
	
	mutations: { //事件集,mutation是同步的
		
		menuFiltration(state){//左侧菜单过滤
			
			let routerList = routers;//所有路由列表
			
			let userAccess = [1,3];//用户权限
			
			let traverseTree = (arr) => {//使用递归的方法遍历树
				
			    if (!arr) return;
				
				for(let i=0; i<arr.length; i++){
					
					let item = arr[i];
					
					if(item.meta.menuHide){ //过滤菜单中不显示的路由
						
						arr.splice(i,1);
						
						i = -1;
						
					}
					
					if(item.meta.access && !plant.access_decide(item.meta.access,userAccess)){//过滤权限不符合的路由
						
						arr.splice(i,1);
						
						i = -1;
						
					}
					
					if(item.children && item.children.length > 0){//有children的路由，而且有长度
						
						traverseTree(item.children);//递归
						
				    }
					
					if(item.children && item.children.length <= 0){//过滤children为空的路由
						
						arr.splice(i,1);
						
						i = -1;
						
					}
					
				}
				
			}
			
			traverseTree(routerList);
			
			state.menuList = routerList;
			
		},
		
		setOpenNames(state,routeInstance){//设置当前展开的菜单
			
			state.openNamesArr = routeInstance.path.slice(1).split('/');
			
			state.openNamesArr.splice(state.openNamesArr.length-1,1)
			
		},
		
		setBreadcrumbList(state,routeInstance){//设置面包屑导航数据
			
			let routerList = routers;//所有路由列表
			
			let recursion = (arr) => {
				
				if (!arr) return;
				
				for(let i=0; i<arr.length; i++){
					
					let item = arr[i];
					
					if(item.children && item.children.length > 0){
						
						traverseTree(item.children);//递归
						
					}
					
				}
				
			}
			
		},
		
	},
	
	getters:{//计算属性
		
	},
	
	actions:{//专门放置异步交互代码,Action 是异步的
		
	},
	
	modules:{//模板
		
	}
	
}

export default mainFrame;
