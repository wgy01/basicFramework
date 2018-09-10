
let plant = {}

plant.access_decide = (routerAccess,userAccess) => {//检查权限
	
	let passed = false;
				
	passed = userAccess.some((item,i,arr) => {
		return routerAccess.indexOf(arr[i]) >= 0;
	});
	
	return passed;
	
}

plant.path_imperfect = (routeList, routeInstance, routeName, next) => {//路径不完整
	
	let traverseTree = (arr) => {//使用递归的方法遍历树
		
		if (!arr) return;
		
		for(let i=0; i<arr.length; i++){
			
			let item = arr[i];
			
			if((item.children && item.children.length > 0) && (item.name === routeName)){
				
				routeInstance.replace({
					name: 'error_401'
				});
				
			}else{
				
				next();
				
				if(item.children && item.children.length > 0){
					traverseTree(item.children);
				}
				
			}
			
		}
		
	}
	
	traverseTree(routeList);
	
}

export default plant;
