<style scoped lang="less">
	.menu-icon {
		transition: all .3s;
	}
	.rotate-icon {
		transform: rotate(-90deg);
	}
</style>

<template>

	<div style="height: 64px;display: flex;align-items: center;overflow: hidden;">
			
		<Icon @click.native="collapsedSider" :class="rotateIcon" style="margin: 0 20px;cursor: pointer;flex-shrink: 0;" type="md-menu" size="28"></Icon>
		
		<div style="white-space:nowrap;overflow: hidden;margin-right: 16px;">
	
			<Breadcrumb>
		        <BreadcrumbItem to="/">
		        	<Icon type="ios-home-outline"></Icon> Home
		        	<span>Home</span>
		        </BreadcrumbItem>
		        <BreadcrumbItem>Components</BreadcrumbItem>
		        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
		    </Breadcrumb>
	
		</div>
		
		<div style="margin: 0 46px 0 auto;flex-shrink: 0;">
			<Dropdown placement="bottom-end">
		        <a style="display: inline-block;">
	           		<Avatar icon="ios-person" />
	           		<Icon size="20" type="md-arrow-dropdown" />
		        </a>
		        <DropdownMenu slot="list">
		            <DropdownItem>设置</DropdownItem>
		            <DropdownItem>退出登录</DropdownItem>
		        </DropdownMenu>
		    </Dropdown>
        </div>
		
	</div>

</template>

<script>

export default {
	components: { //组件模板
		
	},
	props: {
		
		isCollapsed: {
			type: Boolean,
			default: false
		},
		
	},
	data() { //数据
		return {
			
		}
	},
	methods: { //方法
		
		collapsedSider() {

			this.$emit('clickIcon');

		},
		
	},
	computed: { //计算属性
		
		rotateIcon() {
			
			return [
				'menu-icon',
				this.isCollapsed ? 'rotate-icon' : ''
			];
			
		},
		
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