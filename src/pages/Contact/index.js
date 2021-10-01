// eslint-disable-next-line
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
// import { contact } from './content'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import './index.css'

// let check = false

const Contact = () => {
	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [lastName, setLastName] = useState('')
	const [name, setName] = useState('')

	const [mobileErr, setMobileErr] = useState({})

	const formValidation = () => {
		const mobileErr = {}
		let isValid = true
		let phoneNumberValidation =
			isPossiblePhoneNumber(mobile) !== true &&
			isValidPhoneNumber(mobile) === false

		if (phoneNumberValidation) {
			mobileErr.mobileShort = '* Please enter valid number'
			isValid = false
		}

		setMobileErr(mobileErr)

		return isValid
	}

	function sentEmail(e) {
		e.preventDefault()
		const isValid = formValidation()

		if (isValid) {
			emailjs
				.sendForm(
					'service_iybbixf',
					'template_od5vhlh',
					e.target,
					'user_1ZQjtCiBoh1HFfh3WfmyD'
				)
				.then((res) => {
					setFirstName('')
					setEmail('')
					setMobile('')
					setLastName('')
					setName('')
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<section id='contact' className='contact'>
			<div className='container aos-init aos-animate' data-aos='fade-up'>
				<div className='section-title'>
					<h2>Contact</h2>
					<h3>
						<span>Contact Us</span>
					</h3>
				</div>

				<div
					className='row aos-init aos-animate'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='col-lg-12 '>
						<iframe
							title='This is a unique title'
							className='mb-4 mb-lg-0'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.378171967709!2d73.92341131440718!3d18.511805074274783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f2bf66ef03%3A0x465c38ee790d278b!2sPCS%20It%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1633119288768!5m2!1sen!2sin'
							frameBorder='0'
							style={{ border: '0', width: '100%', height: '384px' }}
							allowFullScreen=''></iframe>
					</div>
				</div>

				<div
					className='row aos-init aos-animate'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='col-12 col-lg-6 d-flex flex-wrap'>
						<div className='col-12 col-lg-12'>
							<div className='info-box mb-4 text-left'>
								<i className='fas fa-map-marker-alt'></i>
								<h3>Our Address</h3>
								<p>Perfect and Complete Solutions Inc,</p>
								<p>704 Lundy Way,</p>
								<p>Pacifica, CA, </p>
								<p>94044</p>
							</div>
						</div>
						<div className='col-12 col-lg-12 d-flex '>
							<div
								className='info-box flex-grow-1  mb-4'
								style={{ marginRight: '1rem' }}>
								<i className='far fa-envelope'></i>
								<h3 className='text-left'>Email Us</h3>
								<p className='mr-auto'>anu@pcsitspl.com</p>
								<p className='text-left'>anu@pcsitspl.com</p>
							</div>

							<div className='info-box flex-grow-1  mb-4'>
								<i className='fas fa-mobile-alt'></i>
								<h3>Call Us</h3>
								<p>+ (1) 949 981 4976</p>
								<p>+ (1) 949 981 4976</p>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<form onSubmit={sentEmail} className='php-email-form'>
							<div className='row'>
								<div className='col form-group'>
									<input
										type='text'
										name='name'
										className='form-control'
										id='name'
										value={firstName}
										placeholder='Your Name'
										required
										onChange={(e) => {
											setFirstName(e.target.value)
										}}
									/>
								</div>
								<div className='form-group'>
									<div className='col-md-12 '>
										<PhoneInput
											className='input form-control d-flex'
											defaultCountry='IN'
											name='phone'
											placeholder='Your Number'
											value={mobile}
											onChange={setMobile}
										/>
										{Object.keys(mobileErr).map((key, index) => {
											return (
												<div
													key={index}
													style={{ color: 'red' }}
													className='fonts mt-1'>
													{mobileErr[key]}
												</div>
											)
										})}
									</div>
								</div>
								<div className='col form-group'>
									<input
										type='email'
										className='form-control'
										name='email'
										id='email'
										value={email}
										placeholder='Your Email'
										required
										onChange={(e) => {
											setEmail(e.target.value)
										}}
									/>
								</div>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									name='address'
									id='address'
									placeholder='Your Address'
									value={lastName}
									required
									onChange={(e) => {
										setLastName(e.target.value)
									}}
								/>
							</div>
							<div className='form-group'>
								<textarea
									className='form-control'
									name='message'
									rows='3'
									placeholder='Message'
									required
									value={name}
									onChange={(e) => {
										setName(e.target.value)
									}}></textarea>
							</div>
							<div className='my-3'>
								<div className='loading'>Loading</div>
								<div className='error-message'></div>
								<div className='sent-message'>
									Your message has been sent. Thank you!
								</div>
							</div>
							<div className='text-center'>
								<button type='submit'>Send Message</button>
							</div>

							{/* {check ? window.alert('You have sent successfully!!') : ''} */}
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
