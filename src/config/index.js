export default {
	OK: 'ok',
	CANCEL: 'cancel',
	TYPE_CONFIRM: 'Warning',
	MESSAGE_CONFIRM: 'Are you sure?',
	MESSAGE_ARE_YOU_SURE: 'Are you sure ?',
	TYPE_SUCCESS: 'success',
	MESSAGE_SUCCESS: 'Completed',
	TYPE_FAILED: 'info',
	MESSAGE_FAILED: 'Canceled',
	STATUS_REQUEST_CUSTOMER_TEXT: ['Pending', 'Approved', 'Rejected', 'Cancel'],
	STATUS_REQUEST_CUSTOMER_KEY: ['warning', 'success', 'info', 'danger'],
	STATUS_CUSTOMER_TEXT: ['Active', 'Deactive', 'Cancel'],
	STATUS_USER_TEXT: ['Deactive', 'Active'],
	REGION_SETTING: [{ key: 1, value: 'Nam' }, { key: 2, value: 'Bắc' }, { key: 3, value: 'Trung' }],
	ROLE_PERMISSION: [
		{ key: 2, name: 'ROLE_ADMIN', text: 'Admin' },
		{ key: 3, name: 'ROLE_BUSINESS', text: 'Business' },
		{ key: 4, name: 'ROLE_EDITOR', text: 'Editor' },
		{ key: 5, name: 'ROLE_ADMINISTRATOR', text: 'Administrator' }
	],
	ROLE_PERMISSION_SUBMIT: [
		{ key: 3, name: 'ROLE_BUSINESS', text: 'Business' },
		{ key: 4, name: 'ROLE_EDITOR', text: 'Editor' },
		{ key: 5, name: 'ROLE_ADMINISTRATOR', text: 'Administrator' }
	],
	FAQ_TYPE_STATUS: [{ key: 1, text: 'FAQ' }, { key: 2, text: 'LOAN_PVFC' }],
	NO_YES: [{ key: 0, text: 'No', value: false }, { key: 1, text: 'Yes', value: true }],
	TYPE_REQUEST_MANAGEMENT: [{ key: 0, key_trans: 'type_request_change_email' }, {
		key: 1,
		key_trans: 'type_request_change_address'
	}, { key: 3, key_trans: 'type_request_change_phone' }, { key: 4, key_trans: 'type_request_change_national_id' }],
	TYPES_REQUEST: [
		{ key: 'CHANGEEMAIL', text: 'Change email' },
		{ key: 'CHANGEPHONE', text: 'Change phone number' },
		{ key: 'CHANGEADDRESS', text: 'Change address' },
		{ key: 'CHANGEIDENTITYCARD', text: 'Change CMND' }
	],
	TYPES_SETTING_TUTORIAL: [{ key: 'BEFORE_LOGIN', text: 'Before login' }, { key: 'AFTER_LOGIN', text: 'After Login' }],
	TYPES_SETTING_TUTORIAL_ENUM: {
		BEFORE_LOGIN: 'BEFORE_LOGIN',
		AFTER_LOGIN: 'AFTER_LOGIN'
	},
	TYPES_BACKGROUND_LOGIN_SETTING: {
		Background_Mobile: 'Background_Mobile',
		Background_WebMobile: 'Background_WebMobile',
		Background_Desktop: 'Background_Desktop',
		Background_Quicky_Standing_Overdue_Desktop: 'Background_Quicky_Standing_Overdue_Desktop',
		Background_Quicky_Standing_Overdue_WebMobile: 'Background_Quicky_Standing_Overdue_WebMobile',
		Background_Quicky_Standing_Overdue_Mobile: 'Background_Quicky_Standing_Overdue_Mobile',
		Video_Web_Desktop: 'Video_Desktop'
	},
	LIST_STATUS_LOAN_TOP_UP: [
		{ key: 'NEW', text: 'New' },
		{ key: 'APPROVED', text: 'Approved' },
		{ key: 'REJECTED', text: 'Rejected' },
		{ key: 'CANCELLED', text: 'Cancelled' },
		{ key: 'REQUESTMORE', text: 'Request more info' }
	],
	LIST_STATUS_REQUEST: [
		{ key: 'NEW', text: 'New' },
		{ key: 'APPROVED', text: 'Approved' },
		{ key: 'REJECTED', text: 'Rejected' },
		{ key: 'CANCELLED', text: 'Cancelled' },
		{ key: 'REQUESTMORE', text: 'Request more info' }
	],
	PAYMENT_METHODS: [
		{ key: 'EXTERNAL_LINK', text: 'External link' },
		{ key: 'INTERNAL_LINK', text: 'Internal link' },
		{ key: 'WALLET', text: 'Wallet' },
		{ key: 'GATEWAY', text: 'Gateway' },
		{ key: 'TEXT', text: 'Static text' }
	],
	TYPES_CONTACT_SETTING: [
		{ key: 'MAIL', text: 'MAIL' },
		{ key: 'URL', text: 'Url' },
		{ key: 'PHONE', text: 'Phone' }
	],
	LIST_TYPE_REQUEST: [
		{ key: '2', text: 'Phát hành lại thẻ' },
		{ key: '1', text: 'Thay thế thẻ' }
	],
	LIST_STATUS_CARD_REQUEST: [
		{ key: 'NEW', text: 'New' },
		{ key: 'APPROVED', text: 'Approved' },
		{ key: 'REJECTED', text: 'Rejected' },
		{ key: 'CANCELLED', text: 'Cancelled' },
		{ key: 'REQUESTMORE', text: 'Request more info' }
	],
	LIMIT_SIZE_FILE_UPLOAD: 10240000, // 10 mb,
	// eslint-disable-next-line no-undef
	GOOGLE_MAP_KEY: (process.env.NODE_ENV === 'production' && process.env.BUILD_ENV === 'PRODUCTION') ? GLOBAL_CONFIG.GOOGLE_MAP_KEY : process.env.GOOGLE_MAP_KEY,
	// eslint-disable-next-line no-undef
	PREFIX_DOMAIN: (process.env.NODE_ENV === 'production' && process.env.BUILD_ENV === 'PRODUCTION') ? GLOBAL_CONFIG.PREFIX_DOMAIN : process.env.PREFIX_DOMAIN,
	VERSION: process.env.VERSION || '',
	LOAN_PRODUCT_LEVEL: {
		LEVEL_1: 1,
		LEVEL_2: 2
	},
	DEFAULT_TOTAL_ITEM_PER_PAGE: 10,
	DEFAULT_PAGE_SIZES: [10, 20, 30, 50, 100],
	FULL_PAGE_SIZE: -1,
	LIMIT_LENGTH: {
		QUESTION_CONTENT: {
			MAX: 254
		},
		LOAN_PRODUCT_NAME: {
			MIN: 1,
			MAX: 20
		},
		LOAN_PRODUCT_CONTENT: {
			MAX: 25,
			MAX_SENTENCE: 2
		},
		LOAN_INTEREST: {
			MIN: 1,
			MAX: 100
		},
		ORDER_INDEX: {
			MIN: 1,
			MAX: 1000
		},
		ADDITIONAL_REASON: {
			CODE: {
				MIN: 1,
				MAX: 10
			},
			REASON: {
				MIN: 1,
				MAX: 100
			}
		},
		REJECTION_REASON: {
			CODE: {
				MIN: 1,
				MAX: 10
			},
			REASON: {
				MIN: 1,
				MAX: 100
			}
		},
		NOTIFICATION: {
			TITLE: {
				MIN: 1,
				MAX: 70
			},
			DESCRIPTION: {
				MIN: 1,
				MAX: 120
			},
			TIME_SCHEDULE: {
				MIN: 7, // hour
				MAX: 21 // Hour
			}
		},
		LOAN_PRODUCT_DESCRIPTION: {
			MIN: 1,
			MAX: 1000
		},
		PROMOTION: {
			CODE: {
				MIN: 1,
				MAX: 20
			}
		},
		PAYMENT_METHOD: {
			POSITION: {
				MIN: 1,
				MAX: 2
			}
		}
	},
	CASE_KEY_CODE_NUMBER: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8],
	DIFFERENCE_AMOUNT: 1000000,
	LOAN_APP_STATUS: {
		NEW: 0,
		IN_PROGRESS: 1,
		DONE: 2,
		CANCELLED: 3
	},
	LOAN_APP_STATUS_LOG: {
		UNFINISHED: 0,
		APPLIED: 1,
		IN_REVIEW: 2,
		REQUESTING: 3,
		SUBMITTED: 99,
		REJECTED: -99
	},
	DATE_FORMAT: {
		DDMMYYYY: 'DD/MM/YYYY',
		DDMMYYYYHHMMA: 'DD/MM/YYYY hh:mmA'
	},
	STATUS: ['inactive', 'active'],
	GENDERS: [
		{ key: 'ALL', text: 'All' },
		{ key: 'M', text: 'Male' },
		{ key: 'F', text: 'Female' }
	],
	NOTIFICATION_STATUS: ['SENT', 'SCHEDULED', 'UNDO'],
	PAYMENT_METHOD: {
		WALLET: 'WALLET'
	},
	LOAN_APP_STATUS_ARR: ['new', 'inProgress', 'done', 'cancelled'],
	VIDEO: 'VIDEO',
	IMAGE: 'IMAGE',
	COMPANY_OPTIONS: {
		COMPANY_TAX: {
			key: 1,
			text: 'Company_Tax'
		},
		COMPANY_NAME: {
			key: 2,
			text: 'Company_Name'
		}
	},
	UNIT_LOAN_VIDEO_CALL_VERIFY_STATUS: {
		WAITING: 'RO_QUEUE',
		APPROVED: 'APPROVED_QUEUE',
		REJECT: 'REJECT_QUEUE',
		CANCEL: 'CANCEL_CALL'
	},
	UNIT_LOAN_VIDEO_CALL_FIREBASE_CONFIG: {
		apiKey: '',
		authDomain: '',
		databaseURL: '',
		projectId: '',
		storageBucket: '',
		messagingSenderId: '',
		appId: '',
		measurementId: ''
	},
	UNIT_LOAN_VIDEO_CALL_RO_QUEUE_STATUS: {
		CANCEL_CALL: 'CANCEL_CALL',
		COMPLETED: 'COMPLETED'
	},
	UNIT_LOAN_VIDEO_CALL_STATUS: {
		WAITING: 'WAITING',
		MISSING: 'MISSING',
		DISCONNECT: 'DISCONNECT',
		CALLED: 'CALLED',
		COMPLETED: 'COMPLETED',
		CANCEL: 'CANCEL_CALL'
	},
	STRINGEE_SERVER_ADDRS: {
		V1: '',
		V2: ''
	},
	ACTION_ADD_NEW: 'ACTION_ADD_NEW',
	ACTION_EDIT: 'ACTION_EDIT',
	NOTI_STATUS: {
		NEW: 0,
		ENABLE: 1,
		DISABLE: 2
	},
	MSG_TYPE_SUCCESS: 'success',
	MSG_TYPE_FAIL: 'error',
	MSG_TYPE_INFO: 'info',
	MSG_SUCCESS: 'Save success',
	MSG_FAIL: 'Something went wrong',
	GENDER: [{ key: 'M', text: 'Nam' }, { key: 'F', text: 'Nữ' }],
	PRODUCTTYPE: [{ key: 'PLISH', text: 'PERSONAL LOAN' }, { key: 'ESPLISH', text: 'EASY LOAN' }],
	MILESTONEPL: [{ key: '1', text: 'Giai doan 1' }, { key: '2', text: 'Giai doan 2' }, { key: '3', text: 'Giai doan 3' }, { key: '4', text: 'Giai doan 4' }, { key: '5', text: 'Giai doan 5' }],
	MILESTONEEASYLOAN: [{ key: '1', text: 'Giai doan 1' }, { key: '2', text: 'Giai doan 2' }, { key: '3', text: 'Giai doan 3' }, { key: '4', text: 'Giai doan 4' }, { key: '5', text: 'Giai doan 5' }, { key: '6', text: 'Giai doan 6' }],
	APPSTATUS: [{ key: 10, text: 'Chưa hoàn thành & chưa có đơn vay' }, { key: 11, text: 'Chưa hoàn thành & đã có đơn vay' }, { key: 3, text: 'Đã hoàn thành đơn vay' }, { key: 2, text: 'Đã hoàn thành hồ sơ vay' }],
	DIGITAL_PL_LOAN_STATUS: {
		EDIT_APPROVAL: 1,
		REPO: 2,
		EDIT: 3,
		APPROVAL: 4,
		EDIT_REPO: 5
	}
}
