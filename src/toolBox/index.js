
export const accessDecide = (routerAccess,userAccess) => {//检查权限
	
	if((routerAccess && routerAccess.length > 0) && (userAccess && userAccess.length > 0)){
		return userAccess.some((item,i,arr) => {
			return routerAccess.indexOf(arr[i]) >= 0;
		});
	}else{
		return true
	}
		
}

export const getMenuByRouter = (routerList, userAccess) => {//设置菜单列表
	
	let res = [];
	
	routerList.forEach(item => {
		if(!item.meta || (item.meta && !item.meta.hideMenu)) {
			let obj = {
				icon: (item.meta && item.meta.icon) || '',
				name: item.name,
				meta: item.meta
			}
			if(((item.children && item.children.length !== 0) || (item.meta && item.meta.showAlways)) && accessDecide(item.meta.access, userAccess)){
				obj.children = getMenuByRouter(item.children, userAccess)
			}
			if(item.meta && item.meta.href) obj.href = item.meta.href
			if(accessDecide(item.meta.access, userAccess)) res.push(obj)
		}
	})
	
	return res;
	
}

export const pathImperfect = (routeList, routeInstance, routeName, next) => {//路径不完整
	
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

export const setBreadcrumb = (routeMatched, homeRoute) => {//设置面包屑导航
	let res = routeMatched.filter(item => {
		return item.meta === undefined || !item.meta.hideBreadcrumb
	}).map(item => {
		let obj = {
			icon: (item.meta && item.meta.icon) || '',
			name: item.name,
			meta: item.meta
		}
		return obj
	})
	res = res.filter(item => {
		return !item.meta.hideMenu
	})
	return [Object.assign(homeRoute, {to: homeRoute.path}), ...res]
}

export const getHomeRoute = routerList => {
	let i = -1
	let len = routerList.length
	let homeRoute = {}
	while(++i < len) {
		let item = routerList[i]
		if(item.children && item.children.length) {
			let res = getHomeRoute(item.children)
			if(res.name) return res
		} else {
			if(item.name === 'home') homeRoute = item
		}
	}
	return homeRoute
}

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const { name, path, meta } = newRoute
  let newList = [...list]
  if (newList.findIndex(item => item.name === name) >= 0) return newList
  else newList.push({ name, path, meta })
  return newList
}

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list, route) => {
  let res = {}
  if (list.length === 2) {
    res = getHomeRoute(list)
  } else {
    const index = list.findIndex(item => routeEqual(item, route))
    if (index === list.length - 1) res = list[list.length - 2]
    else res = list[index + 1]
  }
  return res
}

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}
