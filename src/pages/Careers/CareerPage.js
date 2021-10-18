import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Whyworkwithus from './WhyWorkWithUs'

const CareerPage = () => {
	return (
		<section id='careers' style={{ border: '1px solid red' }}>
			<BreadCrumb title={'careers'} />
			<Whyworkwithus />
		</section>
	)
}

export default CareerPage
