
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
			title: '标题名称',
			icon: '图标名称',
			access: [8,1,9],
		},
	    component: Main,
		children: [
			{
				path: 'a1',
				name: 'a1',
				meta: {
					title: '页面1',
					icon: '图标名称'
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
			title: '二级目录',
			icon: '图标名称',
			access: [5,6,2],
		},
	    component: Main,
		children: [
			{
				path: 'b1',
				name: 'b1',
				meta: {
					title: '页面1',
					icon: '图标名称'
				},
				component: () => import('@/views/testPages/page1.vue')
			},
			{
				path: 'b2',
				name: 'b2',
				meta: {
					title: '页面2',
					icon: '图标名称'
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
			title: '标题名称',
			icon: '图标名称',
			access: [4,3],
		},
	    component: Main,
		children: [
			{
				path: 'c1',
				name: 'c1',
				meta: {
					title: '标题名称',
					icon: '图标名称'
				},
				component: secondaryView,
				children: [
					{
						path: 'c1-1',
						name: 'c1-1',
						meta: {
							title: '页面3',
							icon: '图标名称'
						},
						component: () => import('@/views/testPages/page3.vue')
					}
				]
			}
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