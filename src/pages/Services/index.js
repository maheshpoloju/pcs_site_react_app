import React from 'react'
import './index.css'

import {services,fullstactServices,devopsServices,mobileServices,dataEngServices,mlServices,qaServices} from "./content"

const Services = () => (
	<section id="services" className="services mt-5">
    	<div className="container" data-aos="fade-up" data-aos-delay="200">
			<div className='row'>
				<div className='col-xl-12 text-center mb-4'>
					<div className='service-title'>
						<h2 className='services-title-heading mt-5'>{services.heading_2}</h2>
						<p className='technology-sub-heading'>{services.heading_1}</p>
						<div className='small-separator'></div>
        			</div>
        			<p className="services-title-description">
						{services.description}
					</p>
    			</div>
			</div>
        	<div className="row gy-4">
          		<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
					<div className="service-box blue">
						<img src={fullstactServices.icon} className="service-icon" />
						<h3>{fullstactServices.title}</h3>
						<p className="services-description">
						{fullstactServices.description}
						</p>
					</div>
          		</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
					<div className="service-box orange">
						<img src={devopsServices.icon} className="service-icon" />
						<h3>{devopsServices.title}</h3>
						<p className="services-description">
							{devopsServices.description}
						</p>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box green">
						<img src={mobileServices.icon} className="service-icon" />
						<h3>{mobileServices.title}</h3>
						<p className="services-description">
						{mobileServices.description}
						</p>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box red">
						<img src={dataEngServices.icon} className="service-icon" />
						<h3>{dataEngServices.title}</h3>
						<p className="services-description">
						{dataEngServices.description}
						</p>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box purple">
						<img src={mlServices.icon} className="service-icon" />
						<h3>{mlServices.title}</h3>
						<p className="services-description">
							{mlServices.description}
						</p>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box pink">
						<img src={qaServices.icon} className="service-icon" />
						<h3>{qaServices.title}</h3>
						<p className="services-description">
						{qaServices.description}
						</p>
					</div>
				</div>
        	</div>
      	</div>
    </section>
)
export default Services
