import React from 'react'

import {
	MainNavContainer,
	CenterNavImg,
	NavMiniBox,
	NavList,
	NavSubList,
} from './MainNav.styles'

import { MainNavText, SubNavText } from '../typography/typography.components.js'

import Logo from '../../assets/img/cigar-logo.png'

const MainNav = () => (
	<MainNavContainer>
		<NavMiniBox>
			<NavList>
				<li>
					<a href="#">
						<MainNavText>Cigars</MainNavText>
					</a>
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>Sixty by Rocky Patel</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Full Portfolio</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Top Rated Cigars</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>New Cigars</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Nicaraguan Collection</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Honduran Collection</SubNavText>
							</a>
						</li>
					</NavSubList>
				</li>
				<li>
					<a href="#">
						<MainNavText>Shop</MainNavText>
					</a>
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>Full Catalog</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Lighters</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Cutters</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Ashtrays</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Humidors</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Apparel</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Man Cave</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Returns & Warranty</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>RP Art Gallery</SubNavText>
							</a>
						</li>
					</NavSubList>
				</li>
				<li>
					<a href="#">
						<MainNavText>Retailers</MainNavText>
					</a>
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>Our Retailers</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Special Edition Retailers</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Unauthorized Retailers</SubNavText>
							</a>
						</li>
					</NavSubList>
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
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>Cigar Events</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Cigar Smoking World Championship</SubNavText>
							</a>
						</li>
					</NavSubList>
				</li>
				<li>
					<a href="#">
						<MainNavText>Farms & Factories</MainNavText>
					</a>
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>How a Cigar is Made</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Cigar Factories</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Factory Tour</SubNavText>
							</a>
						</li>
					</NavSubList>
				</li>
				<li>
					<a href="#">
						<MainNavText>About</MainNavText>
					</a>
					<NavSubList>
						<li>
							<a href="#">
								<SubNavText>Story of Rocky Patel</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>RP Cinema</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>RP Family</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Your RP Reps</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Returns & Warranty</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>Contact</SubNavText>
							</a>
						</li>
						<li>
							<a href="#">
								<SubNavText>RP Art Gallery</SubNavText>
							</a>
						</li>
					</NavSubList>
				</li>
			</NavList>
		</NavMiniBox>
	</MainNavContainer>
)

export default MainNav
