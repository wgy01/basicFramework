<style scoped lang="less">
	.layout {
		background: #f5f7f9;
		position: relative;
		overflow: hidden;
		height: 100vh;
	}
	.layout-header-bar {
		position: relative;
		padding: 0 !important;
		height: auto !important;
		line-height: initial !important;
		background: #2B3648;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	.main-content-box{
		width: 100%;
		height: 100%;
		padding: 30px 16px 300px;
		box-sizing: border-box;
		overflow: auto;
		position: absolute;
		top: 0;
		left: 0;
	}
	.menu-collapsed-icon {
		text-align: center;
		width: 40px;
		height: 40px;
		line-height: 40px;
		position: absolute;
		right: -19px;
		margin: auto;
		top: 0;
		bottom: 0;
		border-radius: 100px;
		background-color: rgba(0,0,0,.4);
		cursor: pointer;
		z-index: 99;
	}
	.rotate-icon {
		transform: rotate(-180deg);
	}
</style>

<template>

	<div style="height: 100%;">

		<Layout style="height: 100%;">
			
			<!--头部菜单-->
			<Header class="layout-header-bar">
				<header-menu :menuList="menuList" @on-header-click-btn="headerClickBtn"></header-menu>
			</Header>
			<!--头部菜单-->
			
			<!--下侧-->
			<Layout style="overflow: hidden;height: 100%;">
				
				<!--菜单-->
				<Sider v-show="!hideMenuBar" ref="siderInstance" hide-trigger collapsible :collapsed-width="64" v-model="isCollapsed" style="height: 100%;position: relative;">
					<Icon
					color="#fff"
					@click.native="collapsedSider"
					:class="{'rotate-icon': isCollapsed}"
					class="menu-collapsed-icon"
					type="ios-arrow-back"
					size="28">
					</Icon>
					<menu-sider ref='sideMenu' :menuList="$store.state.app.menuChildrenList" :isCollapsed="isCollapsed"></menu-sider>
				</Sider>
				<!--菜单-->
				
				<!--内容-->
				<Content style="position: relative;">
					<div class="main-content-box">
						<router-view/>
					</div>
				</Content>
				<!--内容-->
				
			</Layout>
			<!--下侧-->
			
		</Layout>

	</div>

</template>

<script>
	
import menuSider from './menu/menu-sider.vue'

import headerMenu from './header/header-menu.vue'

import { getNewTagList } from '@/toolBox';

import { mapMutations } from 'vuex';

export default {
	name: 'Main',
	components: { //组件模板
		menuSider,
		headerMenu,
	},
	props: { //组件道具（参数）
		/* ****属性用法*****
		 * 
		 * 传递类型 type: Array | Number | String | Object
		 * 为必传 required: true
		 * 默认值 default: ''
		 * 
		 */
	},
	data() { //数据
		return {
			
			isCollapsed: false,
			
			hideMenuBar: false,
			
		}
	},
	methods: { //方法
		
		...mapMutations([
			'setBreadCrumb',
	      	'setTagNavList',
	      	'addTag',
	      	'getMenuList'
		]),
		
		collapsedSider() {//展开或收起左侧菜单
			this.$refs.siderInstance.toggleCollapse();
		},
		
		headerClickBtn(){
			this.$refs.sideMenu.updateMenu();
		},
		
	},
	computed: { //计算属性
		
		menuList(){//菜单列表
			//return this.$store.getters.menuList;
			return this.$store.state.app.menuList;
		},
		
		breadCrumbList(){//面包屑列表
	    	return this.$store.state.app.breadCrumbList;
	    },
	    
		tagNavList(){//tag列表
	    	return this.$store.state.app.tagNavList;
	    },
		
	},
	watch: { //监测数据变化
		
		'$route'(newRoute){
			
			this.hideMenuBar = newRoute.meta.hideMenuBar || false;
			
			this.setBreadCrumb(newRoute.matched);
			
        	this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
			
		},
		
	},

	//===================组件钩子===========================

	created() { //实例被创建完毕之后执行
		
		this.getMenuList();//获取菜单列表
		
		/**
	     * @description 初始化设置面包屑导航和标签导航
	     */
	    this.setTagNavList();
	    
	    this.addTag({route: this.$store.state.app.homeRoute});
	    
	    this.setBreadCrumb(this.$route.matched);
	    
	    this.hideMenuBar = this.$route.meta.hideMenuBar || false;
		
	},
	mounted() { //模板被渲染完毕之后执行
		
	},

}
</script>