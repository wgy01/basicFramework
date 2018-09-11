<style scoped lang="less">
	.main-title {
		display: block;
		width: 100%;
		text-align: center;
		padding: 10px 0;
		color: #fff;
	}
	.child-title {
		display: block;
		color: #515a6e;
		display: flex;
		align-items: center;
		padding: 7px 8px !important;
	}
</style>
<style>
	.my-dropdown{
		display: block !important;
	}
</style>

<template>
	
	<Dropdown @on-click="dropdownClick" :class="hideTitle ? 'my-dropdown' : ''" placement="right-start">
				
        <a :class="hideTitle ? 'main-title' : 'ivu-dropdown-item child-title'">
        	
       		<Icon :size="hideTitle ? 20 : 14" :type="hideTitle ? mainItem.icon : childIcon" :style="{marginRight: !hideTitle ? '2px' : ''}" />
       		
       		<span v-if="!hideTitle">{{childTitle}}</span>
       		
	   		<Icon v-if="!hideTitle" style="margin-left: auto;" type="ios-arrow-forward" />
	   		
        </a>
        
        <DropdownMenu slot="list">
        	
        	<template v-for="item in mainItem.children">
        		
        		<menu-sider-min v-if="showChildren(item)" :childTitle="item.meta.title" :childIcon="item.icon" :mainItem="item"></menu-sider-min>
        		
        		<DropdownItem v-else :name="item.name" style="display: flex;align-items: center;padding: 7px 8px;">
       				<Icon :type="item.icon" style="margin-right: 2px;" size="14" />
       				<span>{{item.meta.title}}</span>
        		</DropdownItem>
        		
        	</template>
            
        </DropdownMenu>
        
    </Dropdown>
	
</template>

<script>

import mixin from './mixin'

export default {
	
	name: 'menuSiderMin',
	
	mixins: [ mixin ],
	
	components:{//组件模板
	},
	props:{
		
		mainItem: {
			type: Object,
			default: () => {}
		},
		
		hideTitle: {
			type: Boolean,
			default: false
		},
		
		childTitle: {
			type: String,
		},
		
		childIcon: {
			type: String,
		}
		
	},
    data () {//数据
        return {
        	
        }
    },
    methods: {//方法
    	
    	dropdownClick(name){
    		this.$emit('on-click',name)
    	},
    	
    },
    computed: {//计算属性
        	
    },
    watch: {//监测数据变化
    	
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	
	},
	
}
</script>