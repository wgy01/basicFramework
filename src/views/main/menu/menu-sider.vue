<style scoped lang="less">
	.my-dropdown a{
		display: inline-block;
		width: 64px;
		text-align: center;
		padding: 10px 20px;
		color: #fff;
	}
</style>
<style>
	.my-dropdown .ivu-select-dropdown{
		margin-left: 4px;
	}
	.my-tooltip{
		width: 100% !important;
		padding: 10px;
		text-align: center;
		cursor: pointer;
	}
	.my-tooltip .ivu-tooltip-popper{
		margin-left: 8px;
	}
</style>

<template>

	<div>

		<Menu
		ref="menuInstance"
		v-show="!isCollapsed"
		active-name="1"
		theme="dark"
		width="auto"
		:accordion="true"
		@on-select="menuSelect"
		>
			<!--一级菜单-->
			<MenuItem name="3">
                <Icon class="my-icon" type="ios-paper" />
                <span>一级菜单</span>
            </MenuItem>
		
			<!--二级菜单-->
				
			<Submenu name="1">
				
                <template slot="title">
                    <Icon class="my-icon" type="ios-paper" />
                  	<span>二级菜单</span>
                </template>
                
                <MenuItem name="1-1">1-1</MenuItem>
                
                <!--三级菜单-->
                <Submenu name="2">
                	
	                <template slot="title">
	                	<span>三级菜单</span>
	                </template>
	                
	                <MenuItem name="2-1">2-1</MenuItem>
	                
	                <MenuItem name="2-2">2-2</MenuItem>
	                
	            </Submenu>
	            
            </Submenu>
            
		</Menu>
		
		<div v-show="isCollapsed" style="width: 64px;margin: auto;">
			<Dropdown class="my-dropdown" placement="right-start">
		        <a>
		       		<Icon size="20" type="ios-paper" />
		        </a>
		        <DropdownMenu slot="list">
		            <DropdownItem>驴打滚</DropdownItem>
		            <DropdownItem>炸酱面</DropdownItem>
		        </DropdownMenu>
		    </Dropdown>
		    
		    <Tooltip theme="light" class="my-tooltip" content="23132" placement="right">
			    <Icon size="20" color="#fff" type="ios-flash-outline" />
		    </Tooltip>
		</div>
		
	</div>

</template>

<script>

import routers from '@/router/router.js'

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
		
		isCollapsed: Boolean,
		
	},
	data() { //数据
		return {
			
			menuList: routers,
			
		}
	},
	methods: { //方法
		
		menuSelect(name){
			
			if(name == 3){
				this.$refs.menuInstance.$children.forEach(item => {
					if(item.opened){
						item.opened = false;
					}
				})
			}
			
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
		
		
		this.$store.commit('menuFiltration');
		
//		console.log(appRouter);
//		
//		let traverseTree = (node) => {
//			
//		    if (!node) return
//			
//			//console.log(node.name);
//			
//			if (node.children && node.children.length > 0) {
//				
//				console.log(node.children.length);
//				
//				node.children.forEach((item,index) => {
//					
//					traverseTree(item);
//					
//				})
//				
//		    }
//						
//		}
//		
//		appRouter.forEach((item,index) => {
//			
//			traverseTree(item);
//			
//		})
		
		
		
		
		
	},

}
</script>