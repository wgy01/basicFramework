<template>
	<div>
		页面2
		
		<Button @click="abc">12321</Button>
		
	</div>
</template>

<script>
export default {
	methods: {
		abc(){
			this.$router.push({
				name: 'b3'
			});
		}
	}
}
</script>

<style>
</style>