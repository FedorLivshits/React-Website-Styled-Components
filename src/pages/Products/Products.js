import React from 'react'
import { homeObjOne, homeObjTwo } from '../HomePage/Data'
import InfoSection from '../../components/InfoSection/InfoSection'

const Products = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	)
}

export default Products
