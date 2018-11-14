<template>
	
	<div class="header-menu-box">
		
		<div class="left-box">
			<p style="font-size: 14px;">广西湖北商会</p>
			<p style="margin-top: 4px;font-size: 18px;">商会管理系统</p>
		</div>
		
		<div class="menu-btn-box">
			<div
			v-for="item in menuList"
			@click="clickBtn(item)"
			:class="{active: item.name === activeName}"
			class="navBtn">
				{{item.meta.title || item.children[0].meta.title}}
			</div>
		</div>
	    
		<div class="right-box">
			退出登录
		</div>
		
	</div>
		
</template>

<script>

export default {
	name: 'headerMenu',
	components:{//组件模板
	},
	props:{//组件道具（参数）
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
		
	},
    data () {//数据
        return {
        	
        	activeName: '',
        	
        }
    },
    methods: {//方法
    	
    	clickBtn(current){
    		
    		this.activeName = current.name;
    		
    		this.$store.state.app.menuChildrenList = [];
    		
    		if(current.children && current.children.length <= 1){
    			this.$router.push({
    				name: current.children[0].name
    			});
    		}else{
    			
    			this.menuList.forEach(item => {
					if(item.name == current.name){
						this.$store.state.app.menuChildrenList = item.children;
					}
				});
    			
    		}
    		
    		this.$emit('on-header-click-btn');
    		
    	},
    	
    },
    computed: {//计算属性
        
    },
    watch: {//监测数据变化
    	
    	'$route'(newRoute){
    		
    		let openNamesArr = newRoute.path.slice(1).split('/');
    		
    		this.$store.state.app.menuChildrenList = [];
    	
	    	this.activeName = openNamesArr[0] === 'home' ? '_home' : openNamesArr[0];
	    	
	    	this.menuList.forEach(item => {
				if(item.name == openNamesArr[0]){
					if(item.children && item.children.length > 1){
						this.$store.state.app.menuChildrenList = item.children;
					}
				}
			});
    		
    	},
    	
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
    	let openNamesArr = this.$route.path.slice(1).split('/');
    	
    	this.$store.state.app.menuChildrenList = [];
    	
    	this.activeName = openNamesArr[0] === 'home' ? '_home' : openNamesArr[0];
    	
    	this.menuList.forEach(item => {
			if(item.name == openNamesArr[0]){
				if(item.children && item.children.length > 1){
					this.$store.state.app.menuChildrenList = item.children;
				}
			}
		});
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	
	},
	
}
</script>

<style scoped lang="less">
	.header-menu-box{
		height: 60px;
		display: flex;
		align-items: center;
		.left-box{
			text-align: center;
			min-width: 200px;
			color: #fff;
			flex-shrink: 0;
			/*margin-right: 10px;*/
			p{
				color: #fff;
			}
		}
		.right-box{
			margin-right: 10px;
			color: #fff;
			flex-shrink: 0;
			/*margin-left: 10px;*/
		}
		.menu-btn-box{
			width: 100%;
			display: flex;
			.navBtn{
				background-color: #3C4656;
				padding: 6px 12px;
				color: #fff;
				margin-right: 10px;
				cursor: pointer;
			}
			.active{
				background-color: #169BD5;
			}
		}
	}
</style>