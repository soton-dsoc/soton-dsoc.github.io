import styles from '../styles/About.module.css'
import React, { useEffect, useRef } from 'react';
import cryptoModule from 'crypto';
import VanillaTilt from 'vanilla-tilt';
import Image from 'next/image';

import { StaticImageData } from 'next/image';

import dsocEvent from '../public/dsoc-event.jpg'
import audience from '../public/audience.jpg'



import ojas from '../public/ojas.png'
import dawid from '../public/dawid.jpeg'
/* import ash from '../public/ash.jpg' */


function Tilt(props: any): JSX.Element {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current as any, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}


function About() {

    const [doesTilt, setTilt] = React.useState(true);

    if (typeof window !== "undefined") {
        // let width = Math.max(window.screen.width, window.innerWidth);

        window.addEventListener('resize', () => {
            let width = window.innerWidth;

            if (width < 768) {
                setTilt(false);
            } else {
                setTilt(true);
            }
        })
    }


    type Person = {
        name: string;
        photo: StaticImageData;
        role: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
        discord?: string;
    }

      /* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */
    const options = {
        speed: 1000,
        max: 15,
    };

    // TODO: display (a portion of) hash checksum in the back of the card
    const team: Person[] = [
        {
            name: "Dawid Pisarczyk",
            photo: dawid,
            role: "President",
            linkedin: "https://dawidpisarczyk.com/"
        },
        {
            name: "Ojas Arora",
            photo: ojas,
            role: "Vice President",
            linkedin: "https://www.linkedin.com/in/ojas-arora-b62430231/"
        }
        // need to add an alumini section for this lol 
        
        /*{
            name: "Ash",
            photo: ash,
            role: "Social Secretary",
            linkedin: "https://www.linkedin.com/in/ash-k-b83a94203/"
        },
       */                  

    ]

    function calculateHash(p: Person): string {
        var s: string = `${p.name} ${p.photo.toString()} ${p.role} ${p.linkedin} ${p.twitter} ${p.email} ${p.discord}`;
        var hash: string = cryptoModule.createHash('sha256').update(s).digest("hex");
        return hash;
    }

    return (
        <div id="about" className={styles.about}>
            <h1>About</h1>

            <div className={styles.aboutContainer}>
                <div className={styles.upperContainer}>
                    <div className={styles.aboutText}>
                        <p>
                            Founded by a group of freshers in September 2021, the University of Southampton Decentralised Society (dSoc) aims to establish a hub for students and professionals interested in the philosophy of decentralisation. Empowering its members with knowledge, project and research opportunities, the society strives to become a platform for collaboration in the space.
                        </p>

                        <p>
                            In less than a year, dSoc had already reached more than 280 members and hosted six events, making us one of the fastest-growing clubs on campus. We have also established connections with reputable institutions, companies, and other organisations worldwide, with whom we look forward to cooperating.
                        </p>

                    </div>

                    <Image src={dsocEvent} alt="dSoc Event" className={styles.upperImg} priority/>
                </div>

                <div className={styles.lowerContainer}>
                    <Image src={audience} alt="Audience" className={styles.lowerImg} priority/>

                    <div className={styles.aboutText}>
                        <p>
                            We are working hard toward one of our most important goals: becoming a Decentralised Autonomous Organisation (DAO) by making our own blockchain. We believe this step is crucial to evolving into a truly decentralised society.
                        </p>
                        <p>
                            But that&apos;s not all. Apart from the governance use case, our network will open the door to a lot of possibilities: a reward system to motivate each others, an NFT marketplace, a microeconomy, or the tokenisation of virtually anything!
                        </p>

                        <p>
                            Whether you have just heard about blockchain or are an expert in smart contracts, we would love to have you in the society and attend our events! Join our discord server and stay tuned!
                        </p>
                    </div>
                </div>
            </div>

            <h2>Meet the core team</h2>

            <div className={styles.team}>
                {
                    team.map((p, i) =>
                        <div key={i}>
                            <Tilt id="tilter" className="box" options={options}>
                                <div className={styles.flipCard} key={i} onClick={() => window.open(p.linkedin)}>
                                    <div className={styles.fcInner}>
                                        <div className={styles.fcFront}>
                                            <Image src={p.photo} alt={`${p.name} photo`} className={styles.clipCircle} width={150} height={150}/>
                                            <div className={styles.teamCardText}>
                                                <div className={styles.teamCardName}>{p.name}</div>
                                                <div className={styles.teamCardRole}>{p.role}</div>
                                            </div>
                                        </div>
                                        <div className={styles.fcBack}>
                                            <div className={styles.hashGrid}>
                                                {
                                                    calculateHash(p).split("").map((c, i) =>
                                                        <div key={i} className={styles.char}>{c}</div>
                                                    )
                                                }
                                            </div>
                                            
                                            <div className={styles.socialMedia}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default About;
