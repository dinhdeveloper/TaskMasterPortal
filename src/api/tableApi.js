import {
    GET_TABLE_EXPORT,
    UPLOAD_TABLE
} from './config'
import request from '@/utils/request'

export class tableApi {
    static uploadTable(data) {
        const formData = new FormData()
        formData.append('file', data.file)
        formData.append('table', data.table)
        return request({
            url: UPLOAD_TABLE,
            method: 'POST',
            data: formData
        })
    }

    static getTableExport(params) {
        return request({
            url: GET_TABLE_EXPORT,
            headers: { 'Content-Type': 'multipart/form-data' },
            responseType: 'arraybuffer',
            method: 'GET',
            params
        })
    }
}
