import React from 'react'
import { footer } from './content'

function Footer() {
	const year = new Date().getFullYear()
	console.log(year)
	return (
		<footer className='footer-area'>
			<div className='container'>
				<div className='row'>
					<div className='footer clear container'>{footer.copyright}</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
