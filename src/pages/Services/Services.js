import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import Pricing from '../../components/Pricing/Pricing'
import { homeObjOne, homeObjThree } from '../HomePage/Data'

const Services = () => {
	return (
		<>
			<Pricing />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjThree} />
		</>
	)
}

export default Services
