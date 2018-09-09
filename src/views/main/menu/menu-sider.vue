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
		theme="dark"
		width="auto"
		:accordion="true"
		@on-select="menuSelect"
		>
			<template v-for="item in menuList">
				
				<template v-if="item.children && item.children.length === 1">
					
					<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
					
					<MenuItem v-else :name="item.name">
		                <Icon :type="item.meta.icon" />
		                <span>{{item.meta.title}}</span>
		            </MenuItem>
					
				</template>
				
				<template v-else>
					
					<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
					
					<MenuItem v-else :name="item.name">
		                <Icon :type="item.meta.icon" />
		                <span>{{item.meta.title}}</span>
		            </MenuItem>
					
				</template>
	            
            </template>
            
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

import menuSiderItem from './menu-sider-item.vue';

import mixin from './mixin';//重用的代码块

export default {
	
	name: 'menuSider',
	
	mixins: [ mixin ],
	
	components: { //组件模板
		menuSiderItem
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
			
			menuList: [],//菜单列表
			
		}
	},
	
	methods: { //方法
		
		init(){//初始化
			
			this.$store.commit('menuFiltration');
			this.menuList = this.$store.state.mainFrame.menuList;
			
		},
		
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
		
		this.init();//初始化
		
	},
	mounted() { //模板被渲染完毕之后执行
		
	},

}
</script>