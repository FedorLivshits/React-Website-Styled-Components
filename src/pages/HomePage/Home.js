import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import Pricing from '../../components/Pricing/Pricing'

export const Home = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjThree} />
			<InfoSection {...homeObjTwo} />
			<Pricing />
			<InfoSection {...homeObjFour} />
		</>
	)
}
