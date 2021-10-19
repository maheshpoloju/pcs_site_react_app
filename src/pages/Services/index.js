import React from 'react'
// import './index.css'

import {
	// services,
	fullstactServices,
	devopsServices,
	mobileServices,
	dataEngServices,
	mlServices,
	qaServices,
} from './content'

const Services = () => (
	<>
		<section id='services' className='services'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<header className='section-header'>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>Services</h2>
						<span className='text-center'>Services</span>
					</div>
					<p>Veritatis et dolores facere numquam et praesentium</p>
				</header>

				<div className='row gy-4'>
					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='200'>
						<div className='service-box blue'>
							{/* <i className='ri-discuss-line icon'></i>
							 */}
							<img
								src={fullstactServices.icon}
								width='100'
								alt={fullstactServices.title}
								className='mb-2 icon'
							/>
							<h3>{fullstactServices.title}</h3>
							<h5>{fullstactServices.description}</h5>
						</div>
					</div>

					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='200'>
						<div className='service-box orange'>
							{/* <i className='ri-discuss-line icon'></i>
							 */}
							<img
								src={devopsServices.icon}
								width='100'
								alt={devopsServices.title}
								className='mb-2 icon'
							/>
							<h3>{devopsServices.title}</h3>
							<h5>{devopsServices.description}</h5>
						</div>
					</div>

					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='400'>
						<div className='service-box green'>
							<img
								src={mobileServices.icon}
								width='100'
								alt={mobileServices.title}
								className='mb-2 icon'
							/>
							<h3>{mobileServices.title}</h3>
							<h5>{mobileServices.description}</h5>
						</div>
					</div>

					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='500'>
						<div className='service-box red'>
							<img
								src={dataEngServices.icon}
								width='100'
								alt={dataEngServices.title}
								className='mb-2 icon'
							/>
							<h3>{dataEngServices.title}</h3>
							<h5>{dataEngServices.description}</h5>
						</div>
					</div>

					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='600'>
						<div className='service-box purple'>
							<img
								src={mlServices.icon}
								width='100'
								alt={mlServices.title}
								className='mb-2 icon'
							/>
							<h3>{mlServices.title}</h3>
							<h5>{mlServices.description}</h5>
						</div>
					</div>

					<div
						className='col-lg-4 col-md-6 aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='700'>
						<div className='service-box pink'>
							<img
								src={qaServices.icon}
								width='100'
								alt={qaServices.title}
								className='mb-2 icon'
							/>
							<h3>{qaServices.title}</h3>
							<h5>{qaServices.description}</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
)
export default Services
