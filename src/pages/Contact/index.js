// eslint-disable-next-line
import React, { useRef, useState } from 'react'

import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import ContactUs from './ContactUs'

import './index.css'

// let check = false

const Contact = () => {
	return (
		<section id='contact-us'>
			<NavBar />
			<BreadCrumb title={'Contact-us'} />
			<ContactUs />
			<Footer />
		</section>
	)
}

export default Contact
