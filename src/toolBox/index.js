
let plant = {}

plant.access_decide = (routerAccess,userAccess) => {//判断是否有对应的权限
	
	let passed = false;
				
	passed = userAccess.some((item,i,arr) => {
		return routerAccess.indexOf(arr[i]) >= 0;
	});
	
	return passed;
	
}

export default plant;
