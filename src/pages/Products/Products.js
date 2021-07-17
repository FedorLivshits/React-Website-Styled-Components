import React from 'react'
import { homeObjOne, homeObjTwo } from '../HomePage/Data'
import { InfoSection } from '../../components/InfoSection/InfoSection'

export const Products = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	)
}
