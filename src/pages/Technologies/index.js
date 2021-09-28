import React from 'react'

import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { technolgies } from './content'
import './index.css'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
// import Swiper, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation])

function Technologies() {
	const breakpoints = {
		600: {
			slidesPerView: 2,
			slidesPerColumn: 4,
			// slidesPerGroup: 8,
			spaceBetween: 10,
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 10,
			slidesPerColumn: 4,
		},
	}
	return (
		<section id='technologies' class='technologies mt-5'>
			<div className='container' data-aos=''>
				<div className='col-xl-12 text-center mb-4'>
					<div className=''>
						<h3 className='technology-head'>what we use</h3>
						<h2 className='technology-title'>Technologies</h2>
						<div className='small-separator'></div>
						{/* <div className="bar">
							::before
						</div> */}
					</div>
				</div>

				<div className='row'>
					<Swiper
						slidesPerView={1} // or 'auto'
						slidesPerColumn={4}
						spaceBetween={20}
						slidesPerColumnFill='row'
						grabCursor={true}
						autoplay={{ delay: 3500 }}
						navigation
						pagination={{
							clickable: true,
						}}
						breakpoints={breakpoints}
						className='mySwiper'>
						{technolgies.map((each, index) => (
							
							<SwiperSlide>
								<i className={each.icon}></i>
								<div className='d-flex justify-content-center align-items-center'>
									<h4>{each.title}</h4>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					
				</div>
			</div>
		</section>
	)
}
export default Technologies