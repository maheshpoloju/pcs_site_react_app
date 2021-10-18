import React from 'react'
import Jobitem from './JobItem'

const jobsList = [
	{
		jobTitle: 'Python',
		jobBriefDescription:
			'Write and execute test plans, design and develop test tools, debug and report code bugs and push quality upstream',
		JobLocation: 'Pune',
		JobType: 'Full-Time',
	},
	{
		jobTitle: 'Java Developer',
		jobBriefDescription:
			'We are looking for an experienced Java Developer who will work closely with the technical lead to identify and establish best practices in the company.',
		JobLocation: 'Pune',
		JobType: 'Full-Time',
	},
]

const Jobs = (props) => {
	return (
		<section className='section section-lg bg-soft'>
			<div className='container'>
				<div className='row justify-content-center mb-4 mb-lg-6'>
					<div className='col col-md-8 text-center'>
						<h2 className='display-2 mb-3'>Open Positions</h2>
						<p className='lead'>
							We are always looking for creative, talented self-starters to join
							the Front family. Check out our open positions and fill out an
							application.
						</p>
					</div>
				</div>
				<div className='row mb-6'>
					{jobsList.map((each, index) => (
						<div className='col-12 mb-4' key={index}>
							<div className='card bg-primary border-0 text-white'>
								<div className='card-body p-4 p-lg-5'>
									<Jobitem jd={each} />
								</div>
							</div>
						</div>
					))}{' '}
				</div>
				{/* {jobsList.map((each, index) => (
					<div className='row mb-6' key={index}>
						<div className='col-12 mb-4'>
							<div className='card bg-primary border-0 text-white'>
								<div className='card-body p-4 p-lg-5'>
									<Jobs />
								</div>
							</div>
						</div>
					</div>
				))} */}
			</div>
		</section>
	)
}

export default Jobs
