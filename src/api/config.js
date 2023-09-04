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

export const SERVER_URL_API = 'http://localhost:8080/api/'
// export const SERVER_URL_API = 'http://192.168.68.127:8080/api/'

export const API_NOTI = SERVER_URL_API + 'admin/noti_target_criteria/detail'
export const API_NOTI_SAVE = SERVER_URL_API + 'admin/noti_target_criteria/detail'
export const API_LIST_PROVINCE = SERVER_URL_API + 'admin/provinces'
export const API_LIST_NOTI = SERVER_URL_API + 'admin/noti_target_criteria/list'
export const API_CHECK_NUMBER_OF_CUSTOMERS = SERVER_URL_API + 'admin/noti_target_criteria/checkquantity'
export const API_LIST_NOTI_TARGET = SERVER_URL_API + 'admin/noti_target/list'
export const API_NOTI_APPROVE = SERVER_URL_API + 'admin/noti_target_criteria/approve'
export const API_NOTI_ENABLE = SERVER_URL_API + 'admin/noti_target_criteria/enable'
export const API_NOTI_DISABLE = SERVER_URL_API + 'admin/noti_target_criteria/disable'
export const API_NOTI_DELETE = SERVER_URL_API + 'admin/noti_target_criteria/delete'

export const API_USER = SERVER_URL_API + 'admin/user/'
export const API_LIST_USER = SERVER_URL_API + 'admin/users/'
export const API_FORGOT_PASSWORD = SERVER_URL_API + 'auth/forgotpassword'
// role
export const API_LIST_ROLES = SERVER_URL_API + 'admin/roles'
export const API_LIST_ROLES_ACTION = SERVER_URL_API + 'admin/action'

export const API_ROLE_PERMISSION = SERVER_URL_API + 'admin/permission'
export const API_SUBMIT_ROLE_PERMISSION = SERVER_URL_API + 'admin/permission'
// export const API_GET_LIST_ROLE_PERMISSION = SERVER_URL_API + 'admin/getpemissions'

// fa

export const API_FAQ = SERVER_URL_API + 'admin/faq/'
export const API_FAQ_CREATE_QUESTION = API_FAQ + 'answerquestion/'
export const API_FAQ_UPDATE_QUESTION_ANSWER = API_FAQ + 'answerquestion/'
export const API_FAQ_REMOVE_QUESTION_ANSWER = API_FAQ + 'answerquestion/'

export const API_FAQ_CREATE_CATEGORY = SERVER_URL_API + 'admin/faq/category/'
export const API_FAQ_DELETE_CATEGORY = SERVER_URL_API + 'admin/faq/category/'
export const API_FAQ_CATEGORY = SERVER_URL_API + 'admin/faq/category/'
export const API_FAQ_LIST_CATEGORY = SERVER_URL_API + 'admin/faq/categories/'
export const API_FAQ_UPDATE_CATEGORY = SERVER_URL_API + 'admin/faq/category/'

export const API_FAQ_CATEGORY_TOPIC = SERVER_URL_API + 'admin/faq/topic/'
export const API_FAQ_CREATE_CATEGORY_TOPIC = SERVER_URL_API + 'admin/faq/topic/'
export const API_FAQ_DELETE_CATEGORY_TOPIC = SERVER_URL_API + 'admin/faq/topic/'
export const API_FAQ_UPDATE_CATEGORY_TOPIC = SERVER_URL_API + 'admin/faq/topic/'
export const API_FAQ_KEYWORD_COMMON = SERVER_URL_API + 'admin/keywordcommons'

export const API_LIST_CUSTOMER = SERVER_URL_API + 'admin/customers/'
export const API_CUSTOMER = SERVER_URL_API + 'admin/customer/'
export const API_CUSTOMER_LIST_DEVICE = SERVER_URL_API + 'admin/customer/listdevices/'
export const API_DELETE_DEVICE = SERVER_URL_API + 'admin/deletedevice/'
export const API_CUSTOMER_RESET_PIN_CODE = SERVER_URL_API + 'admin/customer/resetpin/'
export const API_CUSTOMER_UN_LOCK_OTP = SERVER_URL_API + 'admin/customer/unblock/'
export const API_CUSTOMER_RESET_PASSWORD = SERVER_URL_API + 'admin/customer/resetpassword/'

