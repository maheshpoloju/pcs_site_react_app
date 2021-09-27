import React, { useRef, useState } from "react";

import 'swiper/swiper-bundle.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Technologies(){


	return (

			<section id="technologies" class="technologies mt-5">
				<div className="container" data-aos="">
					<div className='col-xl-12 text-center mb-4'>
						<div className=''>
							<h3 className='technology-head'>what we use</h3>
							<h2 className='technology-title'>Technologies</h2>
							<div className='small-separator'></div>
						</div>
					</div>
					<h1 className="text-center mt-5">from medium devices</h1>
					<div className="row">
						<div className="d-none d-md-block tech-cont-for-sm-devices">
							<div className="tech-cont-for-sm-devices d-flex flex-row flex-wrap justify-content-center">
								<div className="technology-container-for-sm-devices">
									<i class="devicon-react-original icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										react
									</h1>
									
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-angularjs-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Angular
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-vuejs-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Vue
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-nodejs-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										NodeJs
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-python-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Python
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-java-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										java
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-mysql-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										mysql
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-bootstrap-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										bootstrap
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-git-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										git
									</h1>
									</div>
								</div>
			
								<div className="technology-container-for-sm-devices">
									<i class="devicon-bitbucket-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										bitbucket
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-amazonwebservices-original icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										aws
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-mongodb-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										mongodb
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-docker-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Docker
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-dot-net-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										.net
									</h1>
									</div>
								</div>
						
								<div className="technology-container-for-sm-devices">
									<i class="devicon-jenkins-line icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Jenkins
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-ruby-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										ruby
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-perl-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Perl
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-android-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Android
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apple-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										ios
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-swift-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										swift
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-react-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										ReactNative
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-redux-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Redux
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-oracle-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										oracle
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apache-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										apache
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apachekafka-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										kafka
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-jupyter-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										jupyter
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-tensorflow-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										tensorflow
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-d3js-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										d3
									</h1>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				{/* ------------------------ */}
					<h1 className="text-center mt-5">for small devices</h1>
					<div className="row">
						<div className="d-sm-block d-md-none tech-cont-for-sm-devices slideshow-for-small-devices">
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
							delay: 5000,
							disableOnInteraction: false
							}}
							pagination={{
							clickable: true
							}}
							navigation={true}
							className="mySwiper"
						>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">
								<div className="technology-container-for-sm-devices">
									<i class="devicon-react-original icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										react
										</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-angularjs-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Angular
										</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-vuejs-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Vue
										</h1>
									</div>
								</div>
			
								<div className="technology-container-for-sm-devices">
									<i class="devicon-nodejs-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										NodeJs
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-python-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Python
										</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">

								<div className="technology-container-for-sm-devices">
									<i class="devicon-java-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										java
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-mysql-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										mysql
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-bootstrap-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										bootstrap
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-git-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										git
									</h1>
									</div>
								</div>
			
								<div className="technology-container-for-sm-devices">
									<i class="devicon-bitbucket-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										bitbucket
									</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">

								<div className="technology-container-for-sm-devices">
									<i class="devicon-amazonwebservices-original icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										aws
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-mongodb-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										mongodb
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-docker-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Docker
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-dot-net-plain icon"></i>
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										.net
										</h1>
									</div>
								</div>
							
								<div className="technology-container-for-sm-devices">
									<i class="devicon-jenkins-line icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Jenkins
										</h1>
									</div>
								</div>
						</div>
						</SwiperSlide>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">

								<div className="technology-container-for-sm-devices">
									<i class="devicon-ruby-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										ruby
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-perl-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Perl
										</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-android-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Android
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apple-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										ios
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-swift-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										swift
									</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">

								<div className="technology-container-for-sm-devices">
									<i class="devicon-react-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										React Native
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-redux-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										Redux
									</h1>
									</div>
								</div>
		
								<div className="technology-container-for-sm-devices">
									<i class="devicon-oracle-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										oracle
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apache-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										apache
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-apachekafka-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										kafka
										</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="mb-5">
							<div className="tech-cont-for-sm-devices d-flex flex-column flex-wrap justify-content-center">

								<div className="technology-container-for-sm-devices">
									<i class="devicon-jupyter-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										jupyter
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-tensorflow-original icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										tensorflow
									</h1>
									</div>
								</div>
								<div className="technology-container-for-sm-devices">
									<i class="devicon-d3js-plain icon"></i>
				
									<div className="d-flex">
										<h1 className="technology-name name-for-sm-devices">
										d3
									</h1>
									</div>
								</div>
						</div>
						</SwiperSlide>
					</Swiper>
				</div>
		</div>



				</div>
			</section>
		 
	);
}
export default Technologies