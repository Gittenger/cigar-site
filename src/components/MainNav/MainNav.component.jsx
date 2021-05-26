import React from 'react'

import {
	MainNavContainer,
	CenterNavImg,
	NavMiniBox,
	NavList,
} from './MainNav.styles'

import { MainNavText } from '../typography/typography.components.js'

import Logo from '../../assets/img/cigar-logo.png'

const MainNav = () => (
	<MainNavContainer>
		<NavMiniBox>
			<NavList>
				<li>
					<a href="#">
						<MainNavText>Cigars</MainNavText>
					</a>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<MainNavText>Shop</MainNavText>
					</a>
				</li>
				<li>
					<a href="#">
						<MainNavText>Retailers</MainNavText>
					</a>
				</li>
			</NavList>
		</NavMiniBox>
		<CenterNavImg>
			<a href="#">
				<img src={Logo} alt="" />
			</a>
		</CenterNavImg>
		<NavMiniBox>
			<NavList>
				<li>
					<a href="#">
						<MainNavText>Events</MainNavText>
					</a>
				</li>
				<li>
					<a href="#">
						<MainNavText>Farms & Factories</MainNavText>
					</a>
				</li>
				<li>
					<a href="#">
						<MainNavText>About</MainNavText>
					</a>
				</li>
			</NavList>
		</NavMiniBox>
	</MainNavContainer>
)

export default MainNav
