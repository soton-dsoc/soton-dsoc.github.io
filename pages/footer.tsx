import styles from '../styles/Footer.module.css'
import React from 'react';
import configs from '../config'

import twitterLogo from '../public/twitter-logo.svg';
import linkedinLogo from '../public/linkedin-logo.svg';
import discordLogo from '../public/discord-logo.svg';
import dsocLogo from '../public/dsoc-logo-white.svg';
// import EmailForm from './EmailForm';
import { ColorInput } from '@mantine/core';
import { config } from 'process';

class Footer extends React.Component {

    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles["footer-top"]}>
                    <div className={styles["social-box"]}>
                        <div className={styles.twitter}>
                            <img alt="" src={twitterLogo.src} onClick={()=> window.open(configs.twitter, "_blank")} className={styles["footer-icon"]} id={styles["twitter-icon"]} />
                        </div>
                        <div className={styles["discord-box"]}>
                            <img alt="" src={discordLogo.src} onClick={()=> window.open(configs.discord_invite, "_blank")} className={styles["footer-icon"]} id={styles["discord-icon"]} />
                        </div>
                        <div className={styles["linkedin-box"]}>
                            <img alt="" src={linkedinLogo.src} onClick={()=> window.open(configs.linkedin, "_blank")} className={styles["footer-icon"]} id={styles["linkedin-icon"]} />
                        </div>
                    </div>

                    <div className={styles["dsoc-icon"]}>
                        <img alt="" id={styles["dsoc-logo"]} src={dsocLogo} />
                    </div>
                </div>

                <div className={styles['footer-bottom']}>
                    <div className={styles["footer-left"]}>
                        <div className={styles.hae}>
                            {/* <div onClick={ () => window._scrollTo(0) }>Home</div>
                            <div onClick={ () => window._scrollToElement('about') }>About</div>
                            <div onClick={ () => window._scrollToElement('events') }>Events</div> */}
                            <div>Home</div>
                            <div>About</div>
                            <div>Events</div>
                        </div>
                    </div>

                    <div className={styles["footer-right"]}>
                        {/* <div className="EmailForm">
                            <EmailForm />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;