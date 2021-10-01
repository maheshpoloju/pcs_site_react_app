import React from 'react'
import Banner from '../../components/Banner'
import About from '../About'
import BOT from '../BOT'
// import BOT from '../BOT'
import Careers from '../Careers'
import Clients from '../Clients'
import Contact from '../Contact'
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
			<Careers />
			<Contact />
		</>
	)
}

export default Home
