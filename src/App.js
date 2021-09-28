import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
// import About from './pages/About'
// import Clients from './pages/Clients'
// import Services from './pages/Services'
// import BOT from './pages/BOT'
// import Careers from './pages/Careers'
// import Contact from './pages/Contact'
// import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Banner from './components/Banner'

import AOS from 'aos'
import 'aos/dist/aos.css'

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
					<div className='col-12  web-container d-flex justify-content-center align-items-center'>
						<NavBar />
						<Banner />

						{/* <ScrollToTop> */}
						<Switch>
							<Route path='/' exact>
								<Home />
							</Route>
							{/* <Route path='/about' exact>
								<About />
							</Route>
							<Route path='/clients' exact>
								<Clients />
							</Route>
							<Route path='/services' exact>
								<Services />
							</Route>
							<Route path='/bot' exact>
								<BOT />
							</Route>
							<Route path='/careers' exact>
								<Careers />
							</Route>
							<Route path='/contact' exact>
								<Contact />
							</Route> */}
						</Switch>
						{/* </ScrollToTop> */}
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
