const getters = {
	sidebar: state => state.app.sidebar,
	language: state => state.app.language,
	size: state => state.app.size,
	device: state => state.app.device,
	visitedViews: state => state.tagsView.visitedViews,
	cachedViews: state => state.tagsView.cachedViews,
	token: state => state.auth.token,
	avatar: state => state.auth.avatar,
	name: state => state.auth.name,
	userProfile: state => state.auth.userProfile,
	introduction: state => state.auth.introduction,
	status: state => state.auth.status,
	roles: state => state.auth.roles,
	setting: state => state.auth.setting,
	permission_routers: state => state.permission.routers,
	listPermissionIsLogin: state => state.groupUserModule.listPermissionIsLogin,
	addRouters: state => state.permission.addRouters,
	errorLogs: state => state.errorLog.logs,
	changePasswordStatus: state => state.auth.changePasswordStatus
}
export default getters
