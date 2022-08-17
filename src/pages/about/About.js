import react from 'react';
import React from 'react';

import './About.css';
import { Button } from '@mantine/core';
import george from './george.png'
import german from './german.jpg'
import victor from './victor.png'
import euan from './euan.png'


function About() {

    const team = [
        {
            name: "George Giamouridis",
            photo: george,
            text: `
            PhD Researcher
            `
        },
        {
            name: "German Nikolishin",
            photo: german,
            text: `
            External Relations Officer
            `
        },
        {
            name: "Víctor Gabaldón",
            photo: victor,
            text: `
            Deputy Education Officer
            `
        },
        {
            name: "Euan Caskie",
            photo: euan,
            text: `
            Web Officer
            `
        },

    ]

    return (
        <div className='about' id="about">
            <h1>About us</h1>

            <div className='about-text'>
                <p>
                    Since September 2021, we advocate for internet freedom, web3 technologies and decentralised internet.
                </p>

                <p>
                    dSoc functions like a DAO (Decentralised Autonomous Organisation), meaning it's up to the collective agreement of its members to decide what dSoc can be.
                    The society holds regular meetings to discuss current affairs in crypto world, new projects or trends on crypto markets.
                </p>

                <p>
                    Whether you support the crypto revolution or not, come along and share your opinion with other like-minded people.
                </p>
                <div className='spacer'></div>
            </div>

            <div className='team flex row' >
                {
                    team.map(p =>
                        <div className='team-card flex row' >
                            <img src={p.photo} style={{ height: "100px" }} ></img>
                            <div className='team-card-text flex column'>
                                <div className='team-card-name'>
                                    {p.name}
                                </div>
                                <div className='team-card-name-text' dangerouslySetInnerHTML={{ __html: p.text }}>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>


    )
}

export default About;