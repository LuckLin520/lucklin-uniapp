export default vm => {
	uni.$u.http.setConfig(()=> ({
		baseURL: 'https://192.168.0.95:18189',
		dataType: 'json',
		timeout: 10000,
		header: {}
	}))

	uni.$u.http.interceptors.request.use((config) => {
		if(vm.$store.state.user.token) config.header.token = vm.$store.state.user.token
		return config
	}, config => {
		return Promise.reject(config)
	})
	
	uni.$u.http.interceptors.response.use((response) => {
		return response
	}, (response) => {
		return Promise.reject(response)
	})
}
