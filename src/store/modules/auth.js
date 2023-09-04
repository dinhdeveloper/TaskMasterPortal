import { loginByUsername, logout, getUserInfo, changePassword } from '../../api/login'
import { getToken, setToken, removeToken, setUserName, setTokenVideo, removeFirebaseToken, removeTokenVideo, removeDeviceId } from '@/utils/auth'

const state = {
	user: '',
	status: '',
	code: '',
	token: getToken(),
	name: '',
	avatar: '',
	introduction: '',
	roles: [],
	setting: {
		articlePlatform: []
	},
	changePasswordStatus: false,
	userProfile: null
}

const mutations = {
	SET_CODE: (state, code) => {
		state.code = code
	},
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_INTRODUCTION: (state, introduction) => {
		state.introduction = introduction
	},
	SET_SETTING: (state, setting) => {
		state.setting = setting
	},
	SET_STATUS: (state, status) => {
		state.status = status
	},
	SET_NAME: (state, name) => {
		state.name = name
	},
	SET_USER_LOGIN: (state, data) => {
		state.userProfile = data
	},
	SET_AVATAR: (state, avatar) => {
		state.avatar = avatar
	},
	SET_ROLES: (state, roles) => {
		state.roles = roles
	},
	CHANG_PASSWORD_STATUS: (state, status) => {
		state.changePasswordStatus = status
	}
}

const actions = {

	async LoginByUsername({ commit }, userInfo) {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			await loginByUsername(userInfo.username, userInfo.password).then(response => {
				console.log('response:', response.data.data)
				// commit('SET_ROLES', [response.data.data.role])
				commit('SET_TOKEN', response.data.data.tokenAuth)
				setToken(response.data.data.tokenAuth)
				setUserName(userInfo.username)
				// setTokenVideo(response.data.data.stringeeToken)
				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},
	GetUserInfo({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			getUserInfo(payload).then(response => {
				if (!response.data) {
					reject('error')
				}
				const data = response.data
				console.log(data.data.role)
				data['roles'] = [data.data.role]
				if (data.roles && data.roles.length > 0) {
					commit('SET_ROLES', data.roles)
				} else {
					reject('getInfo: roles must be a non-null array !')
				}
				commit('SET_NAME', data.data.userProfile.username)
				commit('SET_USER_LOGIN', data.data.userProfile)
				commit('SET_AVATAR', '/static/images/user.png')
				commit('SET_INTRODUCTION', 'Description')
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
	LogOut({ commit, state }) {
		return new Promise((resolve, reject) => {
			logout(state.token).then(() => {
				// commit('SET_TOKEN', '')
				// commit('SET_ROLES', [])
				removeToken()
				removeFirebaseToken()
				removeTokenVideo()
				removeDeviceId()
				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},
	FedLogOut({ commit }) {
		return new Promise(resolve => {
			commit('SET_TOKEN', '')
			removeToken()
			removeFirebaseToken()
			removeTokenVideo()
			removeDeviceId()
			resolve()
		})
	},
	ChangeRoles({ commit, dispatch }, role) {
		return new Promise(resolve => {
			commit('SET_TOKEN', role)
			setToken(role)
			getUserInfo(role).then(response => {
				const data = response.data
				commit('SET_ROLES', data.roles)
				commit('SET_NAME', data.name)
				commit('SET_AVATAR', data.avatar)
				commit('SET_INTRODUCTION', data.introduction)
				dispatch('GenerateRoutes', data)
				resolve()
			})
		})
	},
	async changePassProfile({ commit }, payload) {
		const result = await changePassword(payload)
		if (result.data.result_code === 0) {
			commit('CHANG_PASSWORD_STATUS', true)
		}
	}
}

export default {
	namespaced: true,
	state: state,
	// getters,
	actions,
	mutations
}
