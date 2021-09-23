import React from 'react'
import About from '../About'
import BOT from '../BOT'
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
			<div id='home'>Home</div>
			<About />
			<Clients />
			<Team />
			<Services />
			<BOT />
			<Careers />
			<Contact />
			<Technologies />
		</>
	)
}

export default Home
