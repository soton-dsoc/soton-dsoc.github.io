import styles from '../styles/Footer.module.css'
import React from 'react';
import configs from '../config'

import twitterLogo from '../public/twitter-logo.svg';
import linkedinLogo from '../public/linkedin-logo.svg';
import discordLogo from '../public/discord-logo.svg';
import dsocLogo from '../public/dsoc-logo-white.svg';
import emailLogo from '../public/email.png'
// import EmailForm from './EmailForm';
import { ColorInput } from '@mantine/core';
import { config } from 'process';

class Footer extends React.Component {

    render() {
        function scrollToElement(id: string) {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    

        return (
            <div className={styles.Footer}>
                <div className={styles.wrapper}>
                    <div className={styles.footerTop}>
                        <div className={styles.socialBox}>
                            <img alt="" src={twitterLogo.src} onClick={()=> window.open(configs.twitter, "_blank")} className={styles.footerIcon}/>
                            <img alt="" src={discordLogo.src} onClick={()=> window.open(configs.discord_invite, "_blank")} className={styles.footerIcon}/>
                            <img alt="" src={linkedinLogo.src} onClick={()=> window.open(configs.linkedin, "_blank")} className={styles.footerIcon}/>
                            <img alt="" src={emailLogo.src} onClick={()=> window.open(configs.email, "_blank")} className={styles.footerIcon} />
                        </div>

                        <img alt="" id={styles.dsocLogo} src={dsocLogo.src} />
                    </div>

                    <div className={styles.footerBottom}>
                        <div className={styles.footerLeft}>
                            <div className={styles.hae}>
                                <div onClick={ () => scrollToElement("home")} style={{ cursor: "pointer"}}>Home</div>
                                <div onClick={ () => scrollToElement("events")} style={{ cursor: "pointer"}}>Events</div>
                                <div onClick={ () => scrollToElement("about")} style={{ cursor: "pointer"}}>About</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
