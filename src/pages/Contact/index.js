// eslint-disable-next-line
import React, { useRef, useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import ContactUs from './ContactUs'

import './index.css'

// let check = false

const Contact = () => {
	return (
		<section id='contact-us'>
			<NavBar />

			<section className='col-12 breadcrumb-container '>
				<NavHashLink to='/'>
					<i className='fas fa-arrow-circle-left'></i>
				</NavHashLink>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<h2>Contact-Us</h2>
					<Breadcrumb>
						<Breadcrumb.Item>
							<NavHashLink to='/'>HOME</NavHashLink>
						</Breadcrumb.Item>
						<Breadcrumb.Item active>Contact-Us</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</section>
			{/* <div style={{ color: 'red' }}>Contact</div> */}
			<ContactUs />
			<Footer />
		</section>
	)
}

export default Contact
