import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/NavBar'
import About from '../About'
import BOT from '../BOT'
// import BOT from '../BOT'
// import Careers from '../Careers'
import Clients from '../Clients'
import Portfolio from '../Portfolio'
// import Contact from '../Contact'
import Services from '../Services'
import Team from '../Team'
import Technologies from '../Technologies'
import './index.css'

function Home() {
	return (
		<>
			<Banner />
			<About />
			<Clients />
			<Services />
			<Team />
			<BOT />
			<Technologies />
			{/* <Portfolio /> */}
			{/* <Careers /> */}
			{/* <Contact /> */}
		</>
	)
}

export default Home
