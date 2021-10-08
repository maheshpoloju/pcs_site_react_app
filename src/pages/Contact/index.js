// eslint-disable-next-line
import React, { useRef, useState } from 'react'
import ContactUs from './ContactUs'

import './index.css'

// let check = false

const Contact = () => {
	return (
		<>
			{/* <div className='col-12 breadcrumb-container '>
				<i class='fas fa-arrow-circle-left'></i>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<h2>Contact-Us</h2>
					<Breadcrumb>
						<Breadcrumb.Item>
							<NavHashLink to='/'>HOME</NavHashLink>
						</Breadcrumb.Item>
						<Breadcrumb.Item active>Contact-Us</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</div> */}
			<ContactUs />
		</>
	)
}

export default Contact
