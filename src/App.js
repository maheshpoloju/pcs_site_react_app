import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Jobjd from './components/JobJd'
import { JDS } from './components/JobJdContent.js'

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		})
		AOS.refresh()
	}, [])
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12  web-container '>
						<Switch>
							<Route path='/'>
								<Home />
							</Route>
							<Route exact path='/contact'>
								<Contact />
							</Route>
							<Route exact path='/careers'>
								<Careers />
							</Route>
							{/* <Route
								exact
								path='/careers/python-developer'
								render={(props) => <Jobjd data={JDS[0]} {...props} />}
							/> */}

							{/* <Route exact path='/careers/java-developer'>
								<Jobjd data={JDS[1]} />
							</Route> */}
							<Redirect to='/'></Redirect>
						</Switch>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
