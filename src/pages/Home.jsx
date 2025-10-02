/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/homesection/Hero'
import HomeAbout from '../components/homesection/HomeAbout'
import img1 from "../assets/home/slider1.jpg";
import img2 from "../assets/home/slider2.jpg";
import img3 from "../assets/home/slider3.jpg";
import img4 from "../assets/home/slider4.jpg";
import Partners from '../components/homesection/Partners';
import HomeServices from '../components/homesection/HomeServices';
import Careers from '../components/homesection/Careers';
import HomeResource from '../components/homesection/HomeResource';


const Home = () => {
    return (
        <div>
            <Hero />
            <HomeAbout slides={[{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }]} />
            <Partners />
            <HomeServices />
            <Careers />
            <HomeResource />
        </div>
    )
}

export default Home