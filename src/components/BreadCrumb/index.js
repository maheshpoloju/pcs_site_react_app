import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'
import './index.css'

const BreadCrumb = (props) => {
	return (
		<section className='col-12 breadcrumb-container '>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='text-primary'>{props.title}</h2>
						<ol className='breadcrumb mb-0 p-0'>
							<li className='breadcrumb-items'>
								<a href='index.html'>Home</a>
							</li>
							<li className='breadcrumb-items active'>
								<i class='fas fa-chevron-right'></i>
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
