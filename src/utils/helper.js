import moment from 'moment'
import * as config from '../config'

const {
	DATE_FORMAT
} = config.default

export async function responseHelper(api, successCB, failedCB, finallyCB) {
	try {
		const result = await api
		if (result.data && result.data.result_code === 0) {
			return successCB({
				success: true,
				data: result.data.data
			})
		}
		if (result.data && result.data.result_code !== 0) {
			return failedCB({
				success: false,
				data: result.data,
				message: ''
			})
		}
	} catch (err) {
		let errMessage = ''
		if (err.response) {
			const errorResponse = err.response
			if (errorResponse.data.apierror) {
				errMessage = errorResponse.apierror.message
			} else if (errorResponse.data.error) {
				errMessage = errorResponse.data.message
			}
		}
		return failedCB({
			success: false,
			data: err,
			message: errMessage
		})
	} finally {
		finallyCB && finallyCB()
	}
}

export function formatPrice(value) {
	const val = (value / 1).toFixed(0).replace('.', ',')
	return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function parseToNumber(str, search = '.', replacement = '') {
	const strr = str.split(search).join(replacement)
	return parseInt(strr)
}

export function formatDate(date, type = DATE_FORMAT.DDMMYYYY) {
	return moment(date).format(type)
}

export const replaceHtmlTag = (value) => {
	var regex = /(<([^>]+)>|&nbsp;)/ig
	return value.replace(regex, '')
}

export function disabledPastDates(date) {
	const currentDate = new Date()
	currentDate.setHours(0, 0, 0, 0)
	return date < currentDate
}

export function getGenderText(key, genders) {
	const gender = genders.find(gender => gender.key === key)
	return gender ? gender.text : ''
}
