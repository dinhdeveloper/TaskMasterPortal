import {
	API_LOAN_APPLICATION_LIST,
	API_UPDATE_LOAN_APPLICATION_STATUS,
	API_LOAN_APPLICATION_HISTORY_LIST,
	API_LOAN_APPLICATION_DETAILS,
	API_UPDATE_DOCUMENT_SENT_CORE,
	API_GET_LOAN_PRODUCT_TYPES,
	API_UPDATE_LOAN_APP,
	API_CHECK_CIF_EXISTING,
	API_RE_POLICY,
	API_NEW_CIF,
	API_LINK_CIF,
	API_LOAN_APPLICATION_BRE_RULES,
	GET_ALL_JOB,
	UPLOAD_TASK_FILE,
	GET_JOBS_EXPORT,
	PUSH_NOTI_JOB
} from './config'
import request from '@/utils/request'

export class uploadTask {
	static getAllJob(params) {
		return request({
			url: GET_ALL_JOB,
			method: 'GET',
			params
		})
	}

	static uploadTaskFile(data) {
		const formData = new FormData()
		formData.append('file', data.file)
		return request({
			url: UPLOAD_TASK_FILE,
			headers: { 'Content-Type': 'multipart/form-data' },
			responseType: 'arraybuffer',
			method: 'POST',
			data: formData
		})
	}

	static getJobsExport(params) {
		return request({
			url: GET_JOBS_EXPORT,
			headers: { 'Content-Type': 'multipart/form-data' },
			responseType: 'arraybuffer',
			method: 'GET',
			params
		})
	}

	static pushNoti(params) {
		return request({
			url: PUSH_NOTI_JOB,
			method: 'POST',
			params
		})
	}

}
