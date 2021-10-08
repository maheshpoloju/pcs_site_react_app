import React from 'react'

import { NavHashLink } from 'react-router-hash-link'
import { Breadcrumb } from 'react-bootstrap'

import './index.css'

function Careers() {
	return (
		// <section
		// 	className='careers'
		// 	id='careers'
		// 	style={{ animationDuration: '500ms' }}>
		<section id='careers' className='careers' style={{ width: '100vw' }}>
			<div className='col-12 breadcrumb-container d-flex flex-column justify-content-center align-items-center'>
				<h2>Careers</h2>
				<Breadcrumb>
					<Breadcrumb.Item>
						<NavHashLink to='/'>HOME</NavHashLink>
					</Breadcrumb.Item>
					<Breadcrumb.Item active>Careers</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			{/* <div className='container'>
				<div className='row'>
					<div className='col-12 breadcrumb-container d-flex flex-column justify-content-center align-items-center'>
						
					</div>
				</div>
			</div> */}
		</section>
	)
}

export default Careers
