import React from 'react'

const PageTitle = ({ title, subtitle }) => (
	<div className='page-title-area'>
		<div className='d-table'>
			<div className='d-table-cell'>
				<div className='container'>
					<h2>{title}</h2>
					{subtitle && (
						<>
							<br />
							<h5>{subtitle}</h5>
						</>
					)}
				</div>
			</div>
		</div>
	</div>
)

export default PageTitle
