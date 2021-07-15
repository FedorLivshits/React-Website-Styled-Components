import React from 'react'
import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'

const Nav = styled.nav`
	background: #101522;
	color: white;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`

const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`

const NavLogo = styled(Link)`
	color: white;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`
const NavIcon = styled(FaMagento)`
	margin: 0.5rem;
`

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>
						<NavIcon />
						ULTRA
					</NavLogo>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
