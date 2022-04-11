<template>
	<view class="userPage">
		<scroll-list ref="list" :option="{page: pageNo, size: pageSize}" :list.sync="list">
			<view class="list-item" v-for="(item, index) of list" :key="index" @click="$refs.list.refresh()">
				<view>{{ index }}-{{item.positionName}}</view>
				<view>{{ item.companyName }}</view>
			</view>
		</scroll-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pageSize: 10,
			pageNo: 1,
			list: []
		}
	},
	methods: {
		/*
		* return Promise({data: Array, status: Boolean})
		*/
		getRemoteList(paging) {
			const params = {
				title: '精装修',
				pageNo: paging.page,
				pageSize: paging.size
			}
			return this.$store.dispatch('user/findJob', params)
		}
	}
}

</script>
<style lang="scss" scoped>
	.userPage{
		.list-item{
			margin: 10rpx 0;
			padding: 20rpx 0;
			background-color: red;
		}
	}
</style>