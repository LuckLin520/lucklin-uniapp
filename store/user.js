export default {
	namespaced: true,
	state: {
		token: uni.getStorageSync('token') || ''
	},
	actions: {
		async login(store, payload) {
			const {data} = await uni.$u.http.post('/account/login', payload)
			if(data.status) {
				const token = data.data.header_token
				store.commit('save', {token})
				uni.setStorageSync('token', token)
			}
		},
		async logout(store, payload) {
			store.commit('save', {token: ''})
			uni.setStorageSync('token', '')
		},
		async findJob(store, payload) {
			const {data} = await uni.$u.http.post('/job/findJob', payload)
			return data
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
