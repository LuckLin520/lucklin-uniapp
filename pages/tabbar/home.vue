<template>
	<view>
		<zc-u-toast></zc-u-toast>
		<view>{{token}}</view>
		<u-button type="primary" @click="goPage()">分包页面</u-button>
		<u-divider/>
		<u-button color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="onLogin()">登录</u-button>
		<u-button color="linear-gradient(to right, yellow, green)" @click="onLogout()">注销</u-button>
		<u-divider/>
		<text>文件上传+条件编译示例</text>
		<u-upload
			:fileList="fileList"
			name="1"
			multiple
			:maxCount="6"
			@afterRead="onFileAfterRead"
			@delete="onFileDelete"
		></u-upload>
		<u-button type="primary" @tap="onUpload">上传</u-button>
		<u-divider/>
		<u--image src="/static/home/logo.svg"></u--image>
		<text>此图片svg仅25k,所以尽量使用svg</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList: []
			}
		},
		onLoad() {

		},
		computed: {
			token() {
				return this.$store.state.user.token
			}
		},
		methods: {
			goPage() {
				uni.navigateTo({
					url: '/sub_pages1/test/test'
				})
			},
			onLogin() {
				this.$store.dispatch('user/login', {
					userAccount: '15348298177',
					userPwd: 'a123123',
					userType: 0
				})
			},
			onLogout() {
				this.$store.dispatch('user/logout')
			},
			onFileAfterRead(file,lists,name) {
				this.fileList = file.file
			},
			onFileDelete(file) {
				this.fileList.splice(file.index,1)
			},
			onUpload() {
				this.$store.dispatch('common/upload', this.fileList )
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
