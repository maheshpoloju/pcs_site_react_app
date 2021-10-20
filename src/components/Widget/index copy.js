import './index.css'
import { React, useEffect, useState } from 'react'
import {
	FloatingMenu,
	MainButton,
	ChildButton,
	Directions,
} from 'react-floating-button-menu'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const IconHoverEffect = styled.div`
	display: flex;
	width: 50px;
	/* background-color: red; */
	/* border: 1px solid black; */
	position: relative;
	/* overflow: hidden; */

	/* & div {
		display: none;
		position: absolute;
		right: 0;
		left: -100px;
		top: 0px;
		background-color: red;
		 height: 40px; 
		padding: 10px;
		border-radius: 10px;
		z-index: -10;
	} */
	&:hover {
		width: 100px;
		> i {
			display: none;
			background: none;
		}
		div {
			display: block;
			display: flex;
		}
	}
`

const Widget = (props) => {
	const [widget, setWidget] = useState([])
	console.log('widget', widget)
	const [isOpen, setIsOpen] = useState(false)
	// console.log(useHistory().push('/careers'))
	let history = useHistory()
	// console.log(props.widgetList.map((each) => each.action))
	useEffect(() => {
		setWidget(props.widgetList)
		setIsOpen(false)
	}, [props.widgetList])

	const renderIcon = (each) => (
		<IconHoverEffect>
			<i className={each.icon} style={{ fontSize: 20, color: '#565dab' }} />
			<div>
				<p>COntact</p>
				<i className={each.icon} style={{ fontSize: 20, color: '#565dab' }} />
			</div>
		</IconHoverEffect>
	)
	return (
		<div>
			{widget && (
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
					{widget &&
						widget.map((each, index) => {
							return (
								<ChildButton
									key={index}
									icon={
										renderIcon(each)
										// <i
										// 	className={each.icon}
										// 	style={{ fontSize: 20, color: '#565dab' }}
										// />
									}
									background='none'
									size={40}
									onClick={() => {
										each.action === 'scroll'
											? window.scrollTo(0, 0)
											: history.push(each.action)
									}}
								/>
							)
						})}
				</FloatingMenu>
			)}
		</div>
	)
}

export default Widget