export const API_OFFICE = SERVER_URL_API + 'admin/offices/'
export const API_CHECK_OFFICES_EXITED = SERVER_URL_API + 'admin/checklistexist'
export const API_SEND_IMPORT_OFFICES = SERVER_URL_API + 'admin/importoffices'
/* Contact us*/
export const API_COMMUNICATE = SERVER_URL_API + 'admin/communication/'
export const API_CONTACT_CATEGORY = SERVER_URL_API + 'admin/contact/category'
export const API_GET_LIST_CONTACT_CUSTOMER = SERVER_URL_API + 'admin/contact'
export const API_SEARCH_LIST_CONTACT_CUSTOMER = SERVER_URL_API + 'admin/contact/search'
/* Setting*/
export const API_SETTING_OTP = SERVER_URL_API + 'admin/settingotp'
export const API_SETTING_General = SERVER_URL_API + 'admin/settingGenaral'
export const API_SETTING_TOKEN_TIME_OUT = SERVER_URL_API + 'admin/settingtokentimeout'
export const API_GET_TOKEN_TIME_OUT = SERVER_URL_API + 'admin/gettokentimeout'
export const API_DELETE_TOKEN_TIME_OUT = SERVER_URL_API + 'admin/deletetokentimeout'
export const API_PROVINCE = SERVER_URL_API + 'admin/provinces/'
export const API_KIND_OFFICE = SERVER_URL_API + 'admin/kindoffices/'
export const API_TUTORIALS = SERVER_URL_API + 'admin/tutorials'
export const API_APP_VERSION = SERVER_URL_API + 'v2/setting/app-version'
export const API_UPDATE_MESSAGE_SOUND = SERVER_URL_API + 'v2/setting/settingNotificationRingtone'
export const API_GET_MESSAGE_SOUND_STATUS = SERVER_URL_API + 'v2/setting/gettingNotificationRingtone'
export const API_GET_CARD_REMIND = SERVER_URL_API + 'v2/setting/getActivateCardReminder'
export const API_GET_CARD_THE_FIRST_SETTING = SERVER_URL_API + 'v2/setting/getCardTheFirstSettings'
export const API_UPDATE_CARD_REMIND = SERVER_URL_API + 'v2/setting/setActivateCardReminder'
export const API_UPDATE_CARD_THE_FIRST = SERVER_URL_API + 'v2/setting/setCardTheFirstSettings'
export const API_GET_TIME_PAYMENT_OR_SETTLEMENT = SERVER_URL_API + 'admin/getPaymentOrSettlementTimeCard'
export const API_UPDATE_TIME_PAYMENT_OR_SETTLEMENT = SERVER_URL_API + 'admin/updatePaymentOrSettlementTimeCard'
export const API_GET_SETTING_FOR_EKYC = SERVER_URL_API + 'v2/setting/getApplyForEkyc'
export const API_UPDATE_SETTING_FOR_EKYC = SERVER_URL_API + 'v2/setting/setApplyForEkyc'
/* Gerneral*/

/* Notification*/
export const API_SEND_FCM = SERVER_URL_API + 'admin/sendfcm'
export const API_LIST_GROUP_CUSTOMER_NOTIFICATION = SERVER_URL_API + 'admin/groupcustomer'
export const API_CUSTOMER_TO_GROUP_CUSTOMER_NOTIFICATION = SERVER_URL_API + 'admin/groupcustomer/manage/add'
export const API_DELETE_CUSTOMER_FROM_GROUP_CUSTOMER_NOTIFICATION = SERVER_URL_API + 'admin/groupcustomer/manage/delete'
export const API_LIST_CUSTOMER_NOTIFICATION = SERVER_URL_API + 'admin/managenotification'
export const API_ADD_CUSTOMER_NOTIFICATION = SERVER_URL_API + 'admin/managenotification'

