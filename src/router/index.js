import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from '@/components/Accueil'
import U9Poules from '@/components/U9Poules'

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
		}
		
	]
})