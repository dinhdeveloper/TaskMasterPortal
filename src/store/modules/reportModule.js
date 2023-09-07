import {
    GET_REPORT_LIST,
} from '../mutation-types'
import * as types from '../mutation-types'
import { reportApi } from '../../api/reportApi'
import { responseHelper } from '@/utils/helper'
import { ElMessage} from "element-plus"

const state = {
    reportList: null
}

const actions = {
    fetchReportList({ commit }, params) {
        return responseHelper(
            reportApi.getReportList(params),
            resSuccess => {
                console.log('acbd: ', resSuccess)
                commit(GET_REPORT_LIST, {
                    reportList: resSuccess.data,
                })
                console.log('ajn,f: ', )
                return resSuccess
            },
            resError => resError
        )
    },
    getReportExport({ commit }, payload) {
        return responseHelper(
            reportApi.getReportExport(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    }
}

const mutations = {
    [types.GET_REPORT_LIST]: (state, payload) => {
        state.reportList = payload.reportList
    },
}

const getters = {
    reportListGetter: state => state.reportList,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