/* Notification Flow */
export const API_FETCH_NOTIFICATION_FLOW = SERVER_URL_API + 'admin/notificationTemplate'
export const API_UPDATE_NOTIFICATION_FLOW = SERVER_URL_API + 'admin/updateNotificationTemplate'
export const API_DETAILS_NOTIFICATION_FLOW = SERVER_URL_API + 'admin/getNotificationTemplateById'

/* Setting*/

export const API_SETTING_RESEND = SERVER_URL_API + 'admin/settingresend'
export const API_CONDITIONAL_USE_REQUEST = SERVER_URL_API + 'admin/conditional-use-app'

export const API_BACKGROUND = SERVER_URL_API + 'admin/background'
export const API_BACKGROUND_GPS = SERVER_URL_API + 'admin/backgroundgps'

export const API_REQUEST_MANAGEMENT = SERVER_URL_API + 'admin/requestmanagement'
export const API_EXPORT_REQUEST_MANAGEMENT = SERVER_URL_API + 'admin/download/requestmanagement.xlsx'
export const API_LINK_DOWNLOAD_REQUEST_MANAGEMENT = SERVER_URL_API + 'admin/requestmanagement/download'

/* Payment method*/
export const API_PAYMENT_METHOD = SERVER_URL_API + 'admin/paymentforms'
export const API_GET_PAYMENT_DETAIL = (id) => API_PAYMENT_METHOD + '/getDetailByPaymentType/' + id
export const API_UPDATE_PAYMENT_DETAIL = (id) => API_PAYMENT_METHOD + '/updateByPaymentType/' + id

/* Loan Request */
export const API_LOAN_ADDITIONAL_REQUEST = SERVER_URL_API + 'admin/additional'
export const API_FORCE_CLOSE_REQUEST = SERVER_URL_API + 'admin/forceclose'
export const API_LOAN_ADDITIONAL_REQUEST_EXPORT = SERVER_URL_API + 'admin/additionalloan/download'
export const API_LOAN_TENURES = SERVER_URL_API + 'admin/tenure'
export const API_SAVE_RATE_PER_YEAR = SERVER_URL_API + 'admin/interestrate'
export const API_LOAN_LIMIT_SETTING = SERVER_URL_API + 'admin/limitloan'
export const API_LOAN_INCOME_PERMONTH_SETTING = SERVER_URL_API + 'admin/incomemonth'

/* Loan Request Topup */
export const API_LOAN_REQUEST_TOPUP = SERVER_URL_API + 'admin/topuploan'
export const API_LOAN_TOPUP_DOWNLOAD = SERVER_URL_API + 'admin/topuploan/download'
export const API_LOAN_TOPUP_SETTING = SERVER_URL_API + 'admin/settingtopuploan'
export const API_UPDATE_LOAN_TOPUP_SETTING_DESCRIPTION = SERVER_URL_API + 'admin/settingdescription'
export const API_UPDATE_LOAN_TOPUP_SETTING_LIMIT_LOAN = SERVER_URL_API + 'admin/settinglimittopuploan'
export const API_UPDATE_LOAN_TOPUP_SETTING_INTEREST_RATE = SERVER_URL_API + 'admin/settinginterestrate'
/* Background Login Setting */

export const API_BACKGROUND_LOGIN = SERVER_URL_API + 'admin/backgroundlogin'

/* Loan Guide*/
export const API_LOAN_GUIDE = SERVER_URL_API + 'admin/guideloan'

export const API_LIST_CUSTOMER_TOPUP = SERVER_URL_API + 'admin/customertopup'

/* Upload */
export const API_UPLOAD_FILE = SERVER_URL_API + 'admin/uploadfile'

/* Loan Product */
export const API_LOAN_PRODUCT_LIST = SERVER_URL_API + 'admin/product/getListProduct'
export const API_UPDATE_LOAN_PRODUCT_LEVEL = SERVER_URL_API + 'admin/product/updateLevel'

