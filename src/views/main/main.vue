<style scoped lang="less">
	.layout {
		background: #f5f7f9;
		position: relative;
		overflow: hidden;
		height: 100vh;
	}
	
	.layout-header-bar {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
	.content-box{
		width: 100%;
		height: 100%;
		padding: 30px 16px 300px;
		overflow: auto;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

<template>

	<div class="layout">

		<Layout>
			
			<Sider ref="siderInstance" hide-trigger collapsible :collapsed-width="64" v-model="isCollapsed" style="height: 100vh;">
				
				<menu-sider :isCollapsed="isCollapsed"></menu-sider>

			</Sider>

			<Layout style="overflow: hidden;">

				<Header :style="{padding: 0,height: 'auto'}" class="layout-header-bar">

					<layout-header style="height: 100%;" :isCollapsed="isCollapsed" @clickIcon="collapsedSider"></layout-header>

				</Header>

				<Content style="position: relative;">
					
					<div class="content-box">
						
						<router-view/>
						
					</div>

				</Content>

			</Layout>
			
		</Layout>

	</div>

</template>

<script>
	
import menuSider from './menu/menu-sider.vue'

import layoutHeader from './header/layout-header.vue'

export default {
	components: { //组件模板
		menuSider,
		layoutHeader,
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
			
		}
	},
	methods: { //方法
		
		collapsedSider() {
			
			this.$refs.siderInstance.toggleCollapse();
			
		},
		
	},
	computed: { //计算属性

	},
	watch: { //监测数据变化

	},

	//===================组件钩子===========================

	created() { //实例被创建完毕之后执行

	},
	mounted() { //模板被渲染完毕之后执行

	},

}
</script>