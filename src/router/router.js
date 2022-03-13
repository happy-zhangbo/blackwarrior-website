import { createRouter,createWebHistory } from 'vue-router'
const layout = () => import('@/views/layout')
const login = () => import('@/views/login')

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
	"history": createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
			name: 'layout',
			path: '/index',
			component: layout,
			children: arr
		}
	]
})

// router.addRoutes(baseRoute)

export default router
