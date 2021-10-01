// eslint-disable-next-line
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { contact } from './content'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import './index.css'

let check = false
var validator = require('email-validator')

const Contact = () => {
	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [lastName, setLastName] = useState('')
	const [Name, setName] = useState('')

	const [firstNameErr, setFirstNameErr] = useState({})
	const [emailErr, setEmailErr] = useState({})
	const [mobileErr, setMobileErr] = useState({})
	const [lastNameErr, setLastNameErr] = useState({})
	const [nameErr, setNameErr] = useState({})

	const formValidation = () => {
		const firstNameErr = {}
		const emailErr = {}
		const mobileErr = {}
		const lastNameErr = {}
		const nameErr = {}

		let isValid = true
		let phoneNumberValidation = isPossiblePhoneNumber(mobile) !== true

		if (firstName.trim().length < 1) {
			firstNameErr.firstNameShort = 'Please enter your name'
			isValid = false
		}

		if (validator.validate(email) !== true) {
			emailErr.emailShort = 'Please enter valid email'
			isValid = false
		}

		if (phoneNumberValidation) {
			mobileErr.mobileShort = 'Please enter valid number'
			isValid = false
		}

		if (lastName.trim().length < 3) {
			lastNameErr.lastNameShort = 'Please enter your address'
			isValid = false
		}

		if (Name.trim().length < 3) {
			nameErr.nameShort = 'Please enter your query'
			isValid = false
		}

		setFirstNameErr(firstNameErr)
		setEmailErr(emailErr)
		setMobileErr(mobileErr)
		setLastNameErr(lastNameErr)
		setNameErr(nameErr)

		return isValid
	}

	function sentEmail(e) {
		e.preventDefault()
		const isValid = formValidation()
		check = isValid

		if (isValid) {
			emailjs
				.sendForm(
					'service_iybbixf',
					'template_od5vhlh',
					e.target,
					'user_1ZQjtCiBoh1HFfh3WfmyD'
				)
				.then((res) => {
					console.log(res)
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
					<p>
						Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
						adipisci expedita at voluptas atque vitae autem.
					</p>
				</div>

				<div
					className='row aos-init aos-animate'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='col-lg-6'>
						<div className='info-box mb-4'>
							<i class='fas fa-map-marker-alt'></i>
							<h3>Our Address</h3>
							<p>A108 Adam Street, New York, NY 535022</p>
						</div>
					</div>

					<div className='col-lg-3 col-md-6'>
						<div className='info-box  mb-4'>
							<i class='far fa-envelope'></i>
							<h3>Email Us</h3>
							<p>contact@example.com</p>
						</div>
					</div>

					<div className='col-lg-3 col-md-6'>
						<div className='info-box  mb-4'>
							<i class='fas fa-mobile-alt'></i>
							<h3>Call Us</h3>
							<p>+1 5589 55488 55</p>
						</div>
					</div>
				</div>

				<div
					className='row aos-init aos-animate'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='col-lg-6 '>
						<iframe
							title='This is a unique title'
							className='mb-4 mb-lg-0'
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
							frameborder='0'
							style={{ border: '0', width: '100%', height: '384px' }}
							allowfullscreen=''></iframe>
					</div>

					<div className='col-lg-6'>
						<form className='php-email-form'>
							<div className='row'>
								<div className='col form-group'>
									<input
										type='text'
										name='name'
										className='form-control'
										id='name'
										placeholder='Your Name'
										required=''
										onChange={(e) => {
											setFirstName(e.target.value)
										}}
									/>
									{Object.keys(firstNameErr).map((key) => {
										return (
											<div style={{ color: 'red' }} className='fonts'>
												{firstNameErr[key]}
											</div>
										)
									})}
								</div>
								<div className='form-group'>
									<div className='col-md-6'>
										<label>Phone Number</label>
										<PhoneInput
											className='input'
											name='phone'
											value={mobile}
											onChange={(e) => {
												setMobile(e.target.value)
											}}
										/>
										{Object.keys(mobileErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts mt-1'>
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
										placeholder='Your Email'
										required=''
										onChange={(e) => {
											setEmail(e.target.value)
										}}
									/>
									{Object.keys(emailErr).map((key) => {
										return (
											<div style={{ color: 'red' }} className='fonts'>
												{emailErr[key]}
											</div>
										)
									})}
								</div>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									name='address'
									id='address'
									placeholder='Your Address'
									required=''
									onChange={(e) => {
										setLastName(e.target.value)
									}}
								/>
								{Object.keys(lastNameErr).map((key) => {
									return (
										<div style={{ color: 'red' }} className='fonts'>
											{lastNameErr[key]}
										</div>
									)
								})}
							</div>

							<div className='form-group'>
								<textarea
									className='form-control'
									name='message'
									rows='5'
									placeholder='Message'
									required=''
									onChange={(e) => {
										setName(e.target.value)
									}}></textarea>
								{Object.keys(nameErr).map((key) => {
									return (
										<div style={{ color: 'red' }} className='fonts'>
											{nameErr[key]}
										</div>
									)
								})}
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
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
