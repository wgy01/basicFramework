<template>
	
	<div>
		
		<Button type="primary" @click="modal = true">新增物品</Button>
		
		<Table border :columns="materialColumns" :data="materialList"></Table>
		
		<Modal
	        v-model="modal"
	        title="新增物品">
	        
	        <Form ref="formInstance" :label-width="80">
	        	
	        	<FormItem label="选择分类">
	        		
	        		<div style="display: flex;">
	        			
			            <Select>
					        <Option value="1">灯具</Option>
					        <Option value="2">草料</Option>
					        <Option value="3">洁具</Option>
					    </Select>
					    
					    <Button type="primary" @click="">新建分类</Button>
	        			
	        		</div>
				    
		        </FormItem>
		        
		        <FormItem label="物品名称">
		            <Input placeholder="物品名称不能有重复"></Input>
		        </FormItem>
		        
	        	<FormItem label="物品总数">
		            <Input></Input>
		        </FormItem>
		        
	        	<FormItem label="物品图片">
		            <Input></Input>
		        </FormItem>
		        
	        </Form>
	        
	    </Modal>
		
	</div>
	
</template>

<script>

export default {
	name: '',
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
	},
    data () {//数据
        return {
        	
        	modal: false,
        	
        	materialColumns: [
        		{
                	title: '物品名称',
                	key: 'name'
                },
        		{
                	title: '单价',
                	key: ''
                },
        		{
                	title: '库存',
                	key: ''
                },
        	],
        	
        	materialList: [],
        	
        }
    },
    methods: {//方法
    	
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
	
	//=================组件路由勾子==============================
	
	beforeRouteEnter (to, from, next) {//在组件创建之前调用（放置页面加载时请求的Ajax）
		
		(async() => {//执行异步函数
			
			//async、await错误处理
			try {
				
				/*
				 * 
				 * ------串行执行---------
				 * console.log(await getAjaxData());
				 * ...
				 * 
				 * ---------并行：将多个promise直接发起请求（先执行async所在函数），然后再进行await操作。（执行效率高、快）----------
				 * let abc = getAjaxData();//先执行promise函数
				 * ...
				 * console.log(await abc);
				 * ...
				*/
				next(vm => {
					
				});
				
			} catch(err) {
				console.log(err);
			}
			
		})();
		
	},
	
}
</script>

<style scoped lang="less">

</style>