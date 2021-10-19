import React from 'react'
import './index.css'

import Values from './values'
import Features from './Features'
import AboutUs from './AboutUs'
import { Element } from 'react-scroll'

function About() {
	return (
		<Element name='about'>
			<AboutUs />
			<Values />
			<Features />
		</Element>
	)
}

export default About
