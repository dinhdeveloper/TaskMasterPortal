// let URL_API
// if (process.env.NODE_ENV === 'production' && process.env.BUILD_ENV === 'PRODUCTION') {
// 	// TODO: Can not find GLOBAL_CONFIG, SO WILL HIDE IT
// 	// eslint-disable-next-line no-undef
// 	// URL_API = GLOBAL_CONFIG.SERVER_URL_API
//
// 	URL_API = process.env.SERVER_URL_API
//
// 	console.log('env', process.env.NODE_ENV)
// 	console.log('LInk Api Production from env.js', URL_API)
// } else {
// 	URL_API = process.env.SERVER_URL_API
// }

import { API_BASE_URL } from '../../config/index.js';

export const SERVER_URL_API = API_BASE_URL


export const GET_ALL_JOB = SERVER_URL_API + 'portal/job/list'
export const UPLOAD_TASK_FILE = SERVER_URL_API + 'portal/job/uploadJobs'
export const GET_JOBS_EXPORT = SERVER_URL_API + 'portal/job/jobsExport'
export const PUSH_NOTI_JOB = SERVER_URL_API + 'notification/pushNoti'
export const GET_TABLE_EXPORT = SERVER_URL_API + 'portal/tables/export'
export const UPLOAD_TABLE = SERVER_URL_API + 'portal/tables/upload'
// report
export const GET_REPORT_LIST = SERVER_URL_API + 'portal/report/list'
export const GET_REPORT_EXPORT = SERVER_URL_API + 'portal/report/export'

