import React, { useState } from 'react'
import Title from './Title'
import { FaSwimmingPool, FaCocktail} from 'react-icons/fa'
import { GiWaveSurfer } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'


function Service() {

    const [ services, setServices ] = useState([
        {
            icon: <FaCocktail />,
            title: "Cocktails",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga voluptatem repellendus!"
        },
        {
            icon: <GiWaveSurfer />,
            title: "Surfing",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga voluptatem repellendus!"
        },
        {
            icon: <CgGym />,
            title: "Free Gym Center",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga voluptatem repellendus!"
        },
        {
            icon: <FaSwimmingPool />,
            title: "Pool",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga voluptatem repellendus!"
        }
    ])

    return (
        <>
    <section className="services">
    <Title title="services"/>  
        <div className="services-center">
            {services.map((item, index) => {
                return (
                <article key={index}className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                </article>
                 );
            })}
        </div>
    </section>
        </>
    )
}

export default Service
