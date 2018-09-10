<style scoped lang="less">
	
</style>

<template>

	<div>
		
		<breadcrumb-module @clickIcon="collapsedSider" :isCollapsed="isCollapsed"></breadcrumb-module>
		
		<tag-module></tag-module>

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
		
			isCollapsed: {
				type: Boolean,
				default: false
			},
			
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