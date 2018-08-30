<style scoped lang="less">
</style>

<template>

	<div style="display: flex;align-items: center;">
		
		<div style="flex-shrink: 0;height: 37px;width: 26px;background: #fff;display: flex;align-items: center;">
			<Button type="text" style="padding: 0;width: 100%;height: 28px;float: left;">
				<Icon size="20" type="ios-arrow-back" />
			</Button>
		</div>
		
		<div style="width: 100%;overflow: hidden;">
			
			<div style="white-space:nowrap;display: inline-block;padding-left: 4px;">
				
				<Tag type="dot" closable color="primary">标签一</Tag>
		
				<Tag type="dot" closable color="primary">标签一</Tag>
				
				<Tag type="dot" closable color="primary">标签一</Tag>
				
				<Tag type="dot" closable color="primary">标签一</Tag>
				
				<Tag type="dot" closable color="primary">标签一</Tag>
				
			</div>
			
			
		</div>
		
		<div style="flex-shrink: 0;height: 37px;width: 26px;background: #fff;display: flex;align-items: center;">
			<Button type="text" style="padding: 0;width: 100%;height: 28px;float: right;">
				<Icon size="20" type="ios-arrow-forward" />
			</Button>
		</div>
		
		<div style="flex-shrink: 0;height: 37px;width: 34px;background: #fff;margin-left: 1px;display: flex;align-items: center;">
			<Dropdown placement="bottom-end" style="display: flex;">
		        <div style="display: flex;">
	           		<Button type="text" style="padding: 0;width: 33px;height: 28px;">
						<Icon size="20" type="ios-close-circle-outline" />
					</Button>
		        </div>
		        <DropdownMenu slot="list">
		            <DropdownItem>关闭其他</DropdownItem>
		            <DropdownItem>关闭全部</DropdownItem>
		        </DropdownMenu>
		    </Dropdown>
		</div>
		
	</div>

</template>

<script>

export default {
	components: { //组件模板
		
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
			
			
			
		}
	},
	methods: { //方法

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