import React, { useEffect } from 'react'
import './index.css'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Whyworkwithus from './WhyWorkWithUs'
import { careersBreadCrumb } from './content'

function Careers() {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<NavBar />
			<section id='careers' style={{ border: '1px solid red' }}>
				<BreadCrumb
					breadCrumbData={[
						{ title: careersBreadCrumb.title1, path: '/' },
						{ title: careersBreadCrumb.title2, path: '/careers' },
					]}
				/>
				<Whyworkwithus />
			</section>
		</>
	)
}

export default Careers
