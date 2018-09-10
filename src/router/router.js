
import Main from '@/views/main/main.vue';
import secondaryView from '@/components/secondary-view.vue';

/*
 * hideMenu
 * access权限
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
	    	hideMenu: true,
	    },
	    component: Main,
	    children: [
		    {
		    	path: 'home',
		    	name: 'home',
	            meta: {
	            	title: '首页',
	            	hideMenu: true,
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
					icon: 'ios-paper',
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
			title: '二级菜单1',
			icon: 'ios-paper',
		},
	    component: Main,
		children: [
			{
				path: 'b1',
				name: 'b1',
				meta: {
					title: '1-1',
					icon: 'ios-paper',
				},
				component: () => import('@/views/testPages/page1.vue')
			},
			{
				path: 'b2',
				name: 'b2',
				meta: {
					title: '1-2',
					icon: 'ios-paper'
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
	//三级路由
	{
		path: '/c',
		name: 'c',
		meta: {
			title: '二级菜单2',
			icon: 'ios-paper',
			showAlways: true,//永远显示为二级菜单的路由（如果这个路由的子路由长度为1设置该属性后不会变成一级菜单反之）
		},
	    component: Main,
		children: [
			{
				path: 'c1',
				name: 'c1',
				meta: {
					title: '2-1',
					icon: 'md-alert',
					showAlways: true,
				},
				component: secondaryView,
				children: [
					{
						path: 'c1-1',
						name: 'c1-1',
						meta: {
							title: '三级菜单1',
							icon: 'ios-paper',
						},
						component: () => import('@/views/testPages/page3.vue')
					},
//					{
//						path: 'c1-2',
//						name: 'c1-2',
//						meta: {
//							title: '三级菜单2',
//							icon: 'ios-paper',
//						},
//						component: () => import('@/views/testPages/page2.vue')
//					},
				]
			},
		]
	},
	
	{
	    path: '/401',
	    name: 'error_401',
	    meta: {
	      hideMenu: true,
	    },
	    component: () => import('@/views/errorPages/error-401.vue')
	},
	
	{
	    path: '*',
	    name: 'error_404',
	    meta: {
	      hideMenu: true,
	    },
	    component: () => import('@/views/errorPages/error-404.vue')
	}
	
]