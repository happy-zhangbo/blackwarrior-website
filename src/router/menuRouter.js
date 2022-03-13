// 一级菜单，路由文件
export const defaultMenu = [
	{
		showName: "Index",
		css: "el-icon-service",
		url: "/index",
		isMenu: true,
		child: []
	}
]

//路由文件
const routeFile = [
	{
		path: '/index',
		name: 'Index',
		component: import('@/views/index')
	}
]

export default routeFile
