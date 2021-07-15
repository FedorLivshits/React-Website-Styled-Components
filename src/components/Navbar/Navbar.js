import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMagento, FaTimes, FaBars } from 'react-icons/fa'
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
const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

const Navbar = () => {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>
						<NavIcon />
						ULTRA
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileIcon>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
