import React from 'react'
import { Link } from 'react-scroll'
import { footer } from './content'
import './index.css'

function Footer() {
	const year = new Date().getFullYear()
	console.log(year)
	return (
		<footer id='footer'>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-md-6 footer-contact'>
							<h4
							// style={{
							// 	color: '#77be45',
							// 	fontWeight: 'bolder',
							// 	fontSize: '2rem',
							// }}
							>
								PCS IT Solutions Pvt. Ltd.
							</h4>
							<h5
							// style={{
							// 	color: '#77be45',
							// 	fontWeight: 'bolder',
							// 	fontSize: '1rem',
							// }}
							>
								<strong className='mb-4'>Aspire. Create. Understand</strong>
							</h5>
							<div className='d-flex p-2'>
								<i class='fas fa-map-marker-alt m-2'></i>
								<p>
									Perfect and Complete Solutions Inc, <br />
									704 Lundy Way,
									<br />
									Pacifica, CA,
									<br />
									94044
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex align-items-center'>
								<i class='far fa-envelope p-2'></i>
								<strong>anu@pcsitspl.com</strong>
							</div>
							<br />
							<div className='d-flex align-items-center'>
								<i class='fas fa-mobile-alt p-2'></i>
								<strong>+ (1) 949 981 4976</strong>
							</div>

							<h4 className='mt-4'>Our Social Networks</h4>
							<div className='social-links mt-3'>
								<a href='#' className='twitter'>
									<i class='fab fa-twitter'></i>
								</a>
								<a href='#' className='facebook'>
									<i class='fab fa-facebook-f'></i>
								</a>
								<a href='#' className='instagram'>
									<i class='fab fa-instagram'></i>
								</a>
								<a href='#' className='google-plus'>
									<i class='fab fa-skype'></i>
								</a>
								<a href='#' className='linkedin'>
									<i class='fab fa-linkedin-in'></i>
								</a>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 footer-links'>
							<h4>QUICK LINKS</h4>
							<ul className='col-6'>
								{/* <li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='#hero'>Home</Link>
								</li> */}
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='about'>About us</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='clients'>Clients</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='services'>Services</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='team'>Team</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='bot'>Bot</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='technologies'>Technologies</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='careers'>Careers</Link>
								</li>
								<li className='col-6'>
									<i class='fas fa-angle-double-right'></i>
									<Link to='contact'>Contact</Link>
								</li>
							</ul>
						</div>

						<div className='col-lg-4 col-md-6 footer-links'>
							<h4>Address India</h4>
							<div className='d-flex'>
								<i class='fas fa-map-marker-alt'></i>
								<p>
									PCS IT Solutions Pvt Ltd, <br />
									2nd Floor, Godrej Millennium,
									<br />
									9, Koregaon Park Road,
									<br />
									Pune - 411001
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex '>
								<i class='fas fa-map-marker-alt'></i>
								<p>
									PCS IT Solutions Pvt Ltd,
									<br />
									6th Floor, Pentagon P2,
									<br />
									Magarpatta City,
									<br />
									Pune - 411013
									<br />
									<br />
								</p>
							</div>
							<div className='d-flex align-items-center'>
								<i class='far fa-envelope'></i>
								<strong>anu@pcsitspl.com</strong>
							</div>
							<br />
							<div className='d-flex align-items-center'>
								<i class='fas fa-mobile-alt'></i>
								<strong>+ (1) 949 981 4976</strong>
							</div>

							<br />
						</div>
					</div>
					<div className='row'>
						<hr />
						<div className='col-12 copyright'>{footer.copyright}</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
