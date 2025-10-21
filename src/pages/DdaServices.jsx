/* eslint-disable no-unused-vars */
import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServiceOverview from '../components/services/ServiceOverview'
import AllServices from '../components/services/AllServices'
import ApplyServices from '../components/services/ApplyServices'

const DdaServices = () => {
    return (
        <div>
            <ServicesHero />
            <ServiceOverview />
            <AllServices />
            <ApplyServices />
        </div>
    )
}

export default DdaServices