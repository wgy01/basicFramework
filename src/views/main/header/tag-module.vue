<style scoped lang="less">
	.tag-box{
		display: flex;
		align-items: center;
		background: #ebebeb;
		height: 38px;
		line-height: 38px;
		.btnPublicStyle(){
			flex-shrink: 0;
			height: 37px;
			width: 26px;
			background: #fff;
			display: flex;
			align-items: center;
		}
		.tag-left-btn{
			.btnPublicStyle();
		}
		.tag-right-btn{
			.btnPublicStyle();
		}
		.tag-manage{
			flex-shrink: 0;
			height: 37px;
			width: 34px;
			background: #fff;
			margin-left: 1px;
			display: flex;
			align-items: center;
		}
		.tag-content-box{
			width: 100%;
			overflow: hidden;
			.tag-content-tagBtn-box{
				white-space:nowrap;
				display: inline-block;
				padding-left: 4px;
				transition: transform .3s;
			}
		}
		.tag-manage-dropdown{
			display: flex;
			.tag-manage-dropdown-btn{
				display: flex;
			}
		}
	}
</style>

<style lang="less">
	.tag-manage-dropdown{
		.ivu-select-dropdown{
			margin-top: 8px !important;
		}
	}
</style>

<template>

	<div class="tag-box">
		
		<div class="tag-left-btn">
			<Button @click="leftBtn" type="text" style="padding: 0;width: 100%;height: 28px;float: left;">
				<Icon size="20" type="ios-arrow-back" />
			</Button>
		</div>
		
		<div ref="tagContentBox" class="tag-content-box">
			
			<div ref="tagContentTagBtnBox" class="tag-content-tagBtn-box" :style="{transform: 'translateX('+offsetNum+'px)'}">
				
				<template v-for="item in tagList">
					<Tag
					ref="tagInstance"
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
		
		<div class="tag-right-btn">
			<Button @click="rightBtn" type="text" style="padding: 0;width: 100%;height: 28px;float: right;">
				<Icon size="20" type="ios-arrow-forward" />
			</Button>
		</div>
		
		<div class="tag-manage">
			<Dropdown @on-click="handleClose" placement="bottom-end" class="tag-manage-dropdown">
		        <div class="tag-manage-dropdown-btn">
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
			
			offsetNum: 0,//偏移量
			
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
			
			this.setTagOffset();//设置标签偏移量
			
	    },
	    
	    tagClick(current){//点击当前标签
	    	
	    	this.$router.push({
	    		name: current.name
	    	});
	    	
	    },
	    
	    handleClose(name){//标签管理按钮
	    	
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
	    	
	    	this.setTagOffset();//设置标签偏移量
	    	
	    },
	    
	    setTagOffset(){//设置标签偏移量
	    	
	    	setTimeout(() => {
				
				let mainBoxWidth = this.$refs.tagContentBox.offsetWidth;//主盒子的宽度
				
				let currentTagLeft = 0;//从左侧到当前标签末端的总长度
				
				this.$refs.tagInstance.forEach(item => {
					if(item.name == this.$route.name){
						currentTagLeft = (item.$el.offsetLeft + item.$el.offsetWidth) + 4;
					}
				});
				
				if(currentTagLeft > mainBoxWidth){
					
					this.offsetNum = -(currentTagLeft - mainBoxWidth);
					
				}else{
					
					this.offsetNum = 0;
					
				}
				
			},10);
	    	
		},
		
		leftBtn(){//向左滑动
			
			this.offsetNum += 200;
			
			if(this.offsetNum >= 0){
				this.offsetNum = 0;
			}
			
		},
		
		rightBtn(){//向右滑动
			
			setTimeout(() => {
				
				let tagContentBox = this.$refs.tagContentBox.offsetWidth;
				
				let tagContentTagBtnBox = this.$refs.tagContentTagBtnBox.offsetWidth;
				
				if(tagContentTagBtnBox > tagContentBox){
					
					let maxOffset = -(tagContentTagBtnBox - tagContentBox);
					
					this.offsetNum -= 200;
			
					if(this.offsetNum <= maxOffset){
						this.offsetNum = maxOffset;
					}
					
				}
				
			},10);
			
		},
	    
	},
	computed: { //计算属性
		
	},
	watch: { //监测数据变化
		
		'$route'(to){
			
			this.setTagOffset();//设置标签偏移量
			
		},
		
	},

	//===================组件钩子===========================

	created() { //实例被创建完毕之后执行
		
		this.setTagOffset();//设置标签偏移量
		
	},
	mounted() { //模板被渲染完毕之后执行
		
	},

}
</script>