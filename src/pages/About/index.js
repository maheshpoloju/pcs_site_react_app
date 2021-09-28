import React from 'react'
import './index.css'
import aboutImage from '../../assets/images/about/about.jpg'
import CountUp from 'react-countup';
import { about, counts, weBuild } from './content';
function About() {
	return <>
		<div id='about' className="about d-flex flex-column">
			<div className="container" data-aos="zoom-in">
				<div className="row gx-0 " >
					<div className="col-lg-6 d-flex flex-column justify-content-center " >
						<div className="content">
							<h3>{about.title}</h3>
							<p>{about.desc1}</p>
							<p>{about.desc2}</p>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center" >
						<img src={aboutImage} className="about-image img-fluid" alt="" />
					</div>
				</div>
			</div>

			{/* we build section */}
			<div id="weBuild" className="we-build">
				<h4 >{weBuild.title}</h4>
				<div className='small-separator'></div>
				<div className="grids">
					<div className="grid" data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000">
						<h6><i class="fas fa-mobile-alt fa-2x"></i><span>{weBuild.desc1}</span></h6>
					</div>
					
					<div className="grid" data-aos="flip-up"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000">
						<h6><i className="fa fa-users fa-2x"></i><span>{weBuild.desc2}</span></h6>
					</div>

					<div className="grid" data-aos="flip-right"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000">
						<h6><i className="fa fa-laptop fa-2x"></i><span>{weBuild.desc3}</span></h6>
					</div>
				</div>
			</div>

			{/* count section */}

			<div id="counts" className="counts" data-aos="fade-up" data-aos-duration="2000">
				<h4 >{counts.title}</h4>
				<div className="container" >
					<div className="row gy-4">
						<div className="col-lg-4 col-md-6" >
							<div className="count-box d-flex justify-content-center">
								<i className="far fa-smile-beam"></i>
								<div>
									<div className='d-flex'>
										<CountUp duration={3} end={5} /><span>+</span>
									</div>
									<p>{counts.desc1}</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="count-box d-flex justify-content-center">
								<i className="fas fa-user-friends"></i>
								<div>
									<div className='d-flex'>
										<CountUp duration={3} end={20} /><span>+</span>
									</div>
									<p>{counts.desc2}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="count-box d-flex justify-content-center">
								<i class="fas fa-user-tie"></i>
								<div>
									<div className='d-flex'>
										<CountUp duration={3} end={15} /><span>+</span>
									</div>
									<p>{counts.desc3}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</>
}

export default About