/* Product Document */
export const API_PRODUCT_DOCUMENT_LIST = SERVER_URL_API + 'admin/product/getListProductDocument'
export const API_PRODUCT_DOCUMENT_BY_ID = SERVER_URL_API + 'admin/product/getProductDocumentById'
export const API_PRODUCT_DOCUMENT_UPDATE_BY_ID = SERVER_URL_API + 'admin/product/updateProductDocumentById'
export const API_SEARCH_PRODUCTS = SERVER_URL_API + 'admin/product/searchProducts'
export const API_GET_LOAN_PRODUCT_DETAIL = SERVER_URL_API + 'admin/product/getProductById'
export const API_UPDATE_LOAN_PRODUCT = SERVER_URL_API + 'admin/product/updateProduct'
export const API_GET_PRODUCT_FROM_CORE = SERVER_URL_API + 'admin/product/getAllProductCore'

/* Question */
export const API_QUESTION_LIST = SERVER_URL_API + 'admin/product/getListQuestion'
export const API_GET_QUESTION_BY_ID = (id) => {
	return SERVER_URL_API + 'admin/product/getQuestionById/' + id
}
export const API_UPDATE_QUESTION = SERVER_URL_API + 'admin/product/updateQuestion'

/* Loan Product Tenor */
export const API_LOAN_PRODUCT_TENOR_LIST = SERVER_URL_API + 'admin/product/getListTenure'
export const API_UPDATE_LOAN_PRODUCT_TENOR = SERVER_URL_API + 'admin/product/updateTenure'
export const API_GET_TENOR_DETAILS = SERVER_URL_API + 'admin/product/tenure/'
export const API_DELETE_TENOR = SERVER_URL_API + 'admin/product/deleteTenure/'

/* Loan Product Purpose */
export const API_LOAN_PRODUCT_PURPOSE_LIST = SERVER_URL_API + 'admin/product/getListLoanPurpose'
export const API_UPDATE_LOAN_PRODUCT_PURPOSE = SERVER_URL_API + 'admin/product/updateLoanPurpose'
export const API_GET_PURPOSE_DETAILS = SERVER_URL_API + 'admin/product/getLoanPurposeById/'
export const API_GET_PURPOSE_CODE_LIST = SERVER_URL_API + 'admin/product/getListLoanPurposeCore'

/* Unit Loan Product */
export const API_GET_PRODUCT_CAMPAIGN_LIST = SERVER_URL_API + 'v2/product/get-list-product-campaign'

/** Loan Application */
export const API_LOAN_APPLICATION_LIST = SERVER_URL_API + 'admin/loan_application/list'
export const API_UNLOCK_LOAN_APPLICATION = SERVER_URL_API + 'admin/loan_application/updateStatusLoanApp'
export const API_LOAN_APPLICATION_DETAILS = (loanAppId) => {
	return SERVER_URL_API + 'admin/loan_application/detail/' + loanAppId
}
export const API_LOAN_APPLICATION_BRE_RULES = (loanAppId) => {
	return SERVER_URL_API + 'admin/loan_application/bre-rules/' + loanAppId
}
export const API_UPDATE_DOCUMENT_SENT_CORE = SERVER_URL_API + 'admin/loan_application/updateDocumentSentCore'
export const API_GET_LOAN_PRODUCT_TYPES = SERVER_URL_API + 'v2/product/productType'

/** Additional reasons */
export const API_GET_ALL_DOCUMENT_TYPE = SERVER_URL_API + 'admin/loan_application/getAllDocumentType'
export const API_GET_DOCUMENT_TYPE_NAME = SERVER_URL_API + 'admin/loan_application/getDocumentTypeById'
export const API_GET_DOCUMENT_TYPE = SERVER_URL_API + 'admin/loan_application/getAdditionalDocumentByType'
export const API_GET_DETAIL_DOCUMENT_TYPE = SERVER_URL_API + 'admin/loan_application/getAdditionalDocumentById'
export const API_UPDATE_DETAIL_DOCUMENT_TYPE = SERVER_URL_API + 'admin/loan_application/updateAdditionalDocumentById'
export const API_DELETE_DETAIL_DOCUMENT_TYPE = SERVER_URL_API + 'admin/loan_application/deleteAdditionalDocumentById'

