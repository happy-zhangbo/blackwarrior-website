import { createRouter,createWebHashHistory } from 'vue-router'
const layout = () => import('@/views/layout')
// const index = () => import('@/views/index')

import {defaultMenu} from "./menuRouter";
import routeFile from "./menuRouter"
let arr = []
defaultMenu.forEach(item => {
	if(item.child.length > 0){
		item.child.forEach(row => {
			//根据后台返回的url，这里加载对于的route
			routeFile.forEach(route => {
				if (row.url === route.path) {
					arr.push(route)
				}
			})
		})
	}else{
		routeFile.forEach(route => {
			if (item.url === route.path) {
				arr.push(route)
			}
		})
	}
})
const router = createRouter({
	// mode: 'history',     //这个模式下，地址栏就不会自己加上#号了
	"history": createWebHashHistory(),
	routes: [
		// {
		// 	path: '/index',
		// 	name: 'index',
		// 	component: index
		// },
		{
			name: 'layout',
			path: '/',
			component: layout,
			children: arr
		}
	]
})

// router.addRoutes(baseRoute)

export default router
