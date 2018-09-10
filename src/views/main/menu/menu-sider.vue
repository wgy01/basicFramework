<style scoped lang="less">
	.my-tooltip{
		width: 100% !important;
		padding: 10px 0;
		text-align: center;
		cursor: pointer;
	}
</style>

<template>

	<div>
		
		<!--展开-->
		<Menu
		ref="menuInstance"
		v-show="!isCollapsed"
		theme="dark"
		width="auto"
		:active-name="$route.meta.highlightName || $route.name"
		:open-names="openNamesArr"
		:accordion="true"
		@on-select="menuSelect"
		>
			<template v-for="item in menuList">
				
				<template v-if="item.children && item.children.length === 1">
					
					<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
					
					<MenuItem v-else :name="item.children[0].name">
		                <Icon :type="item.meta.icon || item.children[0].meta.icon" />
		                <span>{{item.meta.title || item.children[0].meta.title}}</span>
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
		
		<!--收起-->
		<div v-show="isCollapsed">
			
			<template v-for="item in menuList">
			
				<menu-sider-min v-if="showChildren(item)" :mainItem="item" :hideTitle="true"></menu-sider-min>
				
			    <Tooltip v-else class="my-tooltip" placement="right">
				    <Icon size="20" color="#fff" :type="item.meta.icon || item.children[0].meta.icon" />
				    <div slot="content">{{item.meta.title || item.children[0].meta.title}}</div>
			    </Tooltip>
			    
		   </template>
		    
		</div>
		
	</div>

</template>

<script>

import menuSiderItem from './menu-sider-item.vue';

import menuSiderMin from './menu-sider-min.vue';

import { mapMutations } from 'vuex'

import mixin from './mixin';//重用的代码块

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
		
		isCollapsed: Boolean,
		
	},
	
	data() { //数据
		return {
			
//			menuList: [],//菜单列表
			
			openNamesArr: [],//展开的菜单name数组
			
		}
	},
	
	methods: { //方法
		
		...mapMutations([//映射多个mutations方法
	      'setBreadCrumb',
	    ]),
		
		init(){//初始化
			
			this.setBreadCrumb(this.$route.matched)
			console.log(this.$store.state.mainFrame.breadCrumbList);
			
			this.$store.commit('setOpenNames',this.$route);
			this.openNamesArr = this.$store.state.mainFrame.openNamesArr;
			console.log(this.openNamesArr);
			console.log(this.$route);
			
			this.$nextTick(() => {
				this.$refs.menuInstance.updateOpened();//手动更新展开的子目录
				this.$refs.menuInstance.updateActiveName();//手动更新当前选择项
			});
			
		},
		
		menuSelect(name){//选择菜单（MenuItem）时触发
			
			this.$router.push({
                name: name
            });
			
		},
		
	},
	computed: { //计算属性
		
		menuList(){
			return this.$store.getters.menuList;
		}
		
	},
	watch: { //监测数据变化
		
		'$route'(){
			
			this.$store.commit('setOpenNames',this.$route);
			this.openNamesArr = this.$store.state.mainFrame.openNamesArr;
			console.log(this.openNamesArr);
			console.log(this.$route);
			
			this.$nextTick(() => {
				this.$refs.menuInstance.updateOpened();//手动更新展开的子目录
				this.$refs.menuInstance.updateActiveName();//手动更新当前选择项
			});
			
		}
		
	},

	//===================组件钩子===========================

	created() { //实例被创建完毕之后执行
		
		this.init();//初始化
		
	},
	mounted() { //模板被渲染完毕之后执行
		console.log(this.menuList);
	},
	
}
</script>