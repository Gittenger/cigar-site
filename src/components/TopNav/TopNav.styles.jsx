import styled from 'styled-components'
import { cssIndex } from '../../styles/css/utils.styles.js'

export const TopNavContainer = styled.nav`
	width: 98%;
	margin-top: 0.9rem;
	${cssIndex.flexCenter}
	justify-content: space-between;
`
export const LeftSide = styled.div`
	${cssIndex.flexCenter}
`

export const IconLinks = styled.div`
	${cssIndex.flexCenter}
	margin-right: .4rem;

	a {
		&:visited,
		&:link {
			color: white;
		}

		margin-left: 0.6rem;
		margin-right: 0.6rem;
		svg {
			width: 14px;
			height: 14px;
		}
	}
`

export const GeneralLinks = styled.div`
	${cssIndex.flexCenter}

	& > a {
		margin-left: 0.8rem;
		margin-right: 0.8rem;
	}
`

export const RightSide = styled.div`
	${cssIndex.flexCenter}
`

export const AccountLinks = styled.div`
	${cssIndex.flexCenter}

	& > :first-child {
		margin-right: 1.5rem;
	}

	a {
		&:visited,
		&:link {
			color: white;
		}

		margin-left: 1rem;
		margin-right: 1rem;
		svg {
			width: 14px;
			height: 14px;
		}
	}
`

export const TopNavLink = styled.a`
	&:visited,
	&:link {
		color: white;
	}
`
