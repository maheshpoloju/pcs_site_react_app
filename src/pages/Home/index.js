import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
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
			<NavBar />
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
			<Footer />
		</>
	)
}

export default Home
