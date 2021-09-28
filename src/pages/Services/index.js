import React from 'react'
import './index.css'

import {services,fullstactServices,devopsServices,mobileServices,dataEngServices,mlServices,qaServices} from "./content"

const Services = () => (
	<section id="services" className="services mt-5">
    	<div className="container" data-aos="fade-up" data-aos-delay="200">
			<div className='row'>
				<div className='col-xl-12 text-center mb-4'>
					<div className='service-title'>
						<h3 className='sections-head mt-5'>{services.heading_1}</h3>
						<h2 className='sections-title'>{services.heading_2}</h2>
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
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{fullstactServices.title}</h3>
						<ul className="services-container text-start">
						{fullstactServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
          		</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
					<div className="service-box orange">
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{devopsServices.title}</h3>
						<ul className="services-container text-start">
						{devopsServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box green">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{mobileServices.title}</h3>
						<ul className="services-container text-start">
						{mobileServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box red">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{dataEngServices.title}</h3>
						<ul className="services-container text-start">
						{dataEngServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box purple">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{mlServices.title}</h3>
						<ul className="services-container text-start">
						{mlServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box pink">
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>{qaServices.title}</h3>
						<ul className="services-container text-start">
						{qaServices.services.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>
        	</div>
      	</div>
    </section>
)
export default Services
