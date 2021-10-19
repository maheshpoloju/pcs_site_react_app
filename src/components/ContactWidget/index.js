import './index.css'
import { React, useState } from 'react'
import {
	FloatingMenu,
	MainButton,
	ChildButton,
	Directions,
} from 'react-floating-button-menu'
import { useHistory } from 'react-router'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	// console.log(useHistory().push('/careers'))
	let history = useHistory()
	return (
		<div>
			<FloatingMenu
				slideSpeed={500}
				isOpen={isOpen}
				spacing={20}
				direction={Directions.Up}
				className='menu-btn'>
				<MainButton
					isOpen={isOpen}
					iconResting={
						<i
							className='fas fa-user-cog'
							style={{ fontSize: 20, color: '#565dab' }}
						/>
					}
					iconActive={
						<i
							className='far fa-times-circle'
							style={{ fontSize: 65, color: '#565dab' }}
						/>
					}
					background='white'
					onClick={() => {
						setIsOpen((prev) => !prev)
					}}
					size={56}
				/>
				<ChildButton
					icon={
						<i
							className='fas fa-chevron-circle-up'
							style={{ fontSize: 20, color: '#565dab' }}
						/>
					}
					background='white'
					size={40}
					onClick={() => window.scrollTo(0, 0)}
				/>
				<ChildButton
					icon={
						<i
							className='fas fa-envelope'
							style={{ fontSize: 20, color: '#565dab' }}
						/>
					}
					background='white'
					size={40}
					onClick={() => history.push('/contact')}
				/>

				<ChildButton
					icon={
						<i
							className='fas fa-briefcase'
							style={{ fontSize: 20, color: '#565dab' }}
						/>
					}
					background='white'
					size={40}
					onClick={() => history.push('/careers')}
				/>
			</FloatingMenu>
		</div>
	)
}

export default App
