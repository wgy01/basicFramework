import Main from '@/views/main/main.vue';
import secondaryView from '@/components/secondary-view.vue';

/**
 * meta属性:
 * 
 * @param {Boolean : false} hideMenu 设置不在左侧菜单显示的路由
 * @param {Array} access 设置路由权限[1,2,3...] 或 ['admin','user'...]
 * @param {Boolean : false} showAlways 设置路由永远显示为二级菜单
 * @param {Boolean : false} hideBreadcrumb 设置不显示在面包屑导航中
 * @param {String : '定向到xxx路由的name'} highlightName 点击该路由后在菜单中高亮重定向
 * @param {Boolean : false} hideMenuBar 隐藏左侧菜单栏
 * 
 */

export default [
//	{
//		path: '/',
//		name: '_home',
//	    redirect: '/home',
//	    meta: {//里面的参数用来做各种显示效果的判断（关键字段）
//	    },
//	    component: Main,
//	    children: [
//		    {
//		    	path: 'home',
//		    	name: 'home',
//	            meta: {
//	            	title: '商品管理',
//	            	hideMenuBar: true
//			    },
//	            component: () => import('@/views/goods/index.vue')
//		    }
//		]
//	},
	{
		path: '/material',
		name: 'material',
		meta: {
			title: '物料管理',
		},
	    component: Main,
		children: [
			{
				path: 'material_index',
				name: 'material_index',
				meta: {
					hideMenuBar: true
				},
				component: resolve => require(['@/views/material/index.vue'], resolve), // 懒加载
			}
		]
	},
	{
		path: '/organize',
		name: 'organize',
		meta: {
			title: '组织',
		},
	    component: Main,
		children: [
			{
				path: 'class',
				name: 'class',
				meta: {
					title: '部门管理',
					icon: 'ios-more',
				},
				component: resolve => require(['@/views/user/class.vue'], resolve), // 懒加载
			},
			{
				path: 'user',
				name: 'user',
				meta: {
					title: '员工管理',
					icon: 'ios-more',
				},
				component: resolve => require(['@/views/user/user.vue'], resolve), // 懒加载
			},
			{
				path: 'role',
				name: 'role',
				meta: {
					title: '角色管理',
					icon: 'ios-more',
				},
				component: resolve => require(['@/views/user/role.vue'], resolve), // 懒加载
			},
		]
	},
	{
	    path: '/401',
	    name: 'error-401',
	    meta: {
	      hideMenu: true,
	    },
	    component: () => import('@/views/error-page/401.vue')
	},
	{
	    path: '/403',
	    name: 'error-403',
	    meta: {
	      hideMenu: true,
	    },
	    component: () => import('@/views/error-page/401.vue')
	},
	{
	    path: '*',
	    name: 'error-404',
	    meta: {
	      hideMenu: true,
	    },
	    component: () => import('@/views/error-page/404.vue')
	}
]