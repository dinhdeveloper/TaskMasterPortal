import {

} from '../mutation-types'
import * as types from '../mutation-types'
import { tableApi } from '../../api/tableApi'
import { responseHelper } from '@/utils/helper'
import { ElMessage} from "element-plus"

const state = {

}

const actions = {
    uploadTable({ commit }, payload) {
        return responseHelper(
            tableApi.uploadTable(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    },
    getTableExport({ commit }, payload) {
        return responseHelper(
            tableApi.getTableExport(payload),
            resSuccess => {
                return resSuccess
            },
            resError => resError
        )
    }
}

const mutations = {

}

const getters = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
