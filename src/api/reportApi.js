import {
    GET_REPORT_LIST
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

    // static getJobsExport(params) {
    //     return request({
    //         url: GET_JOBS_EXPORT,
    //         headers: { 'Content-Type': 'multipart/form-data' },
    //         responseType: 'arraybuffer',
    //         method: 'GET',
    //         params
    //     })
    // }

}
