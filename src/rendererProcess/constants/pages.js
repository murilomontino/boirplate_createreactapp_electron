const ADDRESS = require('./routes.json')

const ComponentHome = require('../pages/Home').default

const PAGE = {
	Home:{
		component: ComponentHome, 
		route: ADDRESS.HOME.route,
		name: ADDRESS.HOME.name
	},
}

export default PAGE
