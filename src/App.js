import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Jobjd from './components/JobJd'
import { JDS } from './components/JobJdContent'
import BOT from './pages/BOT'
import ApplyForJob from './components/ApplyForJob'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BreadCrumb from './components/BreadCrumb'
// import ContactWidget from './components/ContactWidget'

function App() {
	useEffect(() => {
		window.scrollTo(0, 0)
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
							<Route path='/' exact>
								<Home />
							</Route>
							<Route path='/bot'>
								<BOT />
							</Route>
							<Route path='/contact'>
								<Contact />
							</Route>
							<Route exact path='/careers'>
								<Careers />
							</Route>
							<Route
								exact
								path='/careers/:id/'
								render={(props) => <Jobjd data={JDS} {...props} />}
							/>
							<Route
								exact
								path='/careers/:id/apply'
								render={(props) => (
									<>
										<NavBar />
										<BreadCrumb
											breadCrumbData={[
												{ title: 'Home', path: '/' },
												{ title: 'Careers', path: '/careers' },
												{ title: 'Apply' },
											]}
										/>
										<ApplyForJob data={props} />
										<Footer />
									</>
								)}
							/>

							{/* <Route exact path='/careers/java-developer/'>
								<Jobjd data={JDS[1]} />
							</Route> */}
							<Redirect to='/'></Redirect>
						</Switch>
						{/* <ContactWidget /> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