export const API_UPDATE_LOAN_APPLICATION_STATUS = SERVER_URL_API + 'admin/loan_application/updateStatusLoanApp'
export const API_LOAN_APPLICATION_HISTORY_LIST = (loanAppId) => {
	return SERVER_URL_API + 'admin/loan_application/historyApprovalDocument/' + loanAppId
}
export const API_APPROVE_LOAN_APP = SERVER_URL_API + 'admin/loan_application/approvalDocument'
export const API_APPROVE_ADDITIONAL_QUESTIONS = SERVER_URL_API + 'admin/loan_application/getAllQuestionAdditional'
export const API_UPDATE_LOAN_APP = SERVER_URL_API + 'admin/loan_application/updateAppForm'
export const API_CHECK_CIF_EXISTING = SERVER_URL_API + 'admin/loan_application/checkExistingCif'
export const API_RE_POLICY = SERVER_URL_API + 'admin/loan_application/repolisy'
export const API_NEW_CIF = SERVER_URL_API + 'admin/loan_application/createCif'
export const API_LINK_CIF = SERVER_URL_API + 'admin/loan_application/linkCif'
export const API_RE_TRY_SUBMIT_DOC = SERVER_URL_API + 'v2/sync/retryDocAndRoToCore'
/** Rejection reason */
export const API_GET_LIST_REJECTION_REASON = SERVER_URL_API + 'admin/loan_application/getListReasonCancel'
export const API_GET_REJECTION_REASON = SERVER_URL_API + 'admin/loan_application/getReasonCancelById'
export const API_UPDATE_REJECTION_REASON = SERVER_URL_API + 'admin/loan_application/updateReasonCancel'
export const API_DELETE_REJECTION_REASON = SERVER_URL_API + 'admin/loan_application/deleteReasonCancel'

/** Notification API new */
export const API_GET_ALL_LINK_TYPE = SERVER_URL_API + 'admin/manageLinkType'
export const API_GET_LIST_LINK_BY_LINK_TYPE_ID = SERVER_URL_API + 'admin/manageLink'

/** Promotion API */
export const API_PROMOTION = SERVER_URL_API + 'admin/promotions'
export const API_PROMOTION_PRODUCTS = SERVER_URL_API + 'v2/product/list-product-detail'
export const API_PROMOTION_BY_ID = (id) => {
	return SERVER_URL_API + 'admin/promotions/' + id
}

/** Customer Log API */
export const API_CUSTOMER_LOG = SERVER_URL_API + 'admin/customerLogs'
export const API_EXPORT_EXCEL_CUSTOMER_LOG = SERVER_URL_API + 'v2/export-report/external/customerLogs'

export const API_CUSTOMER_LOG_BY_ID = (id) => {
	return SERVER_URL_API + 'admin/customerLogs/' + id
}

/** Background Welcome */
export const API_BACKGROUND_WELCOME = SERVER_URL_API + 'admin/background_welcome'

/** Loan Video Call Verify */
export const API_RO_QUEUE_LIST = SERVER_URL_API + 'v2/roqueue/list'
export const API_GET_DOCTYPE_BY_KIND = SERVER_URL_API + 'v2/doc-type/get-list-by-kind'
export const API_SEND_PAYMENT_SCHEDULE_TO_CLIENT = SERVER_URL_API + 'v2/call-attachment/save-send'

export const API_GET_RO_QUEUE_DETAIL = SERVER_URL_API + 'v2/roqueue/detail'
export const API_VALIDATE_MAKE_CALL = SERVER_URL_API + 'v2/roqueue/validate'
export const API_REGISTER_DEVICE_TOKEN = SERVER_URL_API + 'device/registerFcm'
export const API_UPLOAD_FILE_ATTACHMENT = SERVER_URL_API + 'v2/call-attachment/save-send'
export const API_UPDATE_NOTE = SERVER_URL_API + 'v2/roqueue/update-note'
export const API_UPDATE_STATUS = SERVER_URL_API + 'v2/roqueue/update-status'
export const API_SAVE_LIST_ATTACHMENT = SERVER_URL_API + 'v2/call-attachment/save-list'
export const API_LIST_DOCUMENT_FROM_CORE = SERVER_URL_API + 'v2/document/core/getList'
export const API_DOWNLOAD_DOCUMENT_FROM_CORE = SERVER_URL_API + 'v2/document/core/download'
export const API_DOWNLOAD_ATTACHMENT_FROM_CORE = SERVER_URL_API + 'v2/call-attachment/download'

