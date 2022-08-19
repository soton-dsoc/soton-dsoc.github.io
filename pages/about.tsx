import styles from '../styles/About.module.css'
import classnames from 'classnames'
import React from 'react';

// import './About.css';
import { Button } from '@mantine/core';

// TS does not complain with require, since it returns type any
const german = require('../public/german.jpg');
const victor = require('../public/victor.png');

function About() {

    const team = [
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
            photo: german,
            text: `
            Financial Officer
            `
        },
        {
            name: "Olly Ferrier",
            photo: german,
            text: `
            Events Officer
            `
        },
        {
            name: "Jie-Jie Chan",
            photo: german,
            text: `
            DeFi Officer
            `
        },
        {
            name: "Jin Tanaka",
            photo: german,
            text: `
            Graphics Designer
            `
        },
        {
            name: "Fernando del Aguila",
            photo: german,
            text: `
            DeFi & Blockchain Lead
            `
        },
        {
            name: "Otmane Yessouf",
            photo: german,
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
                    Whether you have just heard about blockchain or you are a smart contract developer, we'd love to see you in our meetings sharing your opinion with other like-minded people!
                </p>
                <div className={styles.spacer}></div>
            </div>

            <div className={styles.team}>
                {
                    team.map((p, i) =>
                        <div className={classnames(styles["team-card"], styles.flex, styles.row)} key={i}>
                            <img src={p.photo} style={{ height: "100px" }} ></img> {/* not sure if "as any" is the best solution */}
                            <div className={classnames(styles["team-card-text"], styles.flex, styles.column)}>
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