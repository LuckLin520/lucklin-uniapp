<template>
	<view class="zcPagination">
		<zc-u-toast></zc-u-toast>
		<slot v-if="!loading && !list.length" name="emptyState"/>
		<slot/>
		<div class="loadState">
			<div v-if="loading" class="loading">
				<u-loading-icon text="加载中" color="#ccc" textColor="#ccc" size="13" textSize="13"></u-loading-icon>
			</div>
			<div v-else-if="nomore" class="nomore">
				<view class="spacer"></view>
				<u--image width="18px" height="17px" :src="nomoreIcon"></u--image>
				<text style="color: #ccc;font-size: 13px;">到底啦！</text>
				<view class="spacer"></view>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		props: {
			option: {
				type: Object,
				default: () => ({})
			},
			list: Array,
			getRemoteList: Function
		},
		data() {
			return {
				nomoreIcon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy4
				wNzEiIGhlaWdodD0iMzQuNDQ5IiB2aWV3Qm94PSIwIDAgMzcuMDcxIDM0LjQ0OSI+CgkJCQkJPGRlZnM+PHN0eWxlPi5he2ZpbGw6I2NjY
				zt9PC9zdHlsZT48L2RlZnM+CgkJCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5MSAtMTc4LjQyOSkiPgoJCQkJCQk8cGF0aCBjbGF
				zcz0iYSIgZD0iTS0zNTE5LjkyOSw0NjVsLS45NzEuMTZhNy40NTEsNy40NTEsMCwwLDAtNi4xLDUuOTExaDBhNy40NTEsNy40NTEsMCwwL
				DAtNi4xLTUuOTExbC0uOTcxLS4xNi44LS4xMzFhNy40NTQsNy40NTQsMCwwLDAsNi4xNDItNi4xNDJsLjEzMS0uOC4xMzEuOGE3LjQ1NCw
				3LjQ1NCwwLDAsMCw2LjE0Miw2LjE0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4NDggLTI3OS41KSIvPgoJCQkJCQk8cGF0aCBjbGFzc
				z0iYSIgZD0iTS0zNTA0LjA3MSw0NzIuOTI5bC0yLjA2LjMzOWExNS44MDYsMTUuODA2LDAsMCwwLTEyLjk0LDEyLjUzOWgwYTE1LjgwNiw
				xNS44MDYsMCwwLDAtMTIuOTQtMTIuNTM5bC0yLjA2LS4zMzksMS42OTMtLjI3OGExNS44MTMsMTUuODEzLDAsMCwwLDEzLjAyOS0xMy4wM
				jlsLjI3OC0xLjY5My4yNzgsMS42OTNhMTUuODEzLDE1LjgxMywwLDAsMCwxMy4wMjksMTMuMDI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGU
				oMzgyNS4wNzEgLTI3Mi45MjkpIi8+CgkJCQkJPC9nPgoJCQkJPC9zdmc+`.replace(/[\r\n]/g, ''),
				pageSize: this.option.pageSize,
				pageNo: this.option.pageNo,
				loading: false,
				nomore: false
			}
		},
		methods: {
			async refresh() {
				if(!this.list.length) return
				const pageSize = this.list.length
				const pageNo = 1
				this.loading = true
				const res = await this.getRemoteList.call(this.$parent, { pageSize, pageNo })
				this.loading = false
				if(res.status) {
					const list = res.data
					this.$emit('update:list', list)
					if(res.total === list.length) this.nomore = true
					else this.nomore = false
				}else{
					this.$store.commit('uToast', { type: 'error', message: res.msg })
				}
			},
			async load() {
				const { pageSize, pageNo } = this
				this.loading = true
				const res = await this.getRemoteList.call(this.$parent, { pageSize, pageNo })
				this.loading = false
				if(res.status) {
					this.pageNo++
					const list = this.list.concat(res.data)
					this.$emit('update:list', list)
					if(res.total === list.length) this.nomore = true
					else this.nomore = false
				}else{
					this.$store.commit('uToast', { type: 'error', message: res.msg })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.zcPagination{
	.loadState{
		padding: 8px;
		.nomore{
			display: flex;
			justify-content: center;
			position: relative;
			.spacer{
				width: 60px;
				height: 2px;
				transform: translateY(8px);
				margin: 0 10px;
				background: linear-gradient(282deg, #CCCCCC 0%, transparent 100%);
				&:last-of-type{
					background: linear-gradient(282deg, transparent 0%, #CCCCCC 100%);
				}
			}
			text{
				margin-left: 10rpx;
			}
		}
	}
}

</style>