import React, { useEffect, useState } from 'react'
// import { Link } from 'react-scroll'
// import { Link } from 'react-scroll'
import pcsLogo from '../../assets/images/pcs-logo.png'
import './index.css'
import { NavHashLink as Link } from 'react-router-hash-link'

import { items } from './content'

function NavBar() {
	const [click, setClick] = useState(false)
	const [isActive, setIsActive] = useState(true)
	const [changeNavbar, setChangeNavbar] = useState(false)

	useEffect(() => {
		changeNavbarColor()
		return () => {
			setChangeNavbar(false)
		}
	}, [])

	const changeNavbarColor = () => {
		if (window.scrollY >= 100) {
			setChangeNavbar(true)
		} else {
			setChangeNavbar(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)

	return (
		<header
			id='header'
			className={`header fixed-top col-12 ${
				changeNavbar ? 'navbar-white' : ''
			}`}>
			<div
				className='
					container-fluid container-xl
					d-flex
					align-items-center
					justify-content-between
				'>
				<Link
					to='hero'
					spy='true'
					smooth={true}
					duration={100}
					hashspy='true'
					isdynamic='true'
					className='logo'>
					<img src={pcsLogo} alt='pcs logo' />
				</Link>

				<nav
					id='navbar'
					className={`${click ? `navbar navbar-mobile` : `navbar `}`}>
					<ul>
						{items.map((each, index) => (
							<Link
								className={`nav-link scrollto d-flex justify-content-center align-items-center`}
								to={each.to}
								// activeclassname={` ${isActive ? `active` : ''}`}
								// activeClassName={'active'}
								activeClassName='active'
								key={index}
								spy='true'
								smooth={true}
								duration={100}
								hashspy='true'
								isdynamic='true'
								offset={100}
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
								? 'fas fa-times mobile-nav-toggle i-pcs-color'
								: 'fas fa-bars mobile-nav-toggle i-white-color'
						}
						onClick={() => setClick(!click)}></i>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
