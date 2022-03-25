<template>
	<u-toast ref="uToast"></u-toast>
</template>

<script>
	export default {
		name:"zc-u-toast",
		watch: {
			'$store.state.uToast'(params) {
				this.$refs.uToast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
