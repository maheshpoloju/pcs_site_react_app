import React, { useState } from 'react'
import './index.css'
import { items } from './content'
import { teamHeadings } from './content'
import TeamCard from './TeamCard'
import Collapse from 'react-bootstrap/Collapse'

const Team = () => {
	const [showMore, setShowMore] = useState(false)
	var buttonName = showMore ? 'Show Less' : 'Show More..'
	return (
		<div id='team' className='team'>
			<div className='container'>
				<div className='section-header'>
					<h2>{teamHeadings.title}</h2>
					<p>{teamHeadings.description}</p>
				</div>
				<div className='row gy-4 mb-5' data-aos='fade-up'>
					{items.slice(0, 4).map((each, index) => (
						<TeamCard
							key={index}
							memImage={each.Image}
							name={each.name}
							role={each.role}
							desc={each.desc}
							linkedIn={each.linkedIn}
						/>
					))}
				</div>
				{/* hided team members */}
				<Collapse in={showMore}>
					<div className=' row gy-4 '>
						{items.slice(4, items.length).map((each, index) => (
							<TeamCard
								key={index}
								memImage={each.Image}
								name={each.name}
								role={each.role}
								desc={each.desc}
								linkedIn={each.linkedIn}
							/>
						))}
					</div>
				</Collapse>
				<div className='text-center'>
					<button
						className='show-more-button'
						onClick={() => {
							setShowMore(!showMore)
						}}>
						{buttonName}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Team
