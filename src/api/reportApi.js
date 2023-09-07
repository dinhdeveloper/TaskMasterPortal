import {
    GET_REPORT_LIST,
    GET_REPORT_EXPORT
} from './config'
import request from '@/utils/request'

export class reportApi {
    static getReportList(params) {
        return request({
            url: GET_REPORT_LIST,
            method: 'GET',
            params
        })
    }

    static getReportExport(params) {
        return request({
            url: GET_REPORT_EXPORT,
            headers: { 'Content-Type': 'multipart/form-data' },
            responseType: 'arraybuffer',
            method: 'GET',
            params
        })
    }

}
