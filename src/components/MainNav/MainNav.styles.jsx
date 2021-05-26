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

	li {
		margin-left: 1.3rem;
		margin-right: 1.3rem;
		position: relative;

		ul {
			position: absolute;
			visibility: hidden;
			background: red;

			li {
				margin-top: 1.5rem;
				margin-bottom: 1.5rem;
				white-space: nowrap;
			}
		}

		&:hover {
			color: yellow;

			ul {
				visibility: visible;
			}
		}
	}
`
