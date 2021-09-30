import React from 'react'
import feature1 from '../../assets/img/bot-features/feature1.svg'

const tabItems = [
	{
		iconClass: 'ri-gps-line',
		tabTitle: 'BUILD',
	},
	{
		iconClass: 'ri-body-scan-line',
		tabTitle: 'BUILD',
	},
	{
		iconClass: 'ri-gps-line',
		tabTitle: 'BUILD',
	},
]

const Phases = () => {
	return (
		<div className='container' data-aos='fade-up'>
			<div className='content mb-5'>
				<h3 className='text-center'>
					Partners With Skin In The Game With Unique Operating Model
				</h3>
				<p className='text-center'>
					Help you set up your captive in India without undergoing the expanding
					pains and bothering of setting business in India
				</p>
			</div>
			<ul className='nav nav-tabs row d-flex'>
				<div className='content mb-2'>
					<h3 className='text-center'>Phases</h3>
				</div>
				{/* {
               tabItems.map(each=> (

               ))
            } */}
				<li className='nav-item col-4'>
					<a
						className='nav-link active show'
						data-bs-toggle='tab'
						href='#tab-1'>
						<i className='ri-gps-line d-none d-lg-block'></i>
						<h4 className=''>BUILD</h4>
					</a>
				</li>
				<li className='nav-item col-4'>
					<a className='nav-link' data-bs-toggle='tab' href='#tab-2'>
						<i className='ri-body-scan-line d-none d-lg-block'></i>
						<h4 className=''>OPERATE</h4>
					</a>
				</li>
				<li className='nav-item col-4'>
					<a className='nav-link' data-bs-toggle='tab' href='#tab-3'>
						<i className='ri-sun-line d-none d-lg-block'></i>
						<h4 className=''>TRANSFER</h4>
					</a>
				</li>
			</ul>

			<div className='tab-content'>
				<div className='tab-pane active show' id='tab-1'>
					<div className='row'>
						<div className='col-lg-6  order-lg-2 text-center'>
							<ul className='nav nav-tabs flex-column'>
								<li className='nav-item'>
									<div
										className='nav-link active show'
										data-bs-toggle='tab'
										href='#tab-1-1'>
										<h4>Modi sit est</h4>
										<p>
											Quis excepturi porro totam sint earum quo nulla
											perspiciatis eius.
										</p>
									</div>
								</li>
								<li className='nav-item mt-2'>
									<a className='nav-link' data-bs-toggle='tab' href='#tab-1-2'>
										<h4>Unde praesentium sed</h4>
										<p>Voluptas vel esse repudiandae quo excepturi.</p>
									</a>
								</li>
							</ul>
						</div>
						<div className='tab-content order-1 order-lg-3 col-lg-6 '>
							<div className='tab-pane active show' id='tab-1-1'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
							<div className='tab-pane' id='tab-1-2'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className='tab-pane active show' id='tab-2'>
					<div className='row'>
						<div className='col-lg-6 order-1 order-lg-2 text-center'>
							<ul className='nav nav-tabs flex-column'>
								<li className='nav-item'>
									<div
										className='nav-link active show'
										data-bs-toggle='tab'
										href='#tab-2-1'>
										<h4>Modi sit est</h4>
										<p>
											Quis excepturi porro totam sint earum quo nulla
											perspiciatis eius.
										</p>
									</div>
								</li>
								<li className='nav-item mt-2'>
									<a className='nav-link' data-bs-toggle='tab' href='#tab-2-2'>
										<h4>Unde praesentium sed</h4>
										<p>Voluptas vel esse repudiandae quo excepturi.</p>
									</a>
								</li>
							</ul>
						</div>
						<div className='tab-content col-lg-6 '>
							<div className='tab-pane active show' id='tab-2-1'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
							<div className='tab-pane' id='tab-2-2'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className='tab-pane active show' id='tab-3'>
					<div className='row'>
						<div className='col-lg-6 order-1 order-lg-2 text-center'>
							<ul className='nav nav-tabs flex-column'>
								<li className='nav-item'>
									<div
										className='nav-link'
										data-bs-toggle='tab'
										href='#tab-3-1'>
										<h4>Modi sit est</h4>
										<p>
											Quis excepturi porro totam sint earum quo nulla
											perspiciatis eius.
										</p>
									</div>
								</li>
								<li className='nav-item mt-2'>
									<a className='nav-link' data-bs-toggle='tab' href='#tab-3-2'>
										<h4>Unde praesentium sed</h4>
										<p>Voluptas vel esse repudiandae quo excepturi.</p>
									</a>
								</li>
							</ul>
						</div>
						<div className='tab-content col-lg-6 '>
							<div className='tab-pane active show' id='tab-3-1'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
							<div className='tab-pane' id='tab-3-2'>
								<figure>
									<img src={feature1} alt='feature 1' className='img-fluid' />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Phases
