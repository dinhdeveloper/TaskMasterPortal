import request from '@/utils/request'
import * as config from './config'
import { DeviceUUID } from 'device-uuid'
import { setDeviceId } from '@/utils/auth'
import { responseHelper } from '@/utils/helper'
const du = new DeviceUUID().parse()
const dua = [
	du.language,
	du.platform,
	du.os,
	du.cpuCores,
	du.isAuthoritative,
	du.silkAccelerated,
	du.isKindleFire,
	du.isDesktop,
	du.isMobile,
	du.isTablet,
	du.isWindows,
	du.isLinux,
	du.isLinux64,
	du.isMac,
	du.isiPad,
	du.isiPhone,
	du.isiPod,
	du.isSmartTV,
	du.pixelDepth,
	du.isTouchScreen
]
const uuid = du.hashMD5(dua.join(':'))

export function loginByUsername(username, password) {
	const data = {
		username,
		password,
		deviceId: uuid,
		deviceName: du.source
	}
	setDeviceId(uuid)
	return request({
		url: config.SERVER_URL_API + 'auth/login',
		method: 'post',
		data
	})
}

export function logout() {
	return request({
		url: '/login/logout',
		method: 'post'
	})
}

export function getUserInfo(username) {
	return request({
		url: config.SERVER_URL_API + 'users/' + username,
		method: 'get',
		params: { deviceId: uuid }
	})
}

export function changePassword(data) {
	return request({
		url: config.SERVER_URL_API + 'users/changepassword',
		method: 'POST',
		data
	})
}
