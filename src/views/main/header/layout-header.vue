<style scoped lang="less">
	.menu-icon {
		transition: all .3s;
	}
	
	.rotate-icon {
		transform: rotate(-90deg);
	}
</style>

<template>

	<div>
		
		<div style="height: 64px;line-height: 64px;display: flex;align-items: center;overflow: hidden;">
			
			<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="28"></Icon>
			
			<breadcrumb-module style="overflow: hidden;margin-right: 16px;"></breadcrumb-module>
			
			<div style="margin: 0 46px 0 auto;">
				<Dropdown placement="bottom-end">
			        <a>
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
		
		<div style="background: #EBEBEB;height: 38px;line-height: 38px;">
			
			<tag-module></tag-module>
			
		</div>
		

	</div>

</template>

<script>
	
import breadcrumbModule from './breadcrumb/breadcrumb-module.vue';

import tagModule from './tag/tag-module.vue';

export default {
	components: { //组件模板
		breadcrumbModule,
		tagModule,
	},
	props: { //组件道具（参数）
		
			/* ****属性用法*****
			 * 
			 * 传递类型 type: Array | Number | String | Object
			 * 为必传 required: true
			 * 默认值 default: ''
			 * 
			 */
			
			isCollapsed: Boolean,
			
		},
	data() {//数据
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