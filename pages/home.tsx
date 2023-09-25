import configs from '../config'
import styles from '../styles/Home.module.css'
import discordLogo from '../public/discord-logo.svg'
import Image from 'next/image'
import { useEffect } from 'react';

function Home() {

    function scrollToElement(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    useEffect(() => {
        if (screen.width > 1000) {
            let homeDiv = document.getElementById("home");

            window.addEventListener('scroll', () => {

                let scrollValue = window.scrollY;
                if (homeDiv) {
                    let scaleValue = Math.max(1, 0.8 + scrollValue / 1000);
                    let blurValue = 0;

                    if (scaleValue > 1.7) {
                        homeDiv.style.visibility = "hidden";
                    } else {
                        homeDiv.style.visibility = "visible";
                    }

                    if (scrollValue > 100) {
                        blurValue = scrollValue / 150;
                    }

                    homeDiv.style.transform = `scale(${scaleValue})`;
                    homeDiv.style.filter = `blur(${blurValue}px)`;
                    // console.log(scaleValue);
                }
            })
        }
    })

    return (
        // <div className={styles.homeWrapper}>
        <div id="home" className={styles.home}>
            <div className={styles.homeBlockText}>
                <div>
                    <div id="subtitle" className={styles.subtitle}>
                        We are the
                    </div>
                    <div id="title" className={styles.title}>
                        Decentralised <br></br>
                        Society
                    </div>
                </div>
            </div>

            <div className={styles.homeBlockBtns}>
                <div className={styles.buttonWrapper}>
                    <a target="_blank" rel="noopener noreferrer" href={configs.discord_invite}>
                        <div className={styles.homeBtnJoin}>
                            Join us
                            <Image alt="" src={discordLogo.src} className={styles.discordLogo}/>
                        </div>
                    </a>

                    <a onClick={ () => scrollToElement("events")} className={styles.homeBtnWhatsOn} style={{display: 'grid'}}>
                        <div style={{ gridArea: '1 / 1 / 4 / 2', backgroundColor: '#0066FF', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}></div>
                        <div style={{ gridArea: '1 / 2 / 2 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>

                        <div style={{ gridArea: '2 / 2 / 3 / 3', padding: '5px 0', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                            What&apos;s on
                        </div>

                        <div style={{ gridArea: '1 / 3 / 4 / 4', backgroundColor: '#9000A8', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}></div>
                        <div style={{ gridArea: '3 / 2 / 4 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>
                    </a>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Home;