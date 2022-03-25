import Vue from 'vue'
import App from './App'

import store from '@/store'
import uView from '@/uni_modules/uview-ui'

Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
import('@/common/http.js').then(http=> http.default(app))
app.$mount()

