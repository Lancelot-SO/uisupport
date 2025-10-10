/* eslint-disable no-unused-vars */
import React from 'react'
import StaffHero from '../components/staffing/StaffHero'
import MainSection from '../components/staffing/MainSection'
import SkilledSection from '../components/staffing/SkilledSection'
import Partner from '../components/staffing/Partner'
import imgA from '../assets/staffing/imgA.jpg'
import imgB from '../assets/staffing/imgB.jpg'


const Staffing = () => {
    return (
        <div>
            <StaffHero />
            <MainSection />
            <SkilledSection />
            <Partner imgTop={imgA} imgBottom={imgB} />
        </div>
    )
}

export default Staffing