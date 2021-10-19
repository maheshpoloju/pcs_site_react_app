import React from 'react'
import './index.css'

const ContactWidget = () => {
	return (
		<div id='widget' className='widget-container'>
			<div
				id='form-body'
				className='body-container false height-0
			'>
				<div className='widget-body-top'>
					<div me='head-inner'>
						<i
							aria-label='icon: mail'
							className='anticon anticon-mail zendesk-red'>
							<svg
								viewBox='64 64 896 896'
								focusable='false'
								className=''
								data-icon='mail'
								width='1em'
								height='1em'
								fill='currentColor'
								aria-hidden='true'>
								<path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z'></path>
							</svg>
						</i>
						&nbsp; CONTACT US
					</div>
				</div>
				<form className='ant-form ant-form-horizontal login-form '>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label
								htmlFor='username'
								className='ant-form-item-required'
								title='What should we call you?'>
								What should we call you?
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<input
										placeholder='Enter your full name'
										type='text'
										id='username'
										data-__meta='[object Object]'
										data-__field='[object Object]'
										className='ant-input'
										value=''
									/>
								</span>
							</div>
						</div>
					</div>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label
								htmlFor='useremail'
								className='ant-form-item-required'
								title='What is your email address?'>
								What is your email address?
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<input
										type='email'
										placeholder='Enter your email ID'
										id='useremail'
										data-__meta='[object Object]'
										data-__field='[object Object]'
										className='ant-input'
										value=''
									/>
								</span>
							</div>
						</div>
					</div>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label
								htmlFor='mobileNumber'
								className='ant-form-item-required'
								title='What is your mobile number?'>
								What is your mobile number?
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<div className='ant-input phone-number PhoneInput'>
										<div className='PhoneInputCountry'>
											<select
												aria-label='Phone number country'
												className='PhoneInputCountrySelect'>
												<option value='ZZ'>International</option>
												<option value='AF'>Afghanistan</option>
												<option value='AX'>Åland Islands</option>
												<option value='AL'>Albania</option>
												<option value='DZ'>Algeria</option>
												<option value='AS'>American Samoa</option>
												<option value='AD'>Andorra</option>
												<option value='AO'>Angola</option>
												<option value='AI'>Anguilla</option>
												<option value='AG'>Antigua and Barbuda</option>
												<option value='AR'>Argentina</option>
												<option value='AM'>Armenia</option>
												<option value='AW'>Aruba</option>
												<option value='AC'>Ascension Island</option>
												<option value='AU'>Australia</option>
												<option value='AT'>Austria</option>
												<option value='AZ'>Azerbaijan</option>
												<option value='BS'>Bahamas</option>
												<option value='BH'>Bahrain</option>
												<option value='BD'>Bangladesh</option>
												<option value='BB'>Barbados</option>
												<option value='BY'>Belarus</option>
												<option value='BE'>Belgium</option>
												<option value='BZ'>Belize</option>
												<option value='BJ'>Benin</option>
												<option value='BM'>Bermuda</option>
												<option value='BT'>Bhutan</option>
												<option value='BO'>Bolivia</option>
												<option value='BQ'>
													Bonaire, Sint Eustatius and Saba
												</option>
												<option value='BA'>Bosnia and Herzegovina</option>
												<option value='BW'>Botswana</option>
												<option value='BR'>Brazil</option>
												<option value='IO'>
													British Indian Ocean Territory
												</option>
												<option value='BN'>Brunei Darussalam</option>
												<option value='BG'>Bulgaria</option>
												<option value='BF'>Burkina Faso</option>
												<option value='MM'>Burma</option>
												<option value='BI'>Burundi</option>
												<option value='KH'>Cambodia</option>
												<option value='CM'>Cameroon</option>
												<option value='CA'>Canada</option>
												<option value='CV'>Cape Verde</option>
												<option value='KY'>Cayman Islands</option>
												<option value='CF'>Central African Republic</option>
												<option value='TD'>Chad</option>
												<option value='CL'>Chile</option>
												<option value='CN'>China</option>
												<option value='CX'>Christmas Island</option>
												<option value='CC'>Cocos (Keeling) Islands</option>
												<option value='CO'>Colombia</option>
												<option value='KM'>Comoros</option>
												<option value='CG'>Congo</option>
												<option value='CD'>
													Congo, Democratic Republic of the
												</option>
												<option value='CK'>Cook Islands</option>
												<option value='CR'>Costa Rica</option>
												<option value='CI'>Cote d'Ivoire</option>
												<option value='HR'>Croatia</option>
												<option value='CU'>Cuba</option>
												<option value='CW'>Curaçao</option>
												<option value='CY'>Cyprus</option>
												<option value='CZ'>Czech Republic</option>
												<option value='DK'>Denmark</option>
												<option value='DJ'>Djibouti</option>
												<option value='DM'>Dominica</option>
												<option value='DO'>Dominican Republic</option>
												<option value='EC'>Ecuador</option>
												<option value='EG'>Egypt</option>
												<option value='SV'>El Salvador</option>
												<option value='GQ'>Equatorial Guinea</option>
												<option value='ER'>Eritrea</option>
												<option value='EE'>Estonia</option>
												<option value='ET'>Ethiopia</option>
												<option value='FK'>Falkland Islands</option>
												<option value='FO'>Faroe Islands</option>
												<option value='FM'>
													Federated States of Micronesia
												</option>
												<option value='FJ'>Fiji</option>
												<option value='FI'>Finland</option>
												<option value='FR'>France</option>
												<option value='GF'>French Guiana</option>
												<option value='PF'>French Polynesia</option>
												<option value='GA'>Gabon</option>
												<option value='GM'>Gambia</option>
												<option value='GE'>Georgia</option>
												<option value='DE'>Germany</option>
												<option value='GH'>Ghana</option>
												<option value='GI'>Gibraltar</option>
												<option value='GR'>Greece</option>
												<option value='GL'>Greenland</option>
												<option value='GD'>Grenada</option>
												<option value='GP'>Guadeloupe</option>
												<option value='GU'>Guam</option>
												<option value='GT'>Guatemala</option>
												<option value='GG'>Guernsey</option>
												<option value='GN'>Guinea</option>
												<option value='GW'>Guinea-Bissau</option>
												<option value='GY'>Guyana</option>
												<option value='HT'>Haiti</option>
												<option value='VA'>
													Holy See (Vatican City State)
												</option>
												<option value='HN'>Honduras</option>
												<option value='HK'>Hong Kong</option>
												<option value='HU'>Hungary</option>
												<option value='IS'>Iceland</option>
												<option value='IN'>India</option>
												<option value='ID'>Indonesia</option>
												<option value='IR'>Iran</option>
												<option value='IQ'>Iraq</option>
												<option value='IE'>Ireland</option>
												<option value='IM'>Isle of Man</option>
												<option value='IL'>Israel</option>
												<option value='IT'>Italy</option>
												<option value='JM'>Jamaica</option>
												<option value='JP'>Japan</option>
												<option value='JE'>Jersey</option>
												<option value='JO'>Jordan</option>
												<option value='KZ'>Kazakhstan</option>
												<option value='KE'>Kenya</option>
												<option value='KI'>Kiribati</option>
												<option value='XK'>Kosovo</option>
												<option value='KW'>Kuwait</option>
												<option value='KG'>Kyrgyzstan</option>
												<option value='LA'>Laos</option>
												<option value='LV'>Latvia</option>
												<option value='LB'>Lebanon</option>
												<option value='LS'>Lesotho</option>
												<option value='LR'>Liberia</option>
												<option value='LY'>Libya</option>
												<option value='LI'>Liechtenstein</option>
												<option value='LT'>Lithuania</option>
												<option value='LU'>Luxembourg</option>
												<option value='MO'>Macao</option>
												<option value='MG'>Madagascar</option>
												<option value='MW'>Malawi</option>
												<option value='MY'>Malaysia</option>
												<option value='MV'>Maldives</option>
												<option value='ML'>Mali</option>
												<option value='MT'>Malta</option>
												<option value='MH'>Marshall Islands</option>
												<option value='MQ'>Martinique</option>
												<option value='MR'>Mauritania</option>
												<option value='MU'>Mauritius</option>
												<option value='YT'>Mayotte</option>
												<option value='MX'>Mexico</option>
												<option value='MD'>Moldova</option>
												<option value='MC'>Monaco</option>
												<option value='MN'>Mongolia</option>
												<option value='ME'>Montenegro</option>
												<option value='MS'>Montserrat</option>
												<option value='MA'>Morocco</option>
												<option value='MZ'>Mozambique</option>
												<option value='NA'>Namibia</option>
												<option value='NR'>Nauru</option>
												<option value='NP'>Nepal</option>
												<option value='NL'>Netherlands</option>
												<option value='NC'>New Caledonia</option>
												<option value='NZ'>New Zealand</option>
												<option value='NI'>Nicaragua</option>
												<option value='NE'>Niger</option>
												<option value='NG'>Nigeria</option>
												<option value='NU'>Niue</option>
												<option value='NF'>Norfolk Island</option>
												<option value='KP'>North Korea</option>
												<option value='MK'>North Macedonia</option>
												<option value='MP'>Northern Mariana Islands</option>
												<option value='NO'>Norway</option>
												<option value='OM'>Oman</option>
												<option value='PK'>Pakistan</option>
												<option value='PW'>Palau</option>
												<option value='PS'>Palestine</option>
												<option value='PA'>Panama</option>
												<option value='PG'>Papua New Guinea</option>
												<option value='PY'>Paraguay</option>
												<option value='PE'>Peru</option>
												<option value='PH'>Philippines</option>
												<option value='PL'>Poland</option>
												<option value='PT'>Portugal</option>
												<option value='PR'>Puerto Rico</option>
												<option value='QA'>Qatar</option>
												<option value='RE'>Reunion</option>
												<option value='RO'>Romania</option>
												<option value='RU'>Russia</option>
												<option value='RW'>Rwanda</option>
												<option value='BL'>Saint Barthélemy</option>
												<option value='SH'>Saint Helena</option>
												<option value='KN'>Saint Kitts and Nevis</option>
												<option value='LC'>Saint Lucia</option>
												<option value='MF'>Saint Martin (French Part)</option>
												<option value='PM'>Saint Pierre and Miquelon</option>
												<option value='VC'>
													Saint Vincent and the Grenadines
												</option>
												<option value='WS'>Samoa</option>
												<option value='SM'>San Marino</option>
												<option value='ST'>Sao Tome and Principe</option>
												<option value='SA'>Saudi Arabia</option>
												<option value='SN'>Senegal</option>
												<option value='RS'>Serbia</option>
												<option value='SC'>Seychelles</option>
												<option value='SL'>Sierra Leone</option>
												<option value='SG'>Singapore</option>
												<option value='SX'>Sint Maarten</option>
												<option value='SK'>Slovakia</option>
												<option value='SI'>Slovenia</option>
												<option value='SB'>Solomon Islands</option>
												<option value='SO'>Somalia</option>
												<option value='ZA'>South Africa</option>
												<option value='KR'>South Korea</option>
												<option value='SS'>South Sudan</option>
												<option value='ES'>Spain</option>
												<option value='LK'>Sri Lanka</option>
												<option value='SD'>Sudan</option>
												<option value='SR'>Suriname</option>
												<option value='SJ'>Svalbard and Jan Mayen</option>
												<option value='SZ'>Swaziland</option>
												<option value='SE'>Sweden</option>
												<option value='CH'>Switzerland</option>
												<option value='SY'>Syria</option>
												<option value='TW'>Taiwan</option>
												<option value='TJ'>Tajikistan</option>
												<option value='TZ'>Tanzania</option>
												<option value='TH'>Thailand</option>
												<option value='TL'>Timor-Leste</option>
												<option value='TG'>Togo</option>
												<option value='TK'>Tokelau</option>
												<option value='TO'>Tonga</option>
												<option value='TT'>Trinidad and Tobago</option>
												<option value='TA'>Tristan da Cunha</option>
												<option value='TN'>Tunisia</option>
												<option value='TR'>Turkey</option>
												<option value='TM'>Turkmenistan</option>
												<option value='TC'>Turks and Caicos Islands</option>
												<option value='TV'>Tuvalu</option>
												<option value='UG'>Uganda</option>
												<option value='UA'>Ukraine</option>
												<option value='AE'>United Arab Emirates</option>
												<option value='GB'>United Kingdom</option>
												<option value='US'>United States</option>
												<option value='UY'>Uruguay</option>
												<option value='UZ'>Uzbekistan</option>
												<option value='VU'>Vanuatu</option>
												<option value='VE'>Venezuela</option>
												<option value='VN'>Vietnam</option>
												<option value='VG'>Virgin Islands, British</option>
												<option value='VI'>Virgin Islands, U.S.</option>
												<option value='WF'>Wallis and Futuna</option>
												<option value='EH'>Western Sahara</option>
												<option value='YE'>Yemen</option>
												<option value='ZM'>Zambia</option>
												<option value='ZW'>Zimbabwe</option>
											</select>
											<div className='PhoneInputCountryIcon'>
												<svg
													className='PhoneInputCountryIconImg'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 75 50'>
													<title>International</title>
													<g
														className='PhoneInputInternationalIconGlobe'
														stroke='currentColor'
														fill='none'
														stroke-width='2'
														stroke-miterlimit='10'>
														<path
															stroke-linecap='round'
															d='M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3'></path>
														<path d='M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3'></path>
														<line x1='26' y1='25' x2='74' y2='25'></line>
														<line x1='50' y1='1' x2='50' y2='49'></line>
														<path
															stroke-linecap='round'
															d='M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8'></path>
														<path
															stroke-linecap='round'
															d='M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2'></path>
													</g>
													<path
														className='PhoneInputInternationalIconPhone'
														stroke='none'
														fill='currentColor'
														d='M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z'></path>
												</svg>
											</div>
											<div className='PhoneInputCountrySelectArrow'></div>
										</div>
										<input
											type='tel'
											autocomplete='tel'
											placeholder='Enter phone number'
											id='mobileNumber'
											data-__meta='[object Object]'
											data-__field='[object Object]'
											className='PhoneInputInput'
											value=''
										/>
									</div>
								</span>
							</div>
						</div>
					</div>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label
								htmlFor='option'
								className='ant-form-item-required'
								title="You're reaching out to us for?">
								You're reaching out to us for?
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<div id='option' className='ant-select ant-select-enabled'>
										<div
											className='ant-select-selection
            ant-select-selection--single'
											role='combobox'
											aria-autocomplete='list'
											aria-haspopup='true'
											aria-controls='0ff13249-af73-4386-f265-b21435bbe33b'
											aria-expanded='false'
											data-__meta='[object Object]'
											data-__field='[object Object]'
											tabindex='0'>
											<div className='ant-select-selection__rendered'>
												<div
													unselectable='on'
													className='ant-select-selection__placeholder'
													style={{ display: 'block', userSelect: 'none' }}>
													Select a reason
												</div>
											</div>
											<span
												className='ant-select-arrow'
												unselectable='on'
												style={{ userSelect: 'none' }}>
												<i
													aria-label='icon: down'
													className='anticon anticon-down ant-select-arrow-icon'>
													<svg
														viewBox='64 64 896 896'
														focusable='false'
														className=''
														data-icon='down'
														width='1em'
														height='1em'
														fill='currentColor'
														aria-hidden='true'>
														<path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
													</svg>
												</i>
											</span>
										</div>
									</div>
								</span>
							</div>
						</div>
					</div>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label
								htmlFor='message'
								className='ant-form-item-required'
								title='What is your message for us?'>
								What is your message for us?
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<textarea
										rows='2'
										prefix='[object Object]'
										placeholder='Describe what help you’re looking for'
										id='message'
										data-__meta='[object Object]'
										data-__field='[object Object]'
										className='ant-input'></textarea>
								</span>
							</div>
						</div>
					</div>
					<div className='ant-row ant-form-item'>
						<div className='ant-col ant-form-item-label'>
							<label className='' title='Help us ensure you’re not a robot'>
								Help us ensure you’re not a robot
							</label>
						</div>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<div
										className='recaptcha'
										data-sitekey='6LcoWJwUAAAAAAP9my8FGDHg24SuU_MlcY_aqyRQ'
										data-theme='dark'
										data-type='image'
										data-size='normal'
										data-badge='bottomright'
										data-tabindex='0'
										render='explicit'
										hl='en'>
										<div style={{ width: '304px', height: '78px' }}>
											<div>
												<iframe
													title='reCAPTCHA'
													src='https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcoWJwUAAAAAAP9my8FGDHg24SuU_MlcY_aqyRQ&amp;co=aHR0cHM6Ly9jb2RpdGFzLmNvbTo0NDM.&amp;hl=en&amp;type=image&amp;v=qljbK_DTcvY1PzbR7IG69z1r&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=xta0howwi4lh'
													width='304'
													height='78'
													role='presentation'
													name='a-hnun8ys52tln'
													frameborder='0'
													scrolling='no'
													sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox'></iframe>
											</div>
											<textarea
												id='g-recaptcha-response'
												name='g-recaptcha-response'
												className='g-recaptcha-response'
												style={{
													width: '250px',
													height: '40px',
													border: '1px solid rgb(193, 193, 193)',
													margin: '10px 25px',
													padding: '0px',
													resize: 'none',
													display: 'none',
												}}></textarea>
										</div>
									</div>
								</span>
							</div>
						</div>
					</div>
					<div></div>
					<div className='ant-row ant-form-item submit-button'>
						<div className='ant-col ant-form-item-control-wrapper'>
							<div className='ant-form-item-control'>
								<span className='ant-form-item-children'>
									<button
										disabled=''
										type='submit'
										className='ant-btn b-dis login-form-button ant-btn-primary'>
										<span>SEND MESSAGE</span>
									</button>
								</span>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className='widget-body-red blue open'>
				<i aria-label='icon: mail' className='anticon anticon-mail zendesk-red'>
					<svg
						viewBox='64 64 896 896'
						focusable='false'
						className=''
						data-icon='mail'
						width='1em'
						height='1em'
						fill='currentColor'
						aria-hidden='true'>
						<path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z'></path>
					</svg>
				</i>
				&nbsp; CONTACT US
			</div>
		</div>
	)
}

export default ContactWidget
