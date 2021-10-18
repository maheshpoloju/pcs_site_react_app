import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import JobJdNew from '../../components/JobJdNew'
import Jobjd from '../../components/JobJd'
import { JDS } from '../../components/JobJdContent'

import CareerPage from './CareerPage'
import Careers from '.'
import { contact } from '../Contact/content'
import Contact from '../Contact'

const Jobitem = (props) => {
	const { path, url } = useRouteMatch()
	console.log(`${path}`)
	return (
		<>
			<div className='row'>
				<div className='col-12 col-md-6 mb-4 mb-lg-0'>
					<h3 style={{ color: '#fff' }} className='mb-3'>
						{props.jd.jobTitle}
					</h3>
					<p style={{ color: '#fff' }} className='mb-4'>
						{props.jd.jobBriefDescription}
					</p>
					<div className='d-flex'>
						<div className='stretched-link' style={{ marginRight: '1rem' }}>
							<i
								style={{ color: '#fff', marginRight: '5px' }}
								className='fas fa-map-marker-alt'></i>
							<span style={{ color: '#fff' }} className='h6 text-sm mr-2'>
								{props.jd.JobLocation}
							</span>
						</div>
						<span className='mr-4'>
							<i style={{ marginRight: '5px' }} className='fas fa-user-tie'></i>
							<span style={{ marginRight: '5px' }} className='h6 text-sm mr-2'>
								{props.jd.JobType}
							</span>
						</span>
					</div>
				</div>
				<div className='col-12 col-md-6 d-flex align-items-center justify-content-md-end'>
					<Link
						to='/careers/python-developer/apply'
						className='btn btn-secondary mr-3 animate-up-2'
						style={{ marginRight: '1rem' }}>
						Apply
					</Link>
					<Link
						to={`${url}/python`}
						className='btn btn-white text-primary animate-up-2 m-0'>
						<i className='fas fa-clipboard-list mr-2'></i>
						See Details
					</Link>
				</div>
			</div>
			<Switch>
				<Route
					path={`${path}/python`}
					// component={() => <Jobjd data={JDS[0]} />}
					component={<Jobjd />}
				/>
			</Switch>
		</>
	)
}

export default Jobitem
