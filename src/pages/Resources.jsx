/* eslint-disable no-unused-vars */
import React from 'react'
import ResourceHero from '../components/resources/ResourceHero'
import ResourceOverview from '../components/resources/ResourceOverview'
import ResourceList from '../components/resources/ResourceList'

const Resources = () => {
    return (
        <div>
            <ResourceHero />
            <ResourceOverview />
            <ResourceList />
        </div>
    )
}

export default Resources