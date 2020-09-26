import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import { default as PAGE } from './constants/pages'


export default () => {


	return (
		
		<BrowserRouter>
			
			<Switch>

				<Route path={PAGE.Home.route} component={PAGE.Home.component} />

				{process.env.NODE_ENV==='production' && <Route render={() => <Redirect to="/"/>}/>}
				
			</Switch>
		
		</BrowserRouter>
	
	)
}
