import {
    GET_JOBS,
} from '../mutation-types'
import * as types from '../mutation-types'
import { uploadTask } from '../../api/uploadTask'
import { responseHelper } from '@/utils/helper'
import { ElMessage} from "element-plus"

const state = {
    uploadFileSuccess: false,
    uploadFileError: false,
    linkImage: { linkUrl: null, keyRandomUpload: null },
    jobs: null,
    total: 0,
}

const actions = {
    fetchJobs({ commit }, params) {
        return responseHelper(
            uploadTask.getAllJob(params),
            resSuccess => {
                commit(GET_JOBS, {
                    jobs: resSuccess.data.data,
                    total: resSuccess.data.total
                })
                return resSuccess
            },
            resError => resError
        )
    },
    uploadTaskFile({ commit }, payload) {
        return responseHelper(
            uploadTask.uploadTaskFile(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    },
    getJobsExport({ commit }, payload) {
        return responseHelper(
            uploadTask.getJobsExport(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    },
    pushNoti({ commit }, payload) {
        return responseHelper(
            uploadTask.pushNoti(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    },

}

const mutations = {
    [types.GET_JOBS]: (state, payload) => {
        state.jobs = payload.jobs
        state.total = payload.total
    },
    [types.LINK_UPLOAD_FILE_SUCCESS]: (state, payload) => {
        state.linkImage = { linkUrl: payload.link, keyRandomUpload: payload.key }
    }
}

const getters = {
    linkImageGetter: state => state.linkImage,
    keyRandomUploadGetter: state => state.keyRandomUpload,
    jobsGetter: state => state.jobs,
    totalGetter: state => state.total
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
