export default {
	namespaced: true,
	state: {
	},
	actions: {
		/**
		 * uni.$u.http.upload是uni.uploadFile实现。https://uniapp.dcloud.io/api/request/network-file.html
		 * 小程序不支持小程序不支持uploadFile的files字段（意思就是不能一次上传多个文件），所以这里做了条件编译
		 */
		async upload(store, payload) {
			let params = {name: 'file', header: {"Content-Type": "multipart/form-data"}}
			let imgs = []
			//#ifdef H5
				params = {files: payload, ...params}
				const {data} = await uni.$u.http.upload('/file/upload/fileUpload', params)
				if(data.status) {
					imgs.push(data.data.url)
					store.commit('uToast', {
						type: data.status ? 'success' : 'error',
						message: data.msg,
					}, {root: true})
				}
			//#endif
			//#ifndef H5
				const fileReq = []
				for (let item of payload) {
					params = {filePath: item.url, ...params}
					fileReq.push(uni.$u.http.upload('/file/upload/fileUpload', params))
				}
				const res = await Promise.all(fileReq)
				for (let {data} of res) {
					if(data.status) {
						imgs.push(data.data.url)
						store.commit('uToast', {
							type: data.status ? 'success' : 'error',
							message: data.msg,
						}, {root: true})
					}
				}
			//#endif
			return imgs
		}
	},
	mutations: {
		save(state, payload) {
			for (let key in payload) {
				state[key] = payload[key]
			}
		}
	}
}
