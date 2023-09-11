import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import auth from './modules/auth'
import getters from './getters'
import app from './modules/app'
import uploadTaskModule from "@/store/modules/uploadTaskModule"
import tableModule from "@/store/modules/tableModule"
import reportModule from "@/store/modules/reportModule"

// Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		app,
		permission,
		auth,
		uploadTaskModule,
		tableModule,
		reportModule
	},
	getters
})

export default store
