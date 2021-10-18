import React from 'react'
import values1 from '../../assets/img/about/values-1.png'
import values2 from '../../assets/img/about/features-3.png'
import values3 from '../../assets/img/about/features-2.png'
import values4 from '../../assets/img/about/values-2.png'
import values5 from '../../assets/img/about/values5.svg'

const Values = () => {
	return (
		<section id='values' className='values'>
			<div className='container ' data-aos='fade-up'>
				<header className='section-header'>
					<div className='section-title ' data-aos='fade-down'>
						<h2 className='text-center'>Our Values</h2>
						<span className='text-center'>Our Values</span>
					</div>
					<p style={{ fontSize: '1rem' }}>
						Over 6 years in product and software development building 15+ high
						impact business solutions with faster time to marke
					</p>
				</header>

				<div className='row'>
					<div className='col-lg-4 mt-4  mb-4  '>
						<div className='box ' data-aos='fade-up' data-aos-delay='200'>
							<img src={values1} className='img-fluid' alt='' />
							<h3>Faster Time to Market </h3>
							<p>
								Go to market faster with swift rampups . Top notch talent in
								emerging and niche technology areas through direct hiring
								channels.
							</p>
						</div>
					</div>

					<div className='col-lg-4 mt-4  mb-4 '>
						<div className='box ' data-aos='fade-up' data-aos-delay='400'>
							<img src={values2} className='img-fluid' alt='' />
							<h3>Niche Technologies</h3>
							<p>
								Business centric solutions for IOT, Data Science , Mobile,
								Cloud.
							</p>
						</div>
					</div>

					<div className='col-lg-4 mt-4  mb-4 '>
						<div className='box ' data-aos='fade-up' data-aos-delay='600'>
							<img src={values3} className='img-fluid' alt='' />
							<h3>E2E Execution</h3>
							<p>Managed Services with end to end execution of projects</p>
						</div>
					</div>
					{/* <div className='col-12 d-flex justify-content-center'> */}
					<div className='col-lg-4 mt-4  mb-4 mx-auto'>
						<div className='box ' data-aos='fade-up' data-aos-delay='600'>
							<img src={values4} className='img-fluid' alt='' />
							<h3>Flexible Engagements</h3>
							<p>
								Engagement models suitable for wide variety of organizations
								requirements.
							</p>
						</div>
					</div>
					<div className='col-lg-4 mt-4 mb-4 mx-auto'>
						<div className='box ' data-aos='fade-up' data-aos-delay='600'>
							<img src={values5} className='img-fluid' alt='' />
							<h3>Right Location</h3>
							<p>
								Compliment existing teams in Europe to scale rapidly with follow
								the sun approach and cost advantage
							</p>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</section>
	)
}

export default Values
