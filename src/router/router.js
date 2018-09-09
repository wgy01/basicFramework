
import Main from '@/views/main/main.vue'
import secondaryView from '@/components/secondary-view.vue'

/*
 * menuHide
 * access权限
 */

export default [
	
	{
	    path: '/login',
	    name: 'login',
	    meta: {
	      title: 'Login - 登录',
	      menuHide: true,
	    },
	    component: () => import('@/views/testPages/page2.vue')
  	},
	
	{
		path: '/',
	    redirect: '/home',
	    meta: {//里面的参数用来做各种显示效果的判断（关键字段）
	    	menuHide: true,
	    },
	    component: Main,
	    children: [
		    {
		    	path: 'home',
	            title: '首页',
	            meta: {
	            	menuHide: true,
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
			title: '一级菜单1',
			icon: 'ios-paper',
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
					icon: 'ios-paper',
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
				]
			},
		]
	},
	
	{
	    path: '*',
	    name: 'error_404',
	    meta: {
	      menuHide: true,
	    },
	    component: () => import('@/views/testPages/page3.vue')
	}
	
]