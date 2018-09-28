<style scoped lang="less">
	.my-tooltip{
		width: 100% !important;
		padding: 10px 0;
		text-align: center;
		cursor: pointer;
		.tooltip-a{
			display: block;
			color: #fff;
			padding: 8px 10px;
			&:hover{
				color: #5cadff;
			}
		}
	}
</style>
<style lang="less">
	.my-tooltip{
		.ivu-tooltip-inner{
			padding: 0 !important;
		}
	}
</style>

<template>

	<div>
		
		<!--展开-->
		<!--v-show="!isCollapsed"-->
		<Menu
		ref="menuInstance"
		v-show="!isCollapsed"
		theme="dark"
		width="auto"
		:active-name="$route.meta.highlightName || $route.name"
		:open-names="currentOpenNames"
		:accordion="true"
		@on-select="menuItemClick"
		>
			<template v-for="item in menuList">
				
				<template v-if="item.children && item.children.length === 1">
					
					<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
					
					<MenuItem v-else class="nowrap" :name="item.children[0].name">
		                <Icon :type="item.icon || item.children[0].icon" />
		                <span>{{item.meta.title || item.children[0].meta.title}}</span>
		            </MenuItem>
					
				</template>
				
				<template v-else>
					
					<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
					
					<MenuItem v-else class="nowrap" :name="item.name">
		                <Icon :type="item.icon" />
		                <span>{{item.meta.title}}</span>
		            </MenuItem>
					
				</template>
	            
            </template>
            
		</Menu>
		
		<!--收起-->
		<div v-show="isCollapsed">
			
			<template v-for="item in menuList">
			
				<menu-sider-min v-if="showChildren(item)"  @on-click="moreMenuMinClick" :mainItem="item" :hideTitle="true"></menu-sider-min>
				
			    <Tooltip v-else class="my-tooltip" placement="right">
				    <Icon size="20" color="#fff" :type="item.icon || item.children[0].icon" />
				    <div slot="content">
				    	<a class="tooltip-a" @click="singleMenuMinClick(item.children[0])">{{item.meta.title || item.children[0].meta.title}}</a>
				    </div>
			    </Tooltip>
			    
		   </template>
		    
		</div>
		
	</div>

</template>

<script>

import menuSiderItem from './menu-sider-item.vue';

import menuSiderMin from './menu-sider-min.vue';

import mixin from './mixin';//组件间重用的代码块

export default {
	
	name: 'menuSider',
	
	mixins: [ mixin ],
	
	components: { //组件模板
		menuSiderItem,
		menuSiderMin,
	},
	
	props: { //组件道具（参数）
		
		/* ****属性用法*****
		 * 
		 * 传递类型 type: Array | Number | String | Object
		 * 为必传 required: true
		 * 默认值 default: ''
		 * 
		 */
		
		menuList: {
		 	type: Array,
		 	default: () => []
		},
		
		isCollapsed:{
		 	type: Boolean,
		 	default: false
		},
		
	},
	
	data() { //数据
		return {
			
		}
	},
	
	methods: { //方法
		
		menuItemClick(menuName){//选择菜单（MenuItem）时触发
			this.$router.push( { name: menuName } );
		},
		
		singleMenuMinClick(current){
			this.$router.push( { name: current.name } );
		},
		
		moreMenuMinClick(name){
			this.$router.push( { name: name } );
		},
		
	},
	computed: {//计算属性
		
		currentOpenNames(){//设置当前展开的菜单
			
			let openNamesArr = this.$route.path.slice(1).split('/');
			
			openNamesArr.splice(openNamesArr.length-1,1);
			
			this.$nextTick(() => {
				this.$refs.menuInstance.updateOpened();
				this.$refs.menuInstance.updateActiveName();
			});
			
			return openNamesArr;
			
		},
		
	},
	watch: { //监测数据变化
		
		'$route'(){
			
		}
		
	},

	//===================组件钩子===========================

	created() { //实例被创建完毕之后执行
		
	},
	mounted() { //模板被渲染完毕之后执行
		
	},
	
}
</script>