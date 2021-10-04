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
        			</div>
        			<p className="services-title-description">
						{services.description}
					</p>
    			</div>
			</div>
		<div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={fullstactServices.icon} className="service-icon" alt="fullstack-icon" />
			  </div>
              <h4 class="title">{fullstactServices.title}</h4>
              <p class="description">
				{fullstactServices.description}
			  </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
		  <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={devopsServices.icon} className="service-icon" alt="devops-icon" />
			  </div>
              <h4 class="title">{devopsServices.title}</h4>
              <p class="description">
				{devopsServices.description}
			  </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
		  <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={mobileServices.icon} className="service-icon" alt="mobile-icon" />
			  </div>
              <h4 class="title">{mobileServices.title}</h4>
              <p class="description">
				{mobileServices.description}
			  </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
		  <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={dataEngServices.icon} className="service-icon" alt="dataengineer-icon" />
			  </div>
              <h4 class="title">{dataEngServices.title}</h4>
              <p class="description">
				{dataEngServices.description}
			  </p>
            </div>
          </div>
		  <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
		  <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={mlServices.icon} className="service-icon" alt="ml-icon" />
			  </div>
              <h4 class="title">{mlServices.title}</h4>
              <p class="description">
				{mlServices.description}
			  </p>
            </div>
          </div>
		  <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
		  <div class="icon-box" data-aos="fade-up">
              <div class="icon">
				  <img src={qaServices.icon} className="service-icon" alt="qa-icon" />
			  </div>
              <h4 class="title">{qaServices.title}</h4>
              <p class="description">
				{qaServices.description}
			  </p>
            </div>
          </div>
        </div>


      	</div>
    </section>
)
export default Services
