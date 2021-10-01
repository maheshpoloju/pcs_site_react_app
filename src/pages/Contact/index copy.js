// eslint-disable-next-line
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { contact } from './content'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './check.css'

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
		<div className='mt-3'>
			<section id='contact' class='contact'>
				<div class='container'>
					<header class='section-header' className='layout'>
						<p className='heading mb-4'>Contact Us</p>
					</header>

					<div class='row gy-4'>
						<div class='col-lg-6'>
							<div class='row gy-4'>
								<div class='col-md-6'>
									<div class='info-box'>
										<div className='icon'>{contact.address.icon}</div>
										<h3 className='addressheading'>{contact.addresss.title}</h3>
										{contact.addresss.addresses1.map((item, index) => (
											<>
												<p key={`address-${index}`} className='p-2'>
													{item}
												</p>
											</>
										))}
										<div className='row'>
											<div className='icon mt-2'>
												<h3 className='addressheading'>Call Here</h3>
											</div>
											<p className='usphonenumber'>+ (1) 949 981 4976</p>
										</div>
									</div>
								</div>

								<div class='col-md-6'>
									<div class='info-box'>
										<div className='icon'>{contact.address.icon}</div>
										<h3 className='addressheading'>{contact.address.title}</h3>
										{contact.address.addresses.map((item, index) => (
											<>
												<p key={`address-${index}`} className='p-2'>
													{item}
												</p>
											</>
										))}
									</div>
								</div>

								<div class='col-md-6 mt-4'>
									<div class='info-box'>
										<div className='icon'>{contact.email.icon}</div>
										<h3 className='addressheading'>Mail Here</h3>
										<p>
											<a
												href={`mailto:${contact.email.email}`}
												className='mailcolor'>
												{contact.email.email}
											</a>
										</p>
										<p>
											<a
												href={`mailto:${contact.email.email}`}
												className='mailcolor'>
												{contact.email.email2}
											</a>
										</p>
									</div>
								</div>

								<div class='col-md-6 mt-4'>
									<div class='info-box'>
										<div className='icon'>{contact.phone.icon}</div>
										<h3 className='addressheading'>Call Here</h3>
										{contact.phone.phones.map((item, index) => (
											<p key={`phone-${index}`}>{item}</p>
										))}
									</div>
								</div>
							</div>
						</div>

						<div class='col-lg-6'>
							<form onSubmit={sentEmail} class='php-email-form'>
								<div class='row gy-4'>
									<div class='col-md-6'>
										<input
											type='text'
											name='name'
											placeholder='Your Name'
											onChange={(e) => {
												setFirstName(e.target.value)
											}}
											className='w-100'
										/>
										{Object.keys(firstNameErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts'>
													{firstNameErr[key]}
												</div>
											)
										})}
									</div>

									<div class='col-md-6'>
										<PhoneInput
											placeholder='Your Number'
											type='text'
											value={mobile}
											defaultCountry='IN'
											onChange={setMobile}
											className='medium mt-4'
										/>
										<input
											type='text'
											name='number'
											placeholder='Your Number'
											value={mobile}
											onChange={(e) => {
												setMobile(e.target.value)
											}}
											className='w-100 d-none'
										/>
										{Object.keys(mobileErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts mt-1'>
													{mobileErr[key]}
												</div>
											)
										})}
									</div>

									<div class='col-md-6'>
										<input
											type='text'
											placeholder='Your Email'
											name='email'
											onChange={(e) => {
												setEmail(e.target.value)
											}}
											className='w-100'
										/>
										{Object.keys(emailErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts'>
													{emailErr[key]}
												</div>
											)
										})}
									</div>

									<div class='col-md-6'>
										<input
											type='text'
											name='address'
											placeholder='Your Address'
											onChange={(e) => {
												setLastName(e.target.value)
											}}
											className='w-100'
										/>
										<br />
										{Object.keys(lastNameErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts'>
													{lastNameErr[key]}
												</div>
											)
										})}
									</div>

									<div class='col-md-12' className='area'>
										<textarea
											name='message'
											rows='5'
											cols='60'
											placeholder='Message'
											onChange={(e) => {
												setName(e.target.value)
											}}
										/>
										{Object.keys(nameErr).map((key) => {
											return (
												<div style={{ color: 'red' }} className='fonts'>
													{nameErr[key]}
												</div>
											)
										})}
									</div>
									<div class='col-md-12 text-center'>
										<input
											type='submit'
											value='Send Message'
											className='btn btn-primary'
										/>
										{check ? window.alert('You have sent successfully!!') : ''}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
