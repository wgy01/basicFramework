
/*
 * 检查权限
 * @param routerAccess 路由权限
 * @param userAccess 用户权限
 */
export const accessDecide = (routerAccess,userAccess) => {
	if((routerAccess && routerAccess.length > 0) && (userAccess && userAccess.length > 0)){
		return userAccess.some((item,index,rawArr) => routerAccess.indexOf(rawArr[index]) >= 0);
	}else{
		return true;
	}
}






/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
	const keysArr1 = Object.keys(obj1)
	const keysArr2 = Object.keys(obj2)
	if(keysArr1.length !== keysArr2.length) return false
	else if(keysArr1.length === 0 && keysArr2.length === 0) return true
	/* eslint-disable-next-line */
	else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
	const params1 = route1.params || {}
	const params2 = route2.params || {}
	const query1 = route1.query || {}
	const query2 = route2.query || {}
	return(route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}






/*
 * 过滤菜单列表
 * @param routerList 路由列表
 * @param userAccess 用户权限
 */
export const getMenuByRouter = (routerList, userAccess) => {
	let res = [];
	routerList.forEach(item => {
		if(!item.meta || (item.meta && !item.meta.hideMenu)) {
			let obj = {
				icon: (item.meta && item.meta.icon) || '',
				name: item.name,
				meta: item.meta
			}
			if(((item.children && item.children.length > 0) || (item.meta && item.meta.showAlways)) && accessDecide(item.meta.access, userAccess)){
				obj.children = getMenuByRouter(item.children, userAccess);
			}
			//if(item.meta && item.meta.href) obj.href = item.meta.href
			if(accessDecide(item.meta.access, userAccess)) res.push(obj)
		}
	})
	return res;
}





/*
 * 设置面包屑导航
 * @param routeMatched 路由matched属性
 * @param homeRoute 路由name属性等于home的数据
 */
export const setBreadcrumb = (routeMatched, homeRoute) => {
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





/*
 * 获取name属性等于home的路由
 * @param routerList 路由列表
 */
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
 * 设置本地存储的标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  sessionStorage.tagNaveList = JSON.stringify(list);
}

/**
 * @description 获取本地存储中的标签导航列表
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = sessionStorage.tagNaveList;
  return list ? JSON.parse(list) : [];
}

/**
 * 获取新的tag导航列表
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
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
	let i = -1
	while(++i < times) {
		callback(i)
	}
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 * @param tagNavList tag标签列表
 * @param routeItem 路由项目
 */
export const routeHasExist = (tagNavList, routeItem) => {
	let len = tagNavList.length
	let res = false
	doCustomTimes(len, (index) => {
		if(routeEqual(tagNavList[index], routeItem)) res = true
	})
	return res
}





/**
 * 权鉴
 * @param {*} routeName 即将跳转的路由name
 * @param {*} userAccess 用户权限数组
 * @param {*} routeList 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (routeList, userAccess, routeName) => {
	const routePermissionJudge = (list) => {
	    return list.some(item => {
			if (item.name === routeName) {
				return accessDecide(item.meta.access,userAccess);
			}else if (item.children && item.children.length > 0) {
	    		return routePermissionJudge(item.children);
	    	}
	    });
	}
	return routePermissionJudge(routeList);
}

/*
 * 跳转的路由路径不完整
 */
export const pathImperfect = (routeList, routeName) => {
	const imperfect = (list) => {
		return list.some(item => {
			if(item.children && item.children.length > 0) if(item.name === routeName) return true; else return imperfect(item.children);
		});
	}
	return imperfect(routeList);
}
