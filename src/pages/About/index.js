import React from 'react'
import './index.css'

import Values from './values'
import Features from './Features'
import AboutUs from './AboutUs'
import TeamEvents from './TeamEvents'

function About() {
	return (
		<>
			<AboutUs />
			<TeamEvents />
			<Values />
			<Features />
		</>
	)
}

export default About
