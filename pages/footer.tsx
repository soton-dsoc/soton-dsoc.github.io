import styles from '../styles/Footer.module.css'
import React from 'react';
import configs from '../config'
import Image from 'next/image';

import twitterLogo from '../public/twitter-logo.svg';
import linkedinLogo from '../public/linkedin-logo.svg';
import discordLogo from '../public/discord-logo.svg';
import dsocLogo from '../public/dsoc-logo-white.svg';
import emailLogo from '../public/email.png'

class Footer extends React.Component {

    render() {
        function scrollToElement(id: string) {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    

        return (
            // <div className={styles.Footer}>
            //     <div className={styles.wrapper}>
            //         <div className={styles.top}>
            //             <div className={styles.socialBox}>
            //                 <img alt="" src={twitterLogo.src} onClick={()=> window.open(configs.twitter, "_blank")} className={styles.footerIcon}/>
            //                 <img alt="" src={discordLogo.src} onClick={()=> window.open(configs.discord_invite, "_blank")} className={styles.footerIcon}/>
            //                 <img alt="" src={linkedinLogo.src} onClick={()=> window.open(configs.linkedin, "_blank")} className={styles.footerIcon}/>
            //                 <img alt="" src={emailLogo.src} onClick={()=> window.open(configs.email, "_blank")} className={styles.footerIcon} />
            //             </div>

            //             <img alt="" id={styles.dsocLogo} src={dsocLogo.src} />
            //         </div>

            //         <div className={styles.bottom}>
            //             <div className={styles.footerLeft}>
            //                 <div className={styles.hae}>
                                // <div onClick={ () => scrollToElement("home")} style={{ cursor: "pointer"}}>Home</div>
                                // <div onClick={ () => scrollToElement("events")} style={{ cursor: "pointer"}}>Events</div>
                                // <div onClick={ () => scrollToElement("about")} style={{ cursor: "pointer"}}>About</div>
            //                 </div>
            //                 <div className={styles.external}>
            //                     <div>More</div>
            //                     <div>Newsletter</div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <div className={styles.socialBox}>
                                <Image alt="Twitter" src={twitterLogo} onClick={()=> window.open(configs.twitter, "_blank")} style={{ cursor: "pointer" }} width={24} height={24}/>
                                <Image alt="Discord" src={discordLogo} onClick={()=> window.open(configs.discord_invite, "_blank")} style={{ cursor: "pointer" }} width={24} height={24}/>
                                <Image alt="LinkedIn" src={linkedinLogo} onClick={()=> window.open(configs.linkedin, "_blank")} style={{ cursor: "pointer" }} width={24} height={24}/>
                                <Image alt="Email" src={emailLogo} onClick={()=> window.open(configs.email, "_blank")} style={{ cursor: "pointer" }} width={24} height={24}/>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.pages}>
                                <div onClick={ () => scrollToElement("home")} style={{ cursor: "pointer"}}>Home</div>
                                <div onClick={ () => scrollToElement("events")} style={{ cursor: "pointer"}}>Events</div>
                                <div onClick={ () => scrollToElement("about")} style={{ cursor: "pointer"}}>About</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.top}>
                            <Image src={dsocLogo} alt="dSoc Logo" className={styles.dsocLogo} width={120} height={40}/>
                        </div>
                        <div className={styles.bottom}>
                            <div onClick={ () => window.open("https://dsoc.substack.com/")} style={{ cursor: "pointer"}}>Newsletter</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
