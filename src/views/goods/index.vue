<template>
	
	<div>
		
		<Button type="primary" @click="modal = true">新增商品</Button>
		
		<Table border :columns="goodsColumns" :data="goodsList"></Table>
		
		<Modal
	        v-model="modal"
	        title="新增商品">
	        
	        <Form ref="formInstance" :label-width="80">
	        	
	        	<FormItem label="商品名称">
		            <Input></Input>
		        </FormItem>
		        
		        <FormItem label="商品代码">
		            <Input></Input>
		        </FormItem>
		        
		        <FormItem label="商品单价">
		            <Input></Input>
		        </FormItem>
		        
	        	<FormItem label="商品库存">
		            <Input></Input>
		        </FormItem>
		        
	        	<FormItem label="商品图片">
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
        	
        	formData: {},
        	
        	formRules: [],
        	
        	goodsColumns: [
        		{
        			width: 80,
                	title: '图片',
                	render: (h, params) => {
                		return h('img', {
                			style: {
                				width: '100%'
                			},
                			attrs: {
                				src: 'https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png'
                			}
                		})
                	}
                },
        		{
                	title: '商品名称',
                	key: 'name'
                },
                {
                	title: '商品代码',
                	key: 'code'
                },
                {
                	title: '单价(元)',
                	key: 'price'
                },
        		{
                	title: '库存',
                	key: 'num'
                },
                {
                	align: 'center',
                	title: '操作',
                	render: (h, params) => {
                		return h('div', [
                			h('Button', {
                				props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                	marginRight: '10px'
                                },
                			}, '编辑'),
                			h('Button', {
                				props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                	marginRight: '10px'
                                },
                			}, '管理'),
                			h('Button', {
                				props: {
                                    type: 'error',
                                    size: 'small'
                                },
                			}, '删除'),
                		])
                	}
                },
        	],
        	
        	goodsList: [
        		{
        			name: '老坛酸菜牛肉面',
        			num: 1000,
        			price: 5,
        			code: '45616548789654',
        		}
        	],
        	
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