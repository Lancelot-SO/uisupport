/* eslint-disable no-unused-vars */
import React from 'react'
import AboutHero from '../components/aboutsection/AboutHero'
import AboutDetail from '../components/aboutsection/AboutDetail'
import Vision from '../components/aboutsection/Vision'
import Team from '../components/aboutsection/Team'

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutDetail />
            <Vision />
            <Team />
        </div>
    )
}

export default About