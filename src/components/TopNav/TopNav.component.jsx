import React from 'react'

import {
	TopNavContainer,
	TopNavLink,
	LeftSide,
	RightSide,
	GeneralLinks,
	IconLinks,
	AccountLinks,
} from './TopNav.styles'
import { TopNavText } from '../typography/typography.components.js'

import { ReactComponent as PinterestIcon } from '../../assets/img/icons/pinterest-brands.svg'
import { ReactComponent as FacebookIcon } from '../../assets/img/icons/facebook-square-brands.svg'
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/twitter-brands.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/img/icons/youtube-brands.svg'
import { ReactComponent as InstaIcon } from '../../assets/img/icons/instagram-brands.svg'
import { ReactComponent as CartIcon } from '../../assets/img/icons/shopping-cart-solid.svg'
import { ReactComponent as SearchIcon } from '../../assets/img/icons/search-solid.svg'

const TopNav = () => (
	<TopNavContainer>
		<LeftSide>
			<IconLinks>
				<a href="#">
					<PinterestIcon />
				</a>
				<a href="#">
					<YoutubeIcon />
				</a>
				<a href="#">
					<InstaIcon />
				</a>
				<a href="#">
					<TwitterIcon />
				</a>
				<a href="#">
					<FacebookIcon />
				</a>
			</IconLinks>
			<GeneralLinks>
				<TopNavLink href="#">
					<TopNavText>Un-authorized Retailers</TopNavText>
				</TopNavLink>
				<TopNavLink href="#">
					<TopNavText>FAQ</TopNavText>
				</TopNavLink>
				<TopNavLink href="#">
					<TopNavText>News</TopNavText>
				</TopNavLink>
			</GeneralLinks>
		</LeftSide>
		<RightSide>
			<AccountLinks>
				<TopNavLink href="#">
					<TopNavText>My Account</TopNavText>
				</TopNavLink>
				<a href="#">
					<CartIcon />
				</a>
				<a href="#">
					<SearchIcon />
				</a>
			</AccountLinks>
		</RightSide>
	</TopNavContainer>
)

export default TopNav
