export default {
	ROLE_SUPPER_ADMIN: 'ROLE_IT_ADMIN',
	ROLE_CIU_OFFICER: 'ROLE_CIU_OFFICER',
	ROLE_SUPERVISOR: 'ROLE_SUPERVISOR'
	/* PERMISSION_ACCESS: [
		{
			role_name: 'ROLE_ADMINISTRATOR',
			list_module: [
				{
					group_key: 'Home',
					group_text: 'Dashboard',
					group_route: 'Dashboard',
					group_accepted: true
				},
				{
					group_key: 'userSystem',
					group_text: 'QL người dùng',
					group_route: 'User',
					group_accepted: true
				},
				{
					group_key: 'profile',
					group_text: 'Profile',
					group_route: 'profileAdmin',
					group_accepted: true
				},
				{
					group_key: 'customer',
					group_text: 'QL khách hàng',
					group_route: 'customerIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'customerDeviceList',
							group_route: 'customerDeviceList',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'faq',
					group_text: 'QL FAQ',
					group_route: 'faqCategoryIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'faqCategoryTopicIndex',
							group_route: 'faqCategoryTopicIndex',
							group_accepted: true
						},
						{
							group_key: 'faqIndex',
							group_route: 'faqIndex',
							group_accepted: true
						},
						{
							group_key: 'resultSearch',
							group_route: 'resultSearch',
							group_accepted: true
						},
						{
							group_key: 'keywordSetting',
							group_route: 'keywordSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'payment',
					group_text: 'QL Phương thức thanh toán',
					group_route: 'paymentMethod',
					group_accepted: true
				},
				{
					group_key: 'NotiSystem',
					group_text: 'QL Notification',
					group_route: 'Noti',
					group_accepted: true,
					child_group: [
						{
							group_key: 'groupNoti',
							group_route: 'groupNoti',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'officeManager',
					group_text: 'QL Văn phòng',
					group_route: 'AddressOffices',
					child_group: [
						{
							group_key: 'AddAddressOffice',
							group_name: 'AddAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'EditAddressOffice',
							group_name: 'EditAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'ViewAddressOffice',
							group_name: 'ViewAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'settingKindOffice',
							group_name: 'settingKindOffice',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'contact',
					group_text: 'QL Liên hệ',
					group_route: 'listContactCustomer',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingContact',
							group_route: 'settingContact',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'request',
					group_text: 'QL Yêu cầu',
					group_route: 'requestManagement',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanAdditionalRequest',
							group_route: 'loanAdditionalRequest',
							group_accepted: true
						},
						{
							group_key: 'forceCloseRequest',
							group_route: 'forceCloseRequest',
							group_accepted: true
						},
						{
							group_key: 'settingLoanAdditional',
							group_route: 'settingLoanAdditional',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopup',
							group_route: 'loanRequestTopup',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopupSetting',
							group_route: 'loanRequestTopupSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'marketingContent',
					group_text: 'Marketing Content',
					group_route: 'marketingContentIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanGuide',
							group_route: 'loanGuide',
							group_accepted: true
						},
						{
							group_key: 'addLoanGuide',
							group_route: 'addLoanGuide',
							group_accepted: true
						},
						{
							group_key: 'editLoanGuide',
							group_route: 'editLoanGuide',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'customerTopup',
					group_text: 'QL Khách hàng topup',
					group_route: 'userTopUp',
					group_accepted: true
				},
				{
					group_key: 'setting',
					group_text: 'QL Setting',
					group_route: 'settingSystem',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingTutorial',
							group_route: 'settingTutorial',
							group_accepted: true
						},
						{
							group_key: 'addTutorial',
							group_route: 'addTutorial',
							group_accepted: true
						},
						{
							group_key: 'editTutorial',
							group_route: 'editTutorial',
							group_accepted: true
						},
						{
							group_key: 'backgroundSetting',
							group_route: 'backgroundSetting',
							group_accepted: true
						},
						{
							group_key: 'backgroundLoginSetting',
							group_route: 'backgroundLoginSetting',
							group_accepted: true
						},
						{
							group_key: 'profileAdmin',
							group_route: 'profileAdmin',
							group_accepted: true
						}
					]
				}
			]
		},
		{
			role_name: 'ROLE_CS_ADMIN',
			list_module: [
				{
					group_key: 'Home',
					group_text: 'Dashboard',
					group_route: 'Dashboard',
					group_accepted: true
				},
				{
					group_key: 'userSystem',
					group_text: 'QL người dùng',
					group_route: 'User',
					group_accepted: true
				},
				{
					group_key: 'profile',
					group_text: 'Profile',
					group_route: 'profileAdmin',
					group_accepted: true
				},
				{
					group_key: 'customer',
					group_text: 'QL khách hàng',
					group_route: 'customerIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'customerDeviceList',
							group_route: 'customerDeviceList',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'faq',
					group_text: 'QL FAQ',
					group_route: 'faqCategoryIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'faqCategoryTopicIndex',
							group_route: 'faqCategoryTopicIndex',
							group_accepted: true
						},
						{
							group_key: 'faqIndex',
							group_route: 'faqIndex',
							group_accepted: true
						},
						{
							group_key: 'resultSearch',
							group_route: 'resultSearch',
							group_accepted: true
						},
						{
							group_key: 'keywordSetting',
							group_route: 'keywordSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'payment',
					group_text: 'QL Phương thức thanh toán',
					group_route: 'paymentMethod',
					group_accepted: true
				},
				{
					group_key: 'notification',
					group_text: 'QL Notification',
					group_route: 'notification',
					group_accepted: true,
					child_group: [
						{
							group_key: 'groupCustomerNotification',
							group_route: 'groupCustomerNotification',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'officeManager',
					group_text: 'QL Văn phòng',
					group_route: 'AddressOffices',
					child_group: [
						{
							group_key: 'AddAddressOffice',
							group_name: 'AddAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'EditAddressOffice',
							group_name: 'EditAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'ViewAddressOffice',
							group_name: 'ViewAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'settingKindOffice',
							group_name: 'settingKindOffice',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'contact',
					group_text: 'QL Liên hệ',
					group_route: 'listContactCustomer',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingContact',
							group_route: 'settingContact',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'request',
					group_text: 'QL Yêu cầu',
					group_route: 'requestManagement',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanAdditionalRequest',
							group_route: 'loanAdditionalRequest',
							group_accepted: true
						},
						{
							group_key: 'forceCloseRequest',
							group_route: 'forceCloseRequest',
							group_accepted: true
						},
						{
							group_key: 'settingLoanAdditional',
							group_route: 'settingLoanAdditional',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopup',
							group_route: 'loanRequestTopup',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopupSetting',
							group_route: 'loanRequestTopupSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'guideManagement',
					group_text: 'Marketing Content',
					group_route: 'marketingContentIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanGuide',
							group_route: 'loanGuide',
							group_accepted: true
						},
						{
							group_key: 'addLoanGuide',
							group_route: 'addLoanGuide',
							group_accepted: true
						},
						{
							group_key: 'editLoanGuide',
							group_route: 'editLoanGuide',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'customerTopup',
					group_text: 'QL Khách hàng topup',
					group_route: 'userTopUp',
					group_accepted: true
				},
				{
					group_key: 'setting',
					group_text: 'QL Setting',
					group_route: 'settingSystem',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingTutorial',
							group_route: 'settingTutorial',
							group_accepted: true
						},
						{
							group_key: 'addTutorial',
							group_route: 'addTutorial',
							group_accepted: true
						},
						{
							group_key: 'editTutorial',
							group_route: 'editTutorial',
							group_accepted: true
						},
						{
							group_key: 'backgroundSetting',
							group_route: 'backgroundSetting',
							group_accepted: true
						},
						{
							group_key: 'backgroundLoginSetting',
							group_route: 'backgroundLoginSetting',
							group_accepted: true
						}
					]
				}
			]
		},
		{
			role_name: 'ROLE_MARKETING_ADMIN',
			list_module: [
				{
					group_key: 'Home',
					group_text: 'Dashboard',
					group_route: 'Dashboard',
					group_accepted: true
				},
				{
					group_key: 'userSystem',
					group_text: 'QL người dùng',
					group_route: 'User',
					group_accepted: true
				},
				{
					group_key: 'profile',
					group_text: 'Profile',
					group_route: 'profileAdmin',
					group_accepted: true
				},
				{
					group_key: 'customer',
					group_text: 'QL khách hàng',
					group_route: 'customerIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'customerDeviceList',
							group_route: 'customerDeviceList',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'faq',
					group_text: 'QL FAQ',
					group_route: 'faqCategoryIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'faqCategoryTopicIndex',
							group_route: 'faqCategoryTopicIndex',
							group_accepted: true
						},
						{
							group_key: 'faqIndex',
							group_route: 'faqIndex',
							group_accepted: true
						},
						{
							group_key: 'resultSearch',
							group_route: 'resultSearch',
							group_accepted: true
						},
						{
							group_key: 'keywordSetting',
							group_route: 'keywordSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'payment',
					group_text: 'QL Phương thức thanh toán',
					group_route: 'paymentMethod',
					group_accepted: true
				},
				{
					group_key: 'notification',
					group_text: 'QL Notification',
					group_route: 'notification',
					group_accepted: true,
					child_group: [
						{
							group_key: 'groupCustomerNotification',
							group_route: 'groupCustomerNotification',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'officeManager',
					group_text: 'QL Văn phòng',
					group_route: 'AddressOffices',
					child_group: [
						{
							group_key: 'AddAddressOffice',
							group_name: 'AddAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'EditAddressOffice',
							group_name: 'EditAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'ViewAddressOffice',
							group_name: 'ViewAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'settingKindOffice',
							group_name: 'settingKindOffice',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'contact',
					group_text: 'QL Liên hệ',
					group_route: 'listContactCustomer',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingContact',
							group_route: 'settingContact',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'request',
					group_text: 'QL Yêu cầu',
					group_route: 'requestManagement',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanAdditionalRequest',
							group_route: 'loanAdditionalRequest',
							group_accepted: true
						},
						{
							group_key: 'forceCloseRequest',
							group_route: 'forceCloseRequest',
							group_accepted: true
						},
						{
							group_key: 'settingLoanAdditional',
							group_route: 'settingLoanAdditional',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopup',
							group_route: 'loanRequestTopup',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopupSetting',
							group_route: 'loanRequestTopupSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'guideManagement',
					group_text: 'Marketing Content',
					group_route: 'marketingContentIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanGuide',
							group_route: 'loanGuide',
							group_accepted: true
						},
						{
							group_key: 'addLoanGuide',
							group_route: 'addLoanGuide',
							group_accepted: true
						},
						{
							group_key: 'editLoanGuide',
							group_route: 'editLoanGuide',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'customerTopup',
					group_text: 'QL Khách hàng topup',
					group_route: 'userTopUp',
					group_accepted: true
				},
				{
					group_key: 'setting',
					group_text: 'QL Setting',
					group_route: 'settingSystem',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingTutorial',
							group_route: 'settingTutorial',
							group_accepted: true
						},
						{
							group_key: 'addTutorial',
							group_route: 'addTutorial',
							group_accepted: true
						},
						{
							group_key: 'editTutorial',
							group_route: 'editTutorial',
							group_accepted: true
						},
						{
							group_key: 'backgroundSetting',
							group_route: 'backgroundSetting',
							group_accepted: true
						},
						{
							group_key: 'backgroundLoginSetting',
							group_route: 'backgroundLoginSetting',
							group_accepted: true
						}
					]
				}
			]
		},
		{
			role_name: 'ROLE_CS_STAFF',
			list_module: [
				{
					group_key: 'Home',
					group_text: 'Dashboard',
					group_route: 'Dashboard',
					group_accepted: true
				},
				{
					group_key: 'userSystem',
					group_text: 'QL người dùng',
					group_route: 'User',
					group_accepted: false
				},
				{
					group_key: 'profile',
					group_text: 'Profile',
					group_route: 'profileAdmin',
					group_accepted: true
				},
				{
					group_key: 'customer',
					group_text: 'QL khách hàng',
					group_route: 'customerIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'customerDeviceList',
							group_route: 'customerDeviceList',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'faq',
					group_text: 'QL FAQ',
					group_route: 'faqCategoryIndex',
					group_accepted: false,
					child_group: [
						{
							group_key: 'faqCategoryTopicIndex',
							group_route: 'faqCategoryTopicIndex',
							group_accepted: false
						},
						{
							group_key: 'faqIndex',
							group_route: 'faqIndex',
							group_accepted: false
						},
						{
							group_key: 'resultSearch',
							group_route: 'resultSearch',
							group_accepted: false
						},
						{
							group_key: 'keywordSetting',
							group_route: 'keywordSetting',
							group_accepted: false
						}
					]
				},
				{
					group_key: 'payment',
					group_text: 'QL Phương thức thanh toán',
					group_route: 'paymentMethod',
					group_accepted: true
				},
				{
					group_key: 'notification',
					group_text: 'QL Notification',
					group_route: 'notification',
					group_accepted: false,
					child_group: [
						{
							group_key: 'groupCustomerNotification',
							group_route: 'groupCustomerNotification',
							group_accepted: false
						}
					]
				},
				{
					group_key: 'officeManager',
					group_text: 'QL Văn phòng',
					group_route: 'AddressOffices',
					child_group: [
						{
							group_key: 'AddAddressOffice',
							group_name: 'AddAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'EditAddressOffice',
							group_name: 'EditAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'ViewAddressOffice',
							group_name: 'ViewAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'settingKindOffice',
							group_name: 'settingKindOffice',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'contact',
					group_text: 'QL Liên hệ',
					group_route: 'listContactCustomer',
					group_accepted: false,
					child_group: [
						{
							group_key: 'settingContact',
							group_route: 'settingContact',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'request',
					group_text: 'QL Yêu cầu',
					group_route: 'requestManagement',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanAdditionalRequest',
							group_route: 'loanAdditionalRequest',
							group_accepted: true
						},
						{
							group_key: 'forceCloseRequest',
							group_route: 'forceCloseRequest',
							group_accepted: true
						},
						{
							group_key: 'settingLoanAdditional',
							group_route: 'settingLoanAdditional',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopup',
							group_route: 'loanRequestTopup',
							group_accepted: true
						},
						{
							group_key: 'loanRequestTopupSetting',
							group_route: 'loanRequestTopupSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'marketingContent',
					group_text: 'Marketing Content',
					group_route: 'marketingContentIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanGuide',
							group_route: 'loanGuide',
							group_accepted: true
						},
						{
							group_key: 'addLoanGuide',
							group_route: 'addLoanGuide',
							group_accepted: true
						},
						{
							group_key: 'editLoanGuide',
							group_route: 'editLoanGuide',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'customerTopup',
					group_text: 'QL Khách hàng topup',
					group_route: 'userTopUp',
					group_accepted: true
				},
				{
					group_key: 'setting',
					group_text: 'QL Setting',
					group_route: 'settingSystem',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingTutorial',
							group_route: 'settingTutorial',
							group_accepted: true
						},
						{
							group_key: 'addTutorial',
							group_route: 'addTutorial',
							group_accepted: true
						},
						{
							group_key: 'editTutorial',
							group_route: 'editTutorial',
							group_accepted: true
						},
						{
							group_key: 'backgroundSetting',
							group_route: 'backgroundSetting',
							group_accepted: true
						},
						{
							group_key: 'backgroundLoginSetting',
							group_route: 'backgroundLoginSetting',
							group_accepted: true
						}
					]
				}
			]
		},
		{
			role_name: 'ROLE_MARKETING_STAFF',
			list_module: [
				{
					group_key: 'Home',
					group_text: 'Dashboard',
					group_route: 'Dashboard',
					group_accepted: true
				},
				{
					group_key: 'userSystem',
					group_text: 'QL người dùng',
					group_route: 'User',
					group_accepted: false
				},
				{
					group_key: 'profile',
					group_text: 'Profile',
					group_route: 'profileAdmin',
					group_accepted: true
				},
				{
					group_key: 'customer',
					group_text: 'QL khách hàng',
					group_route: 'customerIndex',
					group_accepted: false,
					child_group: [
						{
							group_key: 'customerDeviceList',
							group_route: 'customerDeviceList',
							group_accepted: false
						}
					]
				},
				{
					group_key: 'faq',
					group_text: 'QL FAQ',
					group_route: 'faqCategoryIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'faqCategoryTopicIndex',
							group_route: 'faqCategoryTopicIndex',
							group_accepted: true
						},
						{
							group_key: 'faqIndex',
							group_route: 'faqIndex',
							group_accepted: true
						},
						{
							group_key: 'resultSearch',
							group_route: 'resultSearch',
							group_accepted: true
						},
						{
							group_key: 'keywordSetting',
							group_route: 'keywordSetting',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'payment',
					group_text: 'QL Phương thức thanh toán',
					group_route: 'paymentMethod',
					group_accepted: true
				},
				{
					group_key: 'notification',
					group_text: 'QL Notification',
					group_route: 'notification',
					group_accepted: true,
					child_group: [
						{
							group_key: 'groupCustomerNotification',
							group_route: 'groupCustomerNotification',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'officeManager',
					group_text: 'QL Văn phòng',
					group_route: 'AddressOffices',
					child_group: [
						{
							group_key: 'AddAddressOffice',
							group_name: 'AddAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'EditAddressOffice',
							group_name: 'EditAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'ViewAddressOffice',
							group_name: 'ViewAddressOffice',
							group_accepted: true
						},
						{
							group_key: 'settingKindOffice',
							group_name: 'settingKindOffice',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'contact',
					group_text: 'QL Liên hệ',
					group_route: 'listContactCustomer',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingContact',
							group_route: 'settingContact',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'request',
					group_text: 'QL Yêu cầu',
					group_route: 'requestManagement',
					group_accepted: false,
					child_group: [
						{
							group_key: 'loanAdditionalRequest',
							group_route: 'loanAdditionalRequest',
							group_accepted: false
						},
						{
							group_key: 'forceCloseRequest',
							group_route: 'forceCloseRequest',
							group_accepted: false
						},
						{
							group_key: 'settingLoanAdditional',
							group_route: 'settingLoanAdditional',
							group_accepted: false
						},
						{
							group_key: 'loanRequestTopup',
							group_route: 'loanRequestTopup',
							group_accepted: false
						},
						{
							group_key: 'loanRequestTopupSetting',
							group_route: 'loanRequestTopupSetting',
							group_accepted: false
						}
					]
				},
				{
					group_key: 'marketingContent',
					group_text: 'Marketing Content',
					group_route: 'marketingContentIndex',
					group_accepted: true,
					child_group: [
						{
							group_key: 'loanGuide',
							group_route: 'loanGuide',
							group_accepted: true
						},
						{
							group_key: 'addLoanGuide',
							group_route: 'addLoanGuide',
							group_accepted: true
						},
						{
							group_key: 'editLoanGuide',
							group_route: 'editLoanGuide',
							group_accepted: true
						}
					]
				},
				{
					group_key: 'customerTopup',
					group_text: 'QL Khách hàng topup',
					group_route: 'userTopUp',
					group_accepted: true
				},
				{
					group_key: 'setting',
					group_text: 'QL Setting',
					group_route: 'settingSystem',
					group_accepted: true,
					child_group: [
						{
							group_key: 'settingTutorial',
							group_route: 'settingTutorial',
							group_accepted: true
						},
						{
							group_key: 'addTutorial',
							group_route: 'addTutorial',
							group_accepted: true
						},
						{
							group_key: 'editTutorial',
							group_route: 'editTutorial',
							group_accepted: true
						},
						{
							group_key: 'backgroundSetting',
							group_route: 'backgroundSetting',
							group_accepted: true
						},
						{
							group_key: 'backgroundLoginSetting',
							group_route: 'backgroundLoginSetting',
							group_accepted: true
						}
					]
				}
			]
		}
	]*/
}