export const API_DOWNLOAD_VIDEO_CALL = SERVER_URL_API + 'v2/call-record/download-v2-url'
export const API_PUSH_NOTIFICATION = SERVER_URL_API + 'v2/admin/pushNotification'
export const API_GENERATE_OTP = SERVER_URL_API + 'v2/otp/generationOtp'

export const API_GET_MATCHING_OCR = SERVER_URL_API + 'v2/call/matchingOCR'
export const API_GET_DOC_TYPE_REFRESH = SERVER_URL_API + 'v2/doc-type/refresh'
export const API_UNIT_WS = process.env.WEB_SOCKET_URL + 'ws'
export const API_SUBMIT_DATA_TO_CORE = SERVER_URL_API + 'v2/call/completed'
export const API_GET_HISTORY_CALL_CLIENT = SERVER_URL_API + 'v2/call-tracking/get-history'
export const API_GET_LIST_STATUS = SERVER_URL_API + 'v2/call-status/get-list'
export const API_RELOAD_DOCUMENT_CARD = SERVER_URL_API + 'v2/doc-type/reload-document-card'

// eKYC Setting
export const API_GET_LIST_PRODUCTS = SERVER_URL_API + 'v2/product/get-list-product'
export const API_GET_LIST_PRODUCTS_CAMPAIGN = SERVER_URL_API + 'v2/product/get-list-product-campaign'

export const API_GET_LIST_PROVINCES = SERVER_URL_API + 'v2/master-data/get-list-province'
export const API_GET_LIST_DISTRICT = SERVER_URL_API + 'v2/master-data/get-list-district-by-province'
export const API_GET_LIST_COMPANY = SERVER_URL_API + 'v2/master-data/get-list-company-page'
export const APT_GET_LIST_APP_RESOURCE = SERVER_URL_API + 'v2/master-data/get-list-app-resource'

export const API_GET_LIST_EKYC = SERVER_URL_API + 'v2/call-ekyc/list'
export const API_GET_DETAIL_EKYC = SERVER_URL_API + 'v2/call-ekyc/edit'
export const API_SAVE_DETAIL_EKYC = SERVER_URL_API + 'v2/call-ekyc/save'

export const API_NOTI_TEMPLATE_LIST = SERVER_URL_API + 'admin/noti_template/list'
export const API_NOTI_TEMPLATE_DETAIL = SERVER_URL_API + 'admin/noti_template/detail'
export const API_NOTI_TEMPLATE_DELETE = SERVER_URL_API + 'admin/noti_template/delete'
export const API_NOTI_TEMPLATE_DEEP_LINK_LIST = SERVER_URL_API + 'deeplink/list'
// push Notification
export const API_INFO_CUSTOMER = SERVER_URL_API + 'admin/noti_template/infoCus/'
export const API_CUSTOMER_INFO = SERVER_URL_API + 'admin/noti_template/listNotiUser'

export const API_SIGN_UP_FOR_CARD_REPLACEMENT = SERVER_URL_API + 'card/noti_template/listNotiUser'
export const API_CARD_MANAGEMENT_REQUEST = SERVER_URL_API + 'card/getCardChangeRequestList'
export const API_CARD_MANAGEMENT_REQUEST_EXPORT = SERVER_URL_API + 'card/getCardChangeRequestList/download'
export const API_UPDATE_CARD_REQUEST = SERVER_URL_API + 'card/updateCardChangeRequestList'

export const GET_ALL_JOB = SERVER_URL_API + 'portal/job/list'
export const UPLOAD_TASK_FILE = SERVER_URL_API + 'portal/job/uploadJobs'
export const GET_JOBS_EXPORT = SERVER_URL_API + 'portal/job/jobsExport'
export const PUSH_NOTI_JOB = SERVER_URL_API + 'notification/pushNoti'

