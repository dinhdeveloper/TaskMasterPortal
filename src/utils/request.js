import axios from 'axios'
import { ElMessage  } from 'element-plus'
import store from '@/store'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import { API_BASE_URL } from '../../config/index.js';
import router from "@/router";
// import { MessageBox, Notification } from 'element-ui'

// create an axios instance
const service = axios.create({
	baseURL: API_BASE_URL, // api 的 base_url
	// baseURL: 'http://localhost:8080/api/', // api 的 base_url
	timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		config.headers['Accept-Language'] = store.getters.language
		// Do something before request is sent
		NProgress.start()
		NProgress.configure({ showSpinner: true })
		if (store.getters.token) {
			// config.headers['Content-Type'] = 'application/json;charset=utf-8'
			if (!config.headers['Content-Type']) {
				config.headers['Content-Type'] = 'application/json'
			}
			config.headers['Authorization'] = 'Bearer ' + getToken()
		}
		// if (process.env.NODE_ENV !== 'production' && process.env.BUILD_ENV !== 'PRODUCTION') {
		// 	// TODO: Can not find GLOBAL_CONFIG, SO WILL HIDE IT
		// 	config.headers['APP-TOKEN'] = '43c836ac707341202c370336cc967f8b'
		// 	config.headers['TIME-RQ'] = '123'
		// 	config.headers['DEVICE-ID'] = '1b30959ffbdf0ee1'
		// }
		config.headers['APP-TOKEN'] = '43c836ac707341202c370336cc967f8b'
		config.headers['TIME-RQ'] = '123'
		config.headers['DEVICE-ID'] = '1b30959ffbdf0ee1'
		console.log('config: ', config)
		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)
// service.interceptors.response.use((response) => {
// 	// 440  expired login
// 	if (response.status === 440) {
// 		MessageBox.confirm('Message', 'Warning', {
// 			confirmButtonText: 'OK',
// 			cancelButtonText: 'Cancel',
// 			type: 'warning'
// 		}).then(() => {
// 			// FedLogOut cancel token and reload page
// 			store.dispatch('FedLogOut').then(() => {
// 				location.reload()
// 			})
// 		})
// 	} else {
// 		return response
// 	}
// }, (error) => {
// 	console.log(error)
// 	Notification({
// 		message: error.message,
// 		type: 'error',
// 		duration: 8000
// 	})
// })

// response interceptor
service.interceptors.response.use(
	response => {
		NProgress.done(true)
		if (response.data.result_code === -1) {
			if (response.data.data && response.data.data.errors && response.data.data.errors.subErrors) {
				const errors = response.data.data.errors.subErrors
				errors.forEach(e => {
					ElMessage({
						message: e.field + ' ' + e.message,
						type: 'error',
						duration: 5 * 1000
					})
				})
			} else if (!response.data.data && !response.data.error && !response.data.subErrors) {
				ElMessage({
					message: response.data.result_description,
					type: 'error',
					duration: 5 * 1000
				})
			} else if (response.data.data === null && response.data.subErrors === null && response.data.error !== null) {
				ElMessage({
					message: response.data.result_description,
					type: 'error',
					duration: 5 * 1000
				})
				if (response.data.error && response.data.error.apierror.subErrors) {
					const errors = response.data.error.apierror.subErrors
					errors.forEach(e => {
						ElMessage({
							message: e.field + ' ' + e.message,
							type: 'error',
							duration: 5 * 1000
						})
					})
				}
			} else if (response.data.error && response.data.error.apierror.subErrors) {
				const errors = response.data.error.apierror.subErrors
				errors.forEach(e => {
					ElMessage({
						message: e.message,
						type: 'error',
						duration: 5 * 1000
					})
				})
			} else {
				ElMessage({
					message: 'Errors',
					type: 'error',
					duration: 5 * 1000
				})
			}
		}
		if (response.data.result_code === -99) {
			if (response.data.data && response.data.data.errors.subErrors) {
				const errors = response.data.data.errors.subErrors
				errors.forEach(e => {
					ElMessage({
						message: e.field + ' ' + e.message,
						type: 'error',
						duration: 5 * 1000
					})
				})
			} else {
				if (response.data.data && response.data.data.errors) {
					const errors = response.data.data.errors.message
					ElMessage({
						message: errors,
						type: 'error',
						duration: 5 * 1000
					})
				} else {
					ElMessage({
						message: response.data.result_description,
						type: 'error',
						duration: 5 * 1000
					})
				}
			}
		}
		return response
	},
	/**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
	// response => {
	//   const res = response.data
	//   if (res.code !== 20000) {
	//     Message({
	//       message: res.message,
	//       type: 'error',
	//       duration: 5 * 1000
	//     })
	//     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
	//     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
	//       // 请自行在引入 MessageBox
	//       // import { Message, MessageBox } from 'element-ui'
	//       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
	//         confirmButtonText: '重新登录',
	//         cancelButtonText: '取消',
	//         type: 'warning'
	//       }).then(() => {
	//         store.dispatch('FedLogOut').then(() => {
	//           location.reload() // 为了重新实例化vue-router对象 避免bug
	//         })
	//       })
	//     }
	//     return Promise.reject('error')
	//   } else {
	//     return response.data
	//   }
	// },
	error => {
		console.log('err' + error) // for debug
		setTimeout(function() {
			NProgress.done(true)
		}, 2000)

		// Message({
		// 	message: 'Error , Please check again ',
		// 	type: 'error',
		// 	duration: 5 * 1000
		// })
		if (error.response.status === 401) {
			setTimeout(function() {
				// window.location.href = config.default.PREFIX_DOMAIN + '/'
				// window.location.href = '/login'
				console.log('authen 401')
				router.push('/login')
			}, 1000)
		}
		console.log(error.response)
		if (error.response.data.result_code === -99) {
			if (error.response.data.data.errors.subErrors) {
				const errors = error.response.data.data.errors.subErrors
				errors.forEach(e => {
					ElMessage({
						message: e.field + ' ' + e.message,
						type: 'error',
						duration: 5 * 1000
					})
				})
			} else {
				const errors = error.data.data.errors.message
				ElMessage({
					message: errors,
					type: 'error',
					duration: 5 * 1000
				})
			}
		}
		const response = error.response
		if (response.data.result_code === -1) {
			if (response.data.data && response.data.data.errors && response.data.data.errors.subErrors) {
				const errors = response.data.data.errors.subErrors
				errors.forEach(e => {
					ElMessage({
						message: e.field + ' ' + e.message,
						type: 'error',
						duration: 5 * 1000
					})
				})
			} else if (!response.data.data && !response.data.error && !response.data.subErrors) {
				ElMessage({
					message: response.data.result_description,
					type: 'error',
					duration: 5 * 1000
				})
			} else if (response.data.data === null && response.data.subErrors === null && response.data.error !== null) {
				ElMessage({
					message: response.data.result_description,
					type: 'error',
					duration: 5 * 1000
				})
				if (response.data.error && response.data.error.apierror.subErrors) {
					const errors = response.data.error.apierror.subErrors
					errors.forEach(e => {
						ElMessage({
							message: e.field + ' ' + e.message,
							type: 'error',
							duration: 5 * 1000
						})
					})
				}
			} else {
				ElMessage({
					message: 'Errors',
					type: 'error',
					duration: 5 * 1000
				})
			}
		}

		return Promise.reject(error)
	}
)

export default service
