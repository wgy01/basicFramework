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
 * 
 */

export default [
	{
	    path: '/login',
	    name: 'login',
	    meta: {
	      title: 'Login - 登录',
	      hideMenu: true,
	    },
	    component: () => import('@/views/testPages/page2.vue')
  	},
	{
		path: '/',
		name: '_home',
	    redirect: '/home',
	    meta: {//里面的参数用来做各种显示效果的判断（关键字段）
	    	//hideMenu: true,
	    },
	    component: Main,
	    children: [
		    {
		    	path: 'home',
		    	name: 'home',
	            meta: {
	            	title: '首页',
	            	//hideMenu: true,
	            	icon: 'ios-paper',
			    },
	            component: () => import('@/views/home.vue')
		    }
		]
	},
	//一级路由
	{
		path: '/a',
		name: 'a',
		meta: {
			hideBreadcrumb: true,//面包屑导航中隐藏
		},
	    component: Main,
		children: [
			{
				path: 'a1',
				name: 'a1',
				meta: {
					title: '一级菜单1-1',
					icon: 'md-alarm',
				},
				component: () => import('@/views/testPages/page1.vue')
			}
		]
	},
	//二级路由
	{
		path: '/b',
		name: 'b',
		meta: {
			title: '二级菜单111',
			icon: 'md-alarm',
		},
	    component: Main,
		children: [
			{
				path: 'b1',
				name: 'b1',
				meta: {
					title: '1-1',
					icon: 'md-alarm',
				},
				component: () => import('@/views/testPages/page1.vue')
			},
			{
				path: 'b2',
				name: 'b2',
				meta: {
					title: '1-2',
					icon: 'md-alarm',
				},
				component: () => import('@/views/testPages/page2.vue')
			},
			{
				path: 'b3',
				name: 'b3',
				meta: {
					title: '1-3',
					icon: 'ios-paper',
					hideMenu: true,
					highlightName: 'b2',
				},
				component: () => import('@/views/testPages/page1.vue')
			}
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