import {
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
		formData.append('userName', data.userName)
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
