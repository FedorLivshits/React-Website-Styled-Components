import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import InfoSection from '../../components/infoSection/infoSection'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
	return (
		<>
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<InfoSection {...homeObjThree}/>
			<Pricing/>
			<InfoSection {...homeObjFour}/>
		</>
	)
}

export default Home
