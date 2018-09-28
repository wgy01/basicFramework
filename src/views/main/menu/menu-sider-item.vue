<template>
	
	<Submenu :name="mainItem.name" class="nowrap">
		                	
        <template slot="title">
        	<Icon :type="mainItem.icon" />
        	<span>{{mainItem.meta.title}}</span>
        </template>
        
        <template v-for="item in mainItem.children">
        	
        	<template v-if="item.children && item.children.length === 1">
        		
        		<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
        		
	        	<MenuItem v-else :name="item.children[0].name">
	                <Icon :type="item.icon || item.children[0].icon" />
	                <span>{{item.meta.title || item.children[0].meta.title}}</span>
	            </MenuItem>
        		
        	</template>
        	
        	<template v-else>
        		
        		<menu-sider-item v-if="showChildren(item)" :mainItem="item"></menu-sider-item>
        		
	        	<MenuItem v-else :name="item.name">
	                <Icon :type="item.icon" />
	                <span>{{item.meta.title}}</span>
	            </MenuItem>
		        
        	</template>
        	
        </template>
        
    </Submenu>
    
</template>

<script>

import mixin from './mixin';//重用的代码块

export default {
	
	name: 'menuSiderItem',//组件递归必须有这个name属性(相当于import)
	
	mixins: [ mixin ],
	
	props: {
		
		mainItem: {
			type: Object,
			default: () => {}
		},
		
	},
	methods: { //方法
		
	}
	
}
</script>

<style>
</style>