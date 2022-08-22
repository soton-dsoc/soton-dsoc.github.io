import styles from '../styles/About.module.css'
import classnames from 'classnames'
import React from 'react';
import cryptoModule from 'crypto';

// import './About.css';
import { Button } from '@mantine/core';
import { StaticImageData } from 'next/image';

import dsocEvent from '../public/dsoc-event.jpg'
import audience from '../public/audience.jpg'

import german from '../public/german.jpg';
import victor from '../public/victor_cropped.jpg';
import olly from '../public/olly.jpg'
import dsoc from '../public/dsoc-logo-white.svg'
import jin from '../public/jin.jpeg'
import jj from '../public/jj.jpg'
import sy from '../public/sy.jpg'


function About() {

    type Person = {
        name: string;
        photo: StaticImageData;
        role: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
        discord?: string;
    }

    // TODO: display (a portion of) hash checksum in the back of the card
    const team: Person[] = [
        {
            name: "German Nikolishin",
            photo: german,
            role: "President"
        },
        {
            name: "Victor Gabaldon",
            photo: victor,
            role: "Vice President"
        },
        {
            name: "James Tidbury",
            photo: dsoc,
            role: "Financial Officer"
        },
        {
            name: "Olly Ferrier",
            photo: olly,
            role: "Events Officer"
        },
        {
            name: "Jie-Jie Chan",
            photo: jj,
            role: "DeFi Officer"
        },
        {
            name: "Jin Tanaka",
            photo: jin,
            role: "Graphics Designer"
        },
        {
            name: "Saarujan Yogeswaran",
            photo: sy,
            role: "Graphics Designer"
        },
        {
            name: "Fernando del Aguila",
            photo: dsoc,
            role: "DeFi & Blockchain Lead"
        },
        {
            name: "Otmane Yessouf",
            photo: dsoc,
            role: "Marketing Officer"
        },
    ]

    function hex(buffer: Buffer) {
        var hexCodes = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i += 4) {
          // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
          var value = view.getUint32(i)
          // toString(16) will give the hex representation of the number without padding
          var stringValue = value.toString(16)
          // We use concatenation and slice for padding
          var padding = '00000000'
          var paddedValue = (padding + stringValue).slice(-padding.length)
          hexCodes.push(paddedValue);
        }
      
        // Join all the hex strings into one
        return hexCodes.join("");
      }

    function calculateHash(p: Person): string {
        var s: string = `${p.name} ${p.photo.toString()} ${p.role} ${p.linkedin} ${p.twitter} ${p.email} ${p.discord}`;
        var hash: string = cryptoModule.createHash('sha256').update(s).digest("hex");
        return hash;
    }

    return (
        <div id="about" style={{ paddingTop: '80px' }} className={styles.about}>
            <h1>About</h1>

            <div className={styles["about-container"]}>
                <div className={styles["upper-container"]}>
                    <div className={styles["about-text"]}>
                        <p>
                            Established in September 2021, the University of Southampton Decentralised Society (commonly known as dSoc) was founded with the purpose of exploring and educating other students in the field of decentralisation, building a community to discuss new ideas, and creating an environment to pursue successful projects related to Web3.
                        </p>

                        <p>
                            Whether you have just heard about blockchain or you are a smart contract developer, we'd love to see you in our meetings sharing your views with other like-minded people!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <img src={dsocEvent.src} style={{ height:"270px", borderRadius:"25px" }}/>
                </div>

                <div className={styles["lower-container"]}>
                    <img src={audience.src} style={{ height:"280px", borderRadius:"25px" }}/>

                    <div className={styles["about-text"]}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Meet the core team</h2>

            <div className={styles.team}>
                {
                    team.map((p, i) => 
                        <div className={styles.flipCard} key={i}>
                            <div className={styles.fcInner}>
                                <div className={styles.fcFront}>
                                    <img src={p.photo.src} className={styles["clip-circle"]}></img>
                                    <div className={styles["team-card-text"]}>
                                        <div className={styles["team-card-name"]}>{p.name}</div>
                                        <div className={styles['team-card-role']}>{p.role}</div>
                                    </div>
                                </div>
                                <div className={styles.fcBack}>
                                    <div className={styles.hashGrid}>
                                        {
                                            calculateHash(p).split("").map((c) =>
                                                <div className={styles.char}>{c}</div>
                                            )
                                        }
                                    </div>
                                    
                                    <div className={styles.socialMedia}>
                                    </div>
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