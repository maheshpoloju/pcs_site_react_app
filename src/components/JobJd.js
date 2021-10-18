import React from 'react'
import { Route } from 'react-router'
import { NavHashLink } from 'react-router-hash-link'
import { JDS } from './JobJdContent'

// import pcsLogo from '../../assets/images/pcs-logo.png'

const Jobjd = (props) => {
	return (
		<main>
			<section className='section section-header bg-soft text-dark line-bottom-soft'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-12 text-center mb-4 mb-lg-5'>
							<h1
								style={{ fontSize: '4.5rem' }}
								className='display-2 font-weight-extreme mb-4'>
								{props.data.title}
							</h1>
							<div className='d-flex flex-column flex-lg-row justify-content-center'>
								<span
									className='h4 mb-3 mb-lg-0'
									style={{ marginRight: '1rem' }}>
									<i
										style={{ fontSize: '1.5rem', color: '#565dab' }}
										className='fas fa-map-marker-alt'></i>
									<span style={{ marginLeft: '1rem' }}>
										{props.data.location}
									</span>
								</span>{' '}
								<span
									className='ml-lg-5 mb-3 mb-lg-0 h4'
									style={{ marginRight: '1rem' }}>
									<i
										style={{ fontSize: '1.5rem', color: '#565dab' }}
										className='fas fa-user-tie'></i>
									<span style={{ marginLeft: '1rem' }}>
										{props.data.jobType}
									</span>
								</span>{' '}
								<span className='ml-lg-5 mb-3 mb-lg-0 h4'>
									<i
										style={{ fontSize: '1.5rem', color: '#565dab' }}
										className='fas fa-file-invoice-dollar '></i>
									<span style={{ marginLeft: '1rem' }}>
										{props.data.salary}
									</span>
								</span>
							</div>
						</div>
						<div className='col col-12 text-center'>
							<NavHashLink
								to='/careers/python-developer'
								style={{
									color: '#565dab',
									border: '1px solid #565dab',
									marginRight: '1rem',
									padding: '1rem 0.75rem',
									fontSize: '1rem',
									fontWeight: '700',
								}}
								className='btn animate-up-2 mr-5'>
								<i
									style={{ marginRight: '0.5rem' }}
									className='fas fa-arrow-left mr-2'></i>
								See All Jobs
							</NavHashLink>{' '}
							<NavHashLink
								// to={props.data.applyLink}
								style={{
									marginRight: '1rem',
									backgroundColor: '#565dab',
									border: 'none',
									padding: '1rem 0.75rem',
									fontSize: '1rem',
								}}
								className='btn btn-primary text-white animate-up-2'>
								<i
									style={{ marginRight: '0.5rem' }}
									className='fas fa-clipboard-list mr-2'></i>
								Apply Now
							</NavHashLink>
						</div>
					</div>
				</div>
			</section>
			{/* JD DESCRIPTION */}
			{/* <section className='section section-lg bg-soft text-dark line-bottom-soft'>
				<div className='container'>
					<div className='row justify-content-center mb-5'>
						<div className='col col-md-10'>
							<h2>Responsibilities:</h2>
							<ul className='list-unstyled mb-5'>
								{props.data.responsibilities.map((each) => (
									<li className='py-3 lead'>
										<div className='media'>
											<span className='icon icon-sm mr-3 mt-2'>
												<i className='fas fa-arrow-alt-circle-right'></i>
											</span>
											<div>{each}</div>
										</div>
									</li>
								))}
							</ul>
							<h2>Requirements:</h2>
							<ul className='list-unstyled mb-5'>
								{props.data.requirements.map((each) => (
									<li className='py-3 lead'>
										<div className='media'>
											<span className='icon icon-sm mr-3 mt-2'>
												<i className='fas fa-check-circle'></i>
											</span>
											<div>{each}</div>
										</div>
									</li>
								))}
							</ul>
							<h2>We offer great benefits too!</h2>
							<ul className='list-unstyled mb-5'>
								<li className='py-3 lead'>
									<div className='media'>
										<span className='icon icon-sm mr-3 mt-2'>
											<i className='fas fa-plus-circle'></i>
										</span>
										<div>
											Generous vacation package that increases with tenure in
											addition to sick days, personal days and your birthday off
											too!
										</div>
									</div>
								</li>
								<li className='py-3 lead'>
									<div className='media'>
										<span className='icon icon-sm mr-3 mt-2'>
											<i className='fas fa-plus-circle'></i>
										</span>
										<div>
											Strong company culture and happy work environment!
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div id='apply' className='row'>
						<div className='col'>
							<div className='card bg-primary shadow-soft text-white py-4 p-lg-5'>
								<div className='card-body p-4'>
									<div className='mb-5 mb-lg-6 text-center'>
										<h2 className='h1'>Apply for this Job</h2>
									</div>
									<form action='#'>
										<div className='row'>
											<div className='col-12 col-md-6'>
												<div className='form-group'>
													<label
														className='form-label text-muted'
														for='firstNameLabel'>
														First Name <span className='text-danger'>*</span>
													</label>
													<div className='input-group mb-4'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																<i className='fas fa-user-alt'></i>
															</span>
														</div>
														<input
															className='form-control'
															id='firstNameLabel'
															placeholder='First Name'
															type='text'
															required=''
														/>
													</div>
												</div>
											</div>
											<div className='col-12 col-md-6'>
												<div className='form-group'>
													<label
														className='form-label text-muted'
														for='lastNameLabel'>
														Last Name <span className='text-danger'>*</span>
													</label>
													<div className='input-group mb-4'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																<i className='fas fa-user-alt'></i>
															</span>
														</div>
														<input
															className='form-control'
															id='lastNameLabel'
															placeholder='Last Name'
															type='text'
															required=''
														/>
													</div>
												</div>
											</div>
											<div className='col-12 col-md-6'>
												<div className='form-group'>
													<label className='form-label text-muted' for='EmailLabel'>
														Email <span className='text-danger'>*</span>
													</label>
													<div className='input-group mb-4'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																<i className='fas fa-envelope'></i>
															</span>
														</div>
														<input
															className='form-control'
															id='EmailLabel'
															placeholder='Can we get your email?'
															type='email'
															required=''
														/>
													</div>
												</div>
											</div>
											<div className='col-12 col-md-6'>
												<div className='form-group'>
													<label
														className='form-label text-muted'
														for='portfolioLabel'>
														Portfolio <span className='text-danger'>*</span>
													</label>
													<div className='input-group mb-4'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																<i className='fas fa-link'></i>
															</span>
														</div>
														<input
															className='form-control'
															id='portfolioLabel'
															placeholder='Linkedin'
															type='text'
															required=''
														/>
													</div>
												</div>
											</div>
											<div className='col-12 col-md-6'>
												<div className='form-group'>
													<label
														className='form-label text-muted'
														for='phonenumberLabel'>
														Phone Number<span className='text-danger'>*</span>
													</label>
													<div className='input-group mb-4'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																<i className='fas fa-phone-square-alt'></i>
															</span>
														</div>
														<input
															className='form-control'
															id='phonenumberLabel'
															placeholder='Phone number'
															type='number'
															required=''
														/>
													</div>
												</div>
											</div>
											<div className='col-12 col-md-6'>
												<label className='form-label text-muted' for='customFile'>
													Resume/Cv<span className='text-danger'>*</span>
												</label>
												<div className='custom-file'>
													<input
														type='file'
														className='custom-file-input'
														id='customFile'
													/>{' '}
													<label className='custom-file-label' for='customFile'>
														Choose file
													</label>
												</div>
											</div>
											<div className='col col-12 mt-4'>
												<div className='form-group'>
													<label
														className='form-label text-muted'
														for='phonenumberLabel'>
														Few words... <span className='text-danger'>*</span>
													</label>{' '}
													<textarea
														className='form-control'
														placeholder="How'd you hear about Themesberg?"
														id='message-2'
														rows='8'
														required=''></textarea>
												</div>
												<div className='text-center'>
													<button type='submit' className='btn btn-secondary mt-4'>
														<span className='mr-2'>
															<i className='fas fa-paper-plane'></i>
														</span>{' '}
														Submit Application
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</main>
	)
}

export default Jobjd
