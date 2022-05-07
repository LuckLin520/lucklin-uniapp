<template>
	<view class="list-item">
		<view>{{ index }}-{{item.positionName}}</view>
		<view>{{ item.companyName }}</view>
	</view>
</template>

<script>
	export default {
		props: ['item', 'index']
	}
</script>

<style lang='scss' scoped>
.list-item{
	margin: 10rpx 0;
	padding: 20rpx 0;
	background-color: red;
}
</style>