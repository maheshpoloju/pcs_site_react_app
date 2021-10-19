import React from 'react'
import './index.css'

function TeamCard(props) {
	return (
		// <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
		// 	<div className='member'>
		// 		<div className='member-img'>
		// 			<img src={props.memImage} className='team-mem-image' alt='' />
		// 			<div className='social'>
		// 				<a
		// 					href={`https://linkedin.com/${props.linkedIn}`}
		// 					target='_blank'
		// 					rel='noreferrer'>
		// 					<i className='fab fa-linkedin'></i>
		// 				</a>
		// 			</div>
		// 		</div>
		// 		<div className='member-info'>
		// 			<h4>{props.name}</h4>
		// 			<span>{props.role}</span>
		// 			<p>{props.desc}</p>
		// 		</div>
		// 	</div>
		// </div>
		// <div className='col-md-6 col-xl-4 mb-5'>
		<div className='card card-team'>
			<div className='card-body '>
				<img src={props.memImage} alt='...' className='card-team-img mb-3' />
				<div className='card-team-name'>{props.name}</div>
				<div className='card-team-position mb-3'>{props.role}</div>
				<p style={{ fontSize: '1.2rem' }} className='mb-0'>
					{props.desc}
				</p>
			</div>
			<div className='card-footer text-center'>
				<a
					href={`https://linkedin.com/${props.linkedIn}`}
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div>
		</div>
		// </div>
	)
}

export default TeamCard
