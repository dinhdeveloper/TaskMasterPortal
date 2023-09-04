import * as config from './config'
import request from '@/utils/request'

export class uploadApi {
	static upload(file) {
		const formData = new FormData()
		formData.append('file', file)

		return request({
			url: config.API_UPLOAD_FILE,
			headers: { 'Content-Type': 'multipart/form-data' },
			method: 'POST',
			data: formData
		})
	}
}

