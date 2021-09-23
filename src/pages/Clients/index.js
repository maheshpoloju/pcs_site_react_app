import React from 'react'
import { clients } from './content'
import './index.css'

function Clients() {
	return (
		<>
			{/* <div id='clients'>
			{clients.clients.map((each) => (
				<div className='clients-logo-container'>{each.title}</div>
			))}
		</div> */}
			<section id='clients' class='clients container-fluid'>
				{/* <div class='container' data-aos='zoom-in'>
					<div class='col-12'>
						{clients.clients.map((each) => (
							<div className='clients-container'>{each.title}</div>
						))}
						clients
						<div class='swiper-pagination'></div>
					</div>
				</div> */}
				clients
			</section>
		</>
	)
}

export default Clients
