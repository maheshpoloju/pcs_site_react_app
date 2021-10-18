import React from 'react'

import responsiveWeb from '../../assets/icons/responsive.png'
import react from '../../assets/icons/react.png'
import android from '../../assets/icons/android.png'
import ui from '../../assets/icons/ui.png'
import phpCode from '../../assets/icons/php-code.png'
import ios from '../../assets/icons/ios.png'

const Features = () => {
	return (
		<section id='features' className='features'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<header className='section-header'>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>Functions</h2>
						<span className='text-center'>Functions</span>
					</div>
					<p>
						We want to be your preferred partner for your product development.
					</p>
				</header>

				<div className='row'>
					<div className='col-lg-6'>
						<img src='assets/img/features.png' className='img-fluid' alt='' />
					</div>

					<div className='col-lg-6 mt-5 mt-lg-0 d-flex'>
						<div className='row align-self-center gy-4'>
							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='200'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Competent employees</h3>
								</div>
							</div>

							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='300'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Warm customer approach</h3>
								</div>
							</div>

							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='400'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Our own recommendation system</h3>
								</div>
							</div>

							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='500'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Global connection</h3>
								</div>
							</div>

							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='600'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Track record</h3>
								</div>
							</div>

							<div
								className='col-md-6 aos-init aos-animate'
								data-aos='zoom-out'
								data-aos-delay='700'>
								<div className='feature-box d-flex align-items-center'>
									<i className='far fa-check-square'></i>
									<h3>Open to opportunities</h3>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className='row feture-tabs aos-init aos-animate'
					data-aos='fade-up'>
					<div className='col-lg-6'>
						<div className='tab-content'>
							<div className='d-flex align-items-center mb-2'>
								<i className='fas fa-check-double'></i>
								<h4>Our history</h4>
							</div>
							<p>
								Over 4+ years in product development. We have developed more
								than 15 products and provided services to more than 10
								companies.
							</p>
							<div className='d-flex align-items-center mb-2'>
								<i className='fas fa-check-double'></i>
								<h4>Our task</h4>
							</div>
							<p>
								We want to be your preferred partner for your product
								development.
							</p>
							<div className='d-flex align-items-center mb-2'>
								<i className='fas fa-check-double'></i>
								<h4>Who we are</h4>
							</div>
							<p>
								We are a team of experienced people who want to help our
								customers develop products that bring benefits and change for
								the good of society.
							</p>
						</div>
					</div>

					<div className='col-lg-6'>
						<img src='assets/img/features-2.png' className='img-fluid' alt='' />
					</div>
				</div>

				<div
					className='row feature-icons aos-init aos-animate'
					data-aos='fade-up'>
					<h3>Design & Development</h3>
					<div
						className='section-title aos-init aos-animate'
						data-aos='fade-down'>
						<h2 className='text-center'>Design & Development</h2>
						<span className='text-center'>Design & Development</span>
					</div>

					<div className='row'>
						<div
							className='col-xl-4 text-center aos-init aos-animate'
							data-aos='fade-right'
							data-aos-delay='100'>
							<img
								src='assets/img/features-3.png'
								className='img-fluid p-4'
								alt=''
							/>
						</div>

						<div className='col-xl-8 d-flex content'>
							<div className='row align-self-center gy-4'>
								<div
									className='col-md-6 icon-box aos-init aos-animate'
									data-aos='fade-up'>
									<img src={responsiveWeb} alt='responsive web' />

									<div>
										<h4> Responsive design</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>

								<div
									className='col-md-6 icon-box aos-init aos-animate '
									data-aos='fade-up'
									data-aos-delay='100'>
									<img src={react} alt='responsive web' />
									<div>
										<h4> React Web Developement</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>

								<div
									className='col-md-6 icon-box aos-init aos-animate'
									data-aos='fade-up'
									data-aos-delay='200'>
									<img src={android} alt='responsive web' />
									<div>
										<h4> Android apps development</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>

								<div
									className='col-md-6 icon-box aos-init aos-animate'
									data-aos='fade-up'
									data-aos-delay='300'>
									<img src={ui} alt='responsive web' />
									<div>
										<h4>UX/UI design</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>

								<div
									className='col-md-6 icon-box aos-init aos-animate '
									data-aos='fade-up'
									data-aos-delay='400'>
									<img src={phpCode} alt='responsive web' />
									<div>
										<h4>Laravel web development</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>

								<div
									className='col-md-6 icon-box aos-init aos-animate '
									data-aos='fade-up'
									data-aos-delay='500'>
									<img src={ios} alt='responsive web' />
									<div>
										<h4> iOS apps development</h4>
										<p>
											Consequuntur sunt aut quasi enim aliquam quae harum
											pariatur laboris nisi ut aliquip
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
