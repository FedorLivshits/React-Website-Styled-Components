import React from 'react'
import styled from 'styled-components'
import svg from '../../images/svg-1.svg'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'

const InfoSec = styled.div`
	color: white;
	padding: 160px 0;
	background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`
const InfoRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

const InfoColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	max-width: 50%;
	flex-basis: 50%;
	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
`

const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
	font-size: 18px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
`

const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`

const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`

const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`

const InfoSection = ({
	primary,
	lightBg,
	topLine,
	lightTopLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	imgStart,
	start,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Link to='/sign-up'>
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper st art={start}>
								<Img src={svg} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	)
}

export default InfoSection
