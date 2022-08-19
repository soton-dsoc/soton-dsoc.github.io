import styles from '../styles/About.module.css'
import classnames from 'classnames'
import React from 'react';

// import './About.css';
import { Button } from '@mantine/core';
import { StaticImageData } from 'next/image';

import german from '../public/german.jpg';
import victor from '../public/victor.png';
import dsoc from '../public/dsoc-logo-white.svg'

function About() {

    const team: {
        name: string;
        photo: StaticImageData;
        text: string;
    }[] = [
        {
            name: "German Nikolishin",
            photo: german,
            text: `
            President
            `
        },
        {
            name: "Victor Gabaldon",
            photo: victor,
            text: `
            Vice President
            `
        },
        {
            name: "James Tidbury",
            photo: dsoc,
            text: `
            Financial Officer
            `
        },
        {
            name: "Olly Ferrier",
            photo: dsoc,
            text: `
            Events Officer
            `
        },
        {
            name: "Jie-Jie Chan",
            photo: dsoc,
            text: `
            DeFi Officer
            `
        },
        {
            name: "Jin Tanaka",
            photo: dsoc,
            text: `
            Graphics Designer
            `
        },
        {
            name: "Fernando del Aguila",
            photo: dsoc,
            text: `
            DeFi & Blockchain Lead
            `
        },
        {
            name: "Otmane Yessouf",
            photo: dsoc,
            text: `
            Marketing Officer
            `
        },
    ]

    return (
        <div className={styles.about}>
            <h1>About us</h1>

            <div className={styles["about-text"]}>
                <p>
                    Established in September 2021, the University of Southampton Decentralised Society (commonly known as dSoc) was founded with the purpose of exploring and educating other students in the field of decentralisation, building a community to discuss new ideas, and creating an environment to pursue successful projects related to Web3.
                </p>

                <p>
                    Whether you have just heard about blockchain or you are a smart contract developer, we'd love to see you in our meetings sharing your views with other like-minded people!
                </p>
                <div className={styles.spacer}></div>
            </div>

            <div className={styles.team}>
                {
                    team.map((p, i) =>
                        <div className={styles["team-card"]} key={i}>
                            <img src={p.photo.src} style={{ height: "100px" }} ></img>
                            <div className={styles["team-card-text"]}>
                                <div className={styles["team-card-name"]}>
                                    {p.name}
                                </div>
                                <div className={styles['team-card-name-text']} dangerouslySetInnerHTML={{ __html: p.text }}>
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