import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/app/index'
import Admin from './components/admin/index'
import List from './components/list/index'
import Genre from './components/genre/index'
import Release from './components/release/index'
import Home from './components/home/index'
import NotFound from './components/not-found/index'
import Login from './containers/login'

export const routes = (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
			<Route path='/genre/:genre' component={Genre}>
				<Route path='/genre/:genre/:release' component={Release} />
			</Route>
			<Route path='/list' component={List} />
		</Route>
		<Route path='*' component={NotFound} />
	</div>
)