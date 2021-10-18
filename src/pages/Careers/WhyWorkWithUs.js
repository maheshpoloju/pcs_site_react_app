import React from 'react'
import skilled from '../../assets/icons/skilled.png'

import communication from '../../assets/icons/communication.png'
import search from '../../assets/icons/search.png'
import connect from '../../assets/icons/connect.png'
import Jobs from './Jobs'
import wearehiring from '../../assets/images/we-are-hiring.png'
const Whyworkwithus = () => {
	return (
		<section className='why-work-with-us'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 mb-4 mb-lg-0'>
						<div className='embed-responsive embed-responsive-16by9'>
							<img src={wearehiring} alt='' />
							{/* <iframe
								title='why join us'
								height='370'
								src='https://www.youtube.com/embed/n_Cn8eFo7u8'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen=''></iframe> */}
						</div>
					</div>
					<div className='col-lg-6 align-self-center'>
						<div className='section-heading'>
							<h2 className='title'>
								<span>Join our team</span>
							</h2>
							<p>
								We are a team of strategic thinkers and storytellers who create
								content that cuts through the noise. We’re here to produce work
								that makes an impact.{' '}
							</p>
						</div>
						<ul className='mb-0 list-style p-0'>
							<li>
								<i className='fas fa-angle-right mr-3 text-primary'></i>
								Commitment is something that comes from understanding that!
							</li>
							<li>
								<i className='fas fa-angle-right mr-3 text-primary'></i>his is
								important because nobody wants to put significant.
							</li>
							<li>
								<i className='fas fa-angle-right mr-3 text-primary'></i>Effort
								into something, only to find.{' '}
							</li>
						</ul>
					</div>
				</div>
				<section className='space-pb'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-heading center  text-center'>
									<h2 className='title'>
										<span>
											Here are just a some of the reasons you will love it here.
										</span>
									</h2>
									<p>
										If success is a process with a number of defined steps, then
										it is just like any other process. So, what is the first
										step in any process?
									</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
								<div className='border mb-4 mb-lg-0 p-3 pb-4 h-100'>
									<div className='feature-info-icon mb-5'>
										<img
											src={skilled}
											alt='skilled'
											className='flaticon-selection-process text-primary fa-4x'
										/>
									</div>
									<div className='feature-info-content'>
										<h5 className='text-black mb-3'>Best skilled characters</h5>
										<p className='mb-0'>
											Remind yourself the only thing stopping you is yourself.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
								<div className='border mb-4 mb-lg-0 p-3 pb-4 h-100'>
									<div className='feature-info-icon mb-5'>
										<img
											src={communication}
											alt='skilled'
											className='flaticon-selection-process text-primary fa-4x'
										/>
									</div>
									<div className='feature-info-content'>
										<h5 className='text-black mb-3'>Transparency</h5>
										<p className='mb-0'>
											No barriers. We work closely with our partners to create
											projects of value. When issues arise, we address it
											together and talk freely over anything and everything.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
								<div className='border mb-4 mb-md-0 p-3 pb-4 h-100'>
									<div className='feature-info-icon mb-5'>
										<img
											src={search}
											alt='skilled'
											className='flaticon-selection-process text-primary fa-4x'
										/>
									</div>
									<div className='feature-info-content'>
										<h5 className='text-black mb-3'>Credibility</h5>
										<p className='mb-0'>
											Walking the talk and talking the walk. We respect the
											trust our partners place in us and take the responsibility
											of meeting the impression created in their minds.
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='border p-3 pb-4 h-100'>
									<div className='feature-info-icon mb-5'>
										<img
											src={connect}
											alt='skilled'
											className='flaticon-selection-process text-primary fa-4x'
										/>
									</div>
									<div className='feature-info-content'>
										<h5 className='text-black'>Authenticity</h5>
										<p className='mb-0'>
											We pour our soul into everything we do and take pride of
											ourselves and visions. That’s why we create things in our
											own way and add unexpected twists.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* add resume section */}

				<Jobs />
				<div className='tr-cta'>
					<div className='container'>
						<div className='cta-content section'>
							<div className='cta-info'>
								<div className='pull-left'>
									<h1>Add your resume and let your next job find you.</h1>
								</div>
								<a href='google' className='btn btn-primary pull-right'>
									Add Your Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Whyworkwithus
