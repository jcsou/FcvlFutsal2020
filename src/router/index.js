import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from '@/components/Accueil'
import U9Poules from '@/components/U9Poules'
import U9Finales from '@/components/U9Finales'
import U11Poules from '@/components/U11Poules'
import U11Finales from '@/components/U11Finales'
import U13Poules from '@/components/U13Poules'
import U13Finales from '@/components/U13Finales'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name:'Default',
			component: Accueil
		}, 		
		{
			path: '/Accueil',
			name:'Accueil',
			component: Accueil
		}, 
		{
			path: '/U9Poules',
			name:'U9-Poules',
			props: true,
			component: U9Poules
		}, 
		{
			path: '/U9Finales',
			name:'U9-Finales',
			props: true,
			component: U9Finales
		}, 
		{
			path: '/U11Poules',
			name:'U11-Poules',
			props: true,
			component: U11Poules
		}, 
		{
			path: '/U11Finales',
			name:'U11-Finales',
			props: true,
			component: U11Finales
		}, 
		{
			path: '/U13Poules',
			name:'U13-Poules',
			props: true,
			component: U13Poules
		}, 
		{
			path: '/U13Finales',
			name:'U13-Finales',
			props: true,
			component: U13Finales
		}
		
	]
})