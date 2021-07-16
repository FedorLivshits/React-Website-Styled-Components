import React from 'react'
import styled from 'styled-components'

const InfoSec = styled.div`
color: white;
padding: 160px 0;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

const infoSection = ({lightBg}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>h1</InfoSec>
		</>
	)
}

export default infoSection
