import React, { useState } from 'react'
import { Link } from 'react-scroll'
import pcsLogo from '../../assets/images/pcs-logo.png'
import './index.css'

const items = [
	{ to: 'home', title: 'home' },
	{ to: 'about', title: 'about' },
	{ to: 'clients', title: 'clients' },
	{ to: 'services', title: 'services' },
	{ to: 'bot', title: 'bot' },
	{ to: 'team', title: 'team' },
	{ to: 'careers', title: 'careers' },
	{ to: 'contact', title: 'contact' },
	{ to: 'technologies', title: 'technologies' },
]

function Navbar() {
	const [click, setClick] = useState(false)
	const [isActive, setIsActive] = useState(true)
	const [colorChange, setColorchange] = useState(false)

	const changeNavbarColor = () => {
		if (window.scrollY >= 100) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}

	window.addEventListener('scroll', changeNavbarColor)

	return (
		<header
			id='header'
			className={`header fixed-top col-12 ${colorChange ? 'colorChange' : ''}`}>
			<div
				className='
					container-fluid container-xl
					d-flex
					align-items-center
					justify-content-between
				'>
				<Link
					to='hero'
					spy={true}
					smooth={true}
					duration={100}
					hashSpy={true}
					isDynamic={true}
					className='logo d-flex align-items-center'>
					<img src={pcsLogo} alt='pcs logo' />
				</Link>

				<nav
					id='navbar'
					className={`${click ? `navbar navbar-mobile` : `navbar `}`}>
					<ul>
						{items.map((each, index) => (
							<Link
								className={`nav-link scrollto d-flex justify-content-center align-items-center`}
								exact
								to={each.to}
								activeclassname={` ${isActive ? `active` : ''}`}
								key={index}
								spy={true}
								smooth={true}
								duration={100}
								hashSpy={true}
								isDynamic={false}
								onClick={() => {
									setIsActive(isActive)
									if (click) {
										setClick(false)
									}
								}}>
								{each.title}
								<span></span>
							</Link>
						))}
					</ul>
					<i
						className={
							click
								? 'bi bi-x mobile-nav-toggle'
								: 'bi bi-list mobile-nav-toggle'
						}
						onClick={() => setClick(!click)}></i>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
