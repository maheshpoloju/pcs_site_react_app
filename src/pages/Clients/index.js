import React from 'react'
import { clients } from './content'

function Clients() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}
	return (
		<>
			<section id='clients' class='clients'>
				<div className='section-header'>
					<h3>{clients.title}</h3>
					<p>{clients.desc}</p>
				</div>
				<div class='container'>
					<div class='row no-gutters clients-wrap clearfix wow fadeInUp'>
						{clients.clients.map((each, index) => (
							<div className='col-12 col-md-4  col-lg-3  mx-auto p-1 p-md-2 w-xs-100 '>
								<div className='client-logo'>
									<img
										src={each.image}
										className='img-fluid'
										alt={each.alt}
										onClick={() => openInNewTab(each.url)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Clients
