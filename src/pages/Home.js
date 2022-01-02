import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Service'
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $300">
                <Link to="/rooms" className='btn-primary'>
                    avaliable rooms
                </Link>     
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
