<style scoped lang="less">
	.menu-icon {
		transition: all .3s;
	}
	.rotate-icon {
		transform: rotate(-90deg);
	}
</style>

<template>

	<div style="height: 53px;display: flex;align-items: center;overflow: hidden;">
			
		<Icon @click.native="collapsedSider" :class="rotateIcon" style="margin: 0 20px;cursor: pointer;flex-shrink: 0;" type="md-menu" size="28"></Icon>
		
		<div style="white-space:nowrap;overflow: hidden;margin-right: 16px;">
	
			<Breadcrumb>
				<template v-for="item in breadCrumbList">
			        <BreadcrumbItem :replace="true" :to="item.to ? '/' : ''">
			        	<Icon :type="item.icon || item.meta.icon"></Icon>
			        	<span>{{item.meta.title}}</span>
			        </BreadcrumbItem>
		        </template>
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
	name: 'breadcrumbModule',
	components: { //组件模板
		
	},
	props: {
		
		breadCrumbList: {
			type: Array,
			default: () => []
		}
		
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
			return [ 'menu-icon', this.isCollapsed ? 'rotate-icon' : '' ];
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