import React from 'react'

import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { technolgies, headings} from './content'
import './index.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper'

SwiperCore.use([Autoplay, Pagination])

function Technologies() {
	const breakpoints = {
		450: {
			slidesPerView: 2,
			slidesPerColumn: 4,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 3,
			slidesPerColumn: 4,
			spaceBetween: 10,
		},
		900: {
			slidesPerView: 4,
			spaceBetween: 10,
			slidesPerColumn: 4,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 10,
			slidesPerColumn: 4,
		},
	}
	return (
		<section id='technologies' class='technologies mt-5'>
			<div className='container' data-aos=''>
				<div className='col-xl-12 text-center mb-4'>
					<div>
						<h2 className='technology-title mt-5'>{headings.title}</h2>
						<p className='technology-head'>{headings.heading}</p>
						<div className='small-separator'></div>
						
					</div>
				</div>

				<div className='row'>
					<Swiper
						slidesPerView={1} // or 'auto'
						slidesPerColumn={4}
						spaceBetween={20}
						slidesPerColumnFill='row'
						grabCursor={true}
						autoplay={{ delay: 2500 }}
						
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