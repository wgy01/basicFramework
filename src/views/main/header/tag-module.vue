<style scoped lang="less">
</style>
<style>
	.dropdownTop .ivu-select-dropdown{
		margin-top: 8px !important;
	}
</style>

<template>

	<div style="display: flex;align-items: center;background: #EBEBEB;height: 38px;line-height: 38px;">
		
		<div style="flex-shrink: 0;height: 37px;width: 26px;background: #fff;display: flex;align-items: center;">
			<Button type="text" style="padding: 0;width: 100%;height: 28px;float: left;">
				<Icon size="20" type="ios-arrow-back" />
			</Button>
		</div>
		
		<div style="width: 100%;overflow: hidden;">
			
			<div style="white-space:nowrap;display: inline-block;padding-left: 4px;">
				
				<template v-for="item in tagList">
					<Tag
					type="dot"
					:name="item.name"
					:closable="item.name === 'home' ? false : true"
					:fade="false"
					@on-close="tagClose(item)"
					@click.native="tagClick(item)"
					:color="$route.name === item.name ? 'primary' : 'default'">
						{{item.meta.title}}
					</Tag>
				</template>
				
			</div>
			
		</div>
		
		<div style="flex-shrink: 0;height: 37px;width: 26px;background: #fff;display: flex;align-items: center;">
			<Button type="text" style="padding: 0;width: 100%;height: 28px;float: right;">
				<Icon size="20" type="ios-arrow-forward" />
			</Button>
		</div>
		
		<div style="flex-shrink: 0;height: 37px;width: 34px;background: #fff;margin-left: 1px;display: flex;align-items: center;">
			<Dropdown @on-click="handleClose" placement="bottom-end" style="display: flex;" class="dropdownTop">
		        <div style="display: flex;">
	           		<Button type="text" style="padding: 0;width: 33px;height: 28px;">
						<Icon size="20" type="ios-close-circle-outline" />
					</Button>
		        </div>
		        <DropdownMenu slot="list">
		            <DropdownItem name="other">关闭其他</DropdownItem>
		            <DropdownItem name="all">关闭全部</DropdownItem>
		        </DropdownMenu>
		    </Dropdown>
		</div>
		
	</div>

</template>

<script>

import { objEqual } from '@/toolBox';

export default {
	name: 'tagModule',
	components: { //组件模板
		
	},
	props: { //组件道具（参数）
		
		tagList: {
			type: Array,
			default: () => []
		},
		
	},
	data() { //数据
		return {
			
		}
	},
	methods: { //方法
		
		tagClose(current){//关闭当前标签
			
			let currentTag = current;
			
			let tagList = this.$store.state.app.tagNavList;
			
			tagList.forEach((item,index,rawArr) => {
				
				if(item.name === currentTag.name){
					
					rawArr.splice(index,1);
					
					if(item.name === this.$route.name){
						
						if(rawArr[index]){
							
							this.$router.push({
					    		name: rawArr[index].name
					    	});
							
						}else{
							
							this.$router.push({
					    		name: rawArr[index-1].name
					    	});
							
						}
						
					}
					
				}
				
			});
			
			this.$store.commit('setTagNavList',tagList);
			
	    },
	    
	    tagClick(current){//点击当前标签
	    	
	    	this.$router.push({
	    		name: current.name
	    	});
	    	
	    },
	    
	    handleClose(name){
	    	
	    	let newTag = () => {
	    		
	    		let tagList = this.$store.state.app.tagNavList;
	    		
	    		let homeRoute = this.$store.state.app.homeRoute;
	    		
	    		let res = [];
	    	
	    		if(name === 'other'){
	    		
	    			res = tagList.filter(item => {
	    				if((item.name === homeRoute.name) || (item.name === this.$route.name) ) return item
	    			});
	    		
	    			return res;
	    		
	    		}else if(name === 'all'){
	    		
	    			res = tagList.filter(item => {
	    				if(item.name === homeRoute.name) return item
	    			});
	    			
	    			this.$router.push({
			    		name: homeRoute.name
			    	});
	    			
	    			return res;
	    		
	    		}
	    		
	    	}
	    	
	    	this.$store.commit('setTagNavList',newTag());
	    	
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