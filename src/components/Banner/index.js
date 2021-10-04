import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { main } from './content'

import './index.css'

const ScrollContainer = styled.div`
	width: 25px;
	height: 25px;
	background-color: #fff;
	border-radius: 50%;
	padding: auto;
	position: absolute;
	bottom: 50px;
	left: 50%;
	color: #565dab;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`

function Banner() {
	return (
		<section id='hero' className='hero d-flex align-items-center'>
			<div className='container'>
				<div className='row'>
					<div
						className='col-lg-6 d-flex flex-column justify-content-center'
						data-aos='fade-right'>
						<h1>{main.title}</h1>
						<h2>{main.subtitle}</h2>
						<div className='before'></div>
						<div>
							<div className='text-center text-lg-start'>
								<Link
									to='about'
									className='
										btn-get-started
										scrollto
										d-inline-flex
										align-items-center
										justify-content-center
										align-self-center
									'>
									<span>{main.button}</span>
									<i className='bi bi-arrow-right'></i>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6 hero-img' data-aos='fade-left'>
						<img
							src='assets/img/hero-img.png'
							className='img-fluid banner-animation'
							alt='hero'
						/>
					</div>
				</div>
				<Link
					to='about'
					spy={'true'}
					smooth={'true'}
					hashspy={'true'}
					duration={100}>
					<ScrollContainer>
						<i className='fas fa-chevron-down'></i>
						<div className='circle' style={{ animationDelay: '0s' }}></div>
						<div className='circle' style={{ animationDelay: '1s' }}></div>
						<div className='circle' style={{ animationDelay: '2s' }}></div>
						<div className='circle' style={{ animationDelay: '3s' }}></div>
					</ScrollContainer>
				</Link>
			</div>
		</section>
	)
}

export default Banner
