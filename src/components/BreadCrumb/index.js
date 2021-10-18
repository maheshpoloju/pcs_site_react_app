import React from 'react'

import { NavHashLink } from 'react-router-hash-link'
import './index.css'

const BreadCrumb = (props) => {
	return (
		<section className='col-12 breadcrumb-container '>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='text-primary mb-3'>
							<NavHashLink to='/'>
								<span>
									<i className='fas fa-chevron-circle-left'></i>
								</span>
							</NavHashLink>{' '}
							{props.title}
						</h2>
						<ol className='breadcrumb mb-0 p-0'>
							<li className='breadcrumb-items'>
								<NavHashLink to='/'>Home</NavHashLink>
							</li>
							<li className='breadcrumb-items active'>
								<i className='fas fa-chevron-right'></i>
								<span>{props.title}</span>
							</li>
						</ol>
					</div>
				</div>
			</div>

			{/* <NavHashLink to='/'>
				<i className='fas fa-arrow-circle-left'></i>
			</NavHashLink>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h2>{props.title}</h2>
				<Breadcrumb>
					<Breadcrumb.Item>
						<NavHashLink to='/'>HOME</NavHashLink>
					</Breadcrumb.Item>
					<Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
				</Breadcrumb>
			</div> */}
		</section>
	)
}

export default BreadCrumb
