<template>
	<view>
		<zc-pagination ref="zcPagination" :option="{pageSize, pageNo}" :list.sync="list" :getRemoteList="getRemoteList">
			<zc-jobs v-for="(item, index) of list" :key="index" :item="item" :index="index"/>
			<zc-empty slot="emptyState"/>
		</zc-pagination>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageSize: 14,
				pageNo: 1,
				list: []
			}
		},
		onShow() {
			// 刷新数据
			this.$refs['zcPagination'] && this.$refs['zcPagination'].refresh()
		},
		onReady() {
			this.$refs['zcPagination'].load()
		},
		onReachBottom() {
			this.$refs['zcPagination'].load()
		},
		methods: {
			getRemoteList({ pageSize, pageNo }) {
				const params = {
					title: '精装修',
					pageNo,
					pageSize
				}
				return this.$store.dispatch('user/findJob', params)
			}
		}
	}
</script>