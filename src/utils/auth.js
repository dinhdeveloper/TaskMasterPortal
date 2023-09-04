import Cookies from 'js-cookie'

const TokenKey = 'token'
const UserName = 'USER_NAME'
const Admin_roles = 'Admin_roles'
const Token_Video = 'Token_Video'
const Firebase_Device_Token = 'Firebase_Device_Token'
const Device_Id = 'Device_Id'
export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}

export function getUserName() {
	return Cookies.get(UserName)
}

export function setUserName(username) {
	return Cookies.set(UserName, username)
}
export function setRoles(listRoles) {
	return localStorage.setItem(Admin_roles, listRoles)
}
export function getRoles() {
	return localStorage.getItem(Admin_roles)
}
export function getTokenVideo(token) {
	return localStorage.getItem(Token_Video)
}
export function setTokenVideo(token) {
	return localStorage.setItem(Token_Video, token)
}
export function removeTokenVideo() {
	return localStorage.removeItem(Token_Video)
}
export function getFirebaseToken() {
	return localStorage.getItem(Firebase_Device_Token)
}
export function setFirebaseToken(token) {
	return localStorage.setItem(Firebase_Device_Token, token)
}
export function removeFirebaseToken() {
	return localStorage.removeItem(Firebase_Device_Token)
}
export function getDeviceId() {
	return localStorage.getItem(Device_Id)
}
export function setDeviceId(deviceId) {
	return localStorage.setItem(Device_Id, deviceId)
}
export function removeDeviceId() {
	return localStorage.removeItem(Device_Id)
}
