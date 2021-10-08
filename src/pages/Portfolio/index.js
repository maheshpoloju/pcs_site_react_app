import React from 'react'

const Portfolio = () => {
	return (
		<>
			<section id='portfolio' className='portfolio'>
				<div className='container aos-init aos-animate' data-aos='fade-up'>
					<header className='section-header'>
						<h2>Portfolio</h2>
						<p>Check our latest work</p>
					</header>

					<div
						className='row aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='100'>
						<div className='col-lg-12 d-flex justify-content-center'>
							<ul id='portfolio-flters'>
								<li data-filter='*' className='filter-active'>
									All
								</li>
								<li data-filter='.filter-app'>App</li>
								<li data-filter='.filter-card'>Card</li>
								<li data-filter='.filter-web'>Web</li>
							</ul>
						</div>
					</div>

					<div
						className='row gy-4 portfolio-container aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='200'
						style={{ position: 'relative', height: '873px' }}>
						<div
							className='col-lg-4 col-md-6 portfolio-item filter-app'
							style={{ position: 'relative', left: '0px', top: '0px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-1.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>App 1</h4>
									<p>App</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-1.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='App 1'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-web'
							style={{ position: 'absolute', left: '380px', top: '0px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-2.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Web 3</h4>
									<p>Web</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-2.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Web 3'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-app'
							style={{ position: 'absolute', left: '760px', top: '0px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-3.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>App 2</h4>
									<p>App</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-3.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='App 2'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-card'
							style={{ position: 'absolute', left: '0px', top: '291px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-4.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Card 2</h4>
									<p>Card</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-4.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Card 2'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-web'
							style={{ position: 'absolute', left: '380px', top: '291px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-5.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Web 2</h4>
									<p>Web</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-5.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Web 2'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-app'
							style={{ position: 'absolute', left: '760px', top: '291px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-6.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>App 3</h4>
									<p>App</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-6.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='App 3'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-card'
							style={{ position: 'absolute', left: '0px', top: '582px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-7.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Card 1</h4>
									<p>Card</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-7.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Card 1'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-card'
							style={{ position: 'absolute', left: '380px', top: '582px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-8.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Card 3</h4>
									<p>Card</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-8.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Card 3'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-4 col-md-6 portfolio-item filter-web'
							style={{ position: 'absolute', left: '760px', top: '582px' }}>
							<div className='portfolio-wrap'>
								<img
									src='assets/img/portfolio/portfolio-9.jpg'
									className='img-fluid'
									alt=''
								/>
								<div className='portfolio-info'>
									<h4>Web 3</h4>
									<p>Web</p>
									<div className='portfolio-links'>
										<a
											href='assets/img/portfolio/portfolio-9.jpg'
											data-gallery='portfolioGallery'
											className='portfokio-lightbox'
											title='Web 3'>
											<i className='bi bi-plus'></i>
										</a>
										<a href='portfolio-details.html' title='More Details'>
											<i className='bi bi-link'></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id='testimonials' className='testimonials'>
				<div className='container aos-init aos-animate' data-aos='fade-up'>
					<header className='section-header'>
						<h2>Testimonials</h2>
						<p>What they are saying about us</p>
					</header>

					<div
						className='testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate'
						data-aos='fade-up'
						data-aos-delay='200'>
						<div
							className='swiper-wrapper'
							id='swiper-wrapper-bd902aac5746d420'
							aria-live='off'
							style={{
								transform: 'translate3d(-2697.33px, 0px, 0px)',
								transitionDuration: '600ms',
							}}>
							<div
								className='swiper-slide wiper-slide-duplicate'
								role='group'
								aria-label='3 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='2'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Enim nisi quem export duis labore cillum quae magna enim
										sint quorum nulla quem veniam duis minim tempor labore quem
										eram duis noster aute amet eram fore quis sint minim.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-3.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Jena Karlis</h3>
										<h4>Store Owner</h4>
									</div>
								</div>
							</div>
							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev'
								role='group'
								aria-label='4 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='3'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Fugiat enim eram quae cillum dolore dolor amet nulla culpa
										multos export minim fugiat minim velit minim dolor enim duis
										veniam ipsum anim magna sunt elit fore quem dolore labore
										illum veniam.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-4.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Matt Brandon</h3>
										<h4>Freelancer</h4>
									</div>
								</div>
							</div>
							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
								role='group'
								aria-label='5 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='4'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Quis quorum aliqua sint quem legam fore sunt eram irure
										aliqua veniam tempor noster veniam enim culpa labore duis
										sunt culpa nulla illum cillum fugiat legam esse veniam culpa
										fore nisi cillum quid.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-5.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>John Larson</h3>
										<h4>Entrepreneur</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide swiper-slide-duplicate-next'
								role='group'
								aria-label='1 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='0'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Proin iaculis purus consequat sem cure digni ssim donec
										porttitora entum suscipit rhoncus. Accusantium quam,
										ultricies eget id, aliquam eget nibh et. Maecen aliquam,
										risus at semper.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-1.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Saul Goodman</h3>
										<h4>Ceo &amp; Founder</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide'
								role='group'
								aria-label='2 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='1'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Export tempor illum tamen malis malis eram quae irure esse
										labore quem cillum quid cillum eram malis quorum velit fore
										eram velit sunt aliqua noster fugiat irure amet legam anim
										culpa.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-2.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Sara Wilsson</h3>
										<h4>Designer</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide'
								role='group'
								aria-label='3 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='2'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Enim nisi quem export duis labore cillum quae magna enim
										sint quorum nulla quem veniam duis minim tempor labore quem
										eram duis noster aute amet eram fore quis sint minim.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-3.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Jena Karlis</h3>
										<h4>Store Owner</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide swiper-slide-prev'
								role='group'
								aria-label='4 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='3'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Fugiat enim eram quae cillum dolore dolor amet nulla culpa
										multos export minim fugiat minim velit minim dolor enim duis
										veniam ipsum anim magna sunt elit fore quem dolore labore
										illum veniam.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-4.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Matt Brandon</h3>
										<h4>Freelancer</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide swiper-slide-active'
								role='group'
								aria-label='5 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='4'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Quis quorum aliqua sint quem legam fore sunt eram irure
										aliqua veniam tempor noster veniam enim culpa labore duis
										sunt culpa nulla illum cillum fugiat legam esse veniam culpa
										fore nisi cillum quid.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-5.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>John Larson</h3>
										<h4>Entrepreneur</h4>
									</div>
								</div>
							</div>

							<div
								className='swiper-slide swiper-slide-duplicate swiper-slide-next'
								role='group'
								aria-label='1 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='0'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Proin iaculis purus consequat sem cure digni ssim donec
										porttitora entum suscipit rhoncus. Accusantium quam,
										ultricies eget id, aliquam eget nibh et. Maecen aliquam,
										risus at semper.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-1.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Saul Goodman</h3>
										<h4>Ceo &amp; Founder</h4>
									</div>
								</div>
							</div>
							<div
								className='swiper-slide swiper-slide-duplicate'
								role='group'
								aria-label='2 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='1'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Export tempor illum tamen malis malis eram quae irure esse
										labore quem cillum quid cillum eram malis quorum velit fore
										eram velit sunt aliqua noster fugiat irure amet legam anim
										culpa.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-2.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Sara Wilsson</h3>
										<h4>Designer</h4>
									</div>
								</div>
							</div>
							<div
								className='swiper-slide swiper-slide-duplicate'
								role='group'
								aria-label='3 / 5'
								style={{ width: '345.333px', marginRight: '40px' }}
								data-swiper-slide-index='2'>
								<div className='testimonial-item'>
									<div className='stars'>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
										<i className='bi bi-star-fill'></i>
									</div>
									<p>
										Enim nisi quem export duis labore cillum quae magna enim
										sint quorum nulla quem veniam duis minim tempor labore quem
										eram duis noster aute amet eram fore quis sint minim.
									</p>
									<div className='profile mt-auto'>
										<img
											src='assets/img/testimonials/testimonials-3.jpg'
											className='testimonial-img'
											alt=''
										/>
										<h3>Jena Karlis</h3>
										<h4>Store Owner</h4>
									</div>
								</div>
							</div>
						</div>
						<div className='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
							<span
								className='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 1'></span>
							<span
								className='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 2'></span>
							<span
								className='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 3'></span>
							<span
								className='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 4'></span>
							<span
								className='swiper-pagination-bullet swiper-pagination-bullet-active'
								tabindex='0'
								role='button'
								aria-label='Go to slide 5'></span>
						</div>
						<span
							className='swiper-notification'
							aria-live='assertive'
							aria-atomic='true'></span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Portfolio
