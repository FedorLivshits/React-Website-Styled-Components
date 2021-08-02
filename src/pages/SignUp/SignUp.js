import React from 'react'
import {InfoSection} from '../../components/InfoSection/InfoSection'
import {homeObjOne, homeObjThree} from '../HomePage/Data'

export const SignUp = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    )
}
