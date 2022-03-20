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

const index = () => import("@/views/index")
//路由文件
const routeFile = [
	{
		path: '/index',
		name: 'Index',
		component: index
	}
]

export default routeFile
