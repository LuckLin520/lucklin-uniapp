import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const modulesFiles = require.context('./', true, /\.js$/)
const modules = {}
for (const modulePath of modulesFiles.keys())
	if (!modulePath.includes('index.js')) modules[modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')] = modulesFiles(
		modulePath).default

export default new Vuex.Store({
	state: {
		// https://www.uviewui.com/components/toast.html
		uToast: null
	},
	modules,
	mutations: {
		uToast(state, payload) {
			state.uToast = payload
		}
	}
})
