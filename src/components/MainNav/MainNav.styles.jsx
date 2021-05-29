import styled from 'styled-components'
import { cssIndex } from '../../styles/css/utils.styles.js'

export const MainNavContainer = styled.nav`
	${cssIndex.flexCenter}
	justify-content: space-between;
	max-width: 85%;
	padding: 0 1rem;
	color: white;
`
export const NavMiniBox = styled.div`
	${cssIndex.flexCenter}
`

export const CenterNavImg = styled.div`
	${cssIndex.flexCenter}
	margin-left: 7rem;
	margin-right: 7rem;
`

export const NavList = styled.ul`
	${cssIndex.flexCenter}
	height: 5.5rem;

	& > li {
		height: 100%;
		line-height: 5.5rem;
		margin: auto 1.3rem auto;
		position: relative;

		&:hover {
			ul {
				visibility: visible;
			}
		}
	}
`

export const NavSubList = styled.ul`
	position: absolute;
	visibility: hidden;
	background: olive;
	${cssIndex.flexCenterCol}
	padding: 1.5rem 0 1.5rem;

	&:hover {
		visibility: visible;
	}

	li {
		white-space: nowrap;
		line-height: normal;
		width: 17rem;

		a {
			display: inline-block;
			padding: 1.5rem;
			width: 100%;
			height: 100%;
		}

		& :hover {
			color: red;
			background: white;
		}
	}
`
