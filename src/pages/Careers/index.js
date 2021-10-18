import React, { useEffect } from 'react'
import './index.css'
import NavBar from '../../components/NavBar'

import CareerPage from './CareerPage'

function Careers() {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<NavBar />
			<CareerPage />
		</>
	)
}

export default Careers
