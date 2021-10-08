import React from 'react'

import { NavHashLink } from 'react-router-hash-link'
import { Breadcrumb } from 'react-bootstrap'

import './index.css'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'

function Careers() {
	return (
		<section id='careers'>
			<NavBar />
			<BreadCrumb title={'careers'} />
			{/* <section className='col-12 breadcrumb-container '>
				<NavHashLink to='/'>
					<i className='fas fa-arrow-circle-left'></i>
				</NavHashLink>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<h2>Careers</h2>
					<Breadcrumb>
						<Breadcrumb.Item>
							<NavHashLink to='/'>HOME</NavHashLink>
						</Breadcrumb.Item>
						<Breadcrumb.Item active>Careers</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</section> */}
		</section>
	)
}

export default Careers
