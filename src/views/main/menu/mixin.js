export default {
	
	methods: {//方法
		
		showChildren(item) {
			return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
		},
		
	}
	
}