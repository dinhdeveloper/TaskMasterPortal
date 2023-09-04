import * as types from '../mutation-types'
import { uploadApi } from '../../api/uploadApi'

const state = {
	uploadFileSuccess: false,
	uploadFileError: false,
	linkImage: { linkUrl: null, keyRandomUpload: null }
}

const actions = {
	async uploadFile({ commit }, payload) {
		commit(types.UPLOAD_FILE_SUCCESS, false)
		const data = await uploadApi.upload(payload.data)
		if (data.data.result_code === 0) {
			const linkImage = data.data.data.linkImage
			commit(types.UPLOAD_FILE_SUCCESS, true)
			commit(types.LINK_UPLOAD_FILE_SUCCESS, { link: linkImage, key: payload.keyRandomUpload })
		}
	}
}

const mutations = {
	[types.UPLOAD_FILE_SUCCESS]: (state, payload) => {
		state.uploadFileSuccess = payload
	},
	[types.LINK_UPLOAD_FILE_SUCCESS]: (state, payload) => {
		state.linkImage = { linkUrl: payload.link, keyRandomUpload: payload.key }
	}
}

const getters = {
	linkImageGetter: state => state.linkImage,
	keyRandomUploadGetter: state => state.keyRandomUpload
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
