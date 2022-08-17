import React from 'react';

// import './About.css';
import { Button } from '@mantine/core';
import german from '../public/german.jpg'
import victor from '../public/victor.png'

export default function About() {

    const team = [
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
    ]

    return (
        <div className='about' id="about">
            <h1>About us</h1>

            <div className='about-text'>
                <p>
                Established in September 2021, the University of Southampton Decentralised Society (commonly known as dSoc) was founded with the purpose of exploring and educating other students in the field of decentralisation, building a community to discuss new ideas, and creating an environment to pursue successful projects related to Web3.
                </p>

                <p>
                Whether you have just heard about blockchain or you are a smart contract developer, we'd love to see you in our meetings sharing your opinion with other like-minded people!
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