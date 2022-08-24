import styles from '../styles/Navbar.module.css';
import React, { useEffect, useState } from 'react';
import dsocLogo from '../public/dsoc-logo-white.svg'
import uosLogo from '../public/uos_logo.svg'

function Navbar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.onscroll = (e) => { window.scrollY > 10 ? setScroll(true) : setScroll(false) };
    });

    function scrollToElement(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className={styles.Navbar} style={scroll ? { boxShadow: '0px 5px 20px 0px black', backgroundColor: 'rgba(0, 0, 0, 0.25)' } : undefined}>
                <div className={styles.contentWrapper}>
                    <div className={styles.left}>
                        <img src={dsocLogo.src} onClick={ () => scrollToElement("home") }></img>

                        <div className={styles.pages}>
                            <div onClick={ () => scrollToElement("events") }>Events</div>
                            <div onClick={ () => scrollToElement("about") }>About</div>
                            <div onClick={ () => window.open("https://dsoc.substack.com/")} style={{marginLeft: "35px"}}>Newsletter</div>
                        </div>
                    </div>

                    <div className={styles.right} onClick={ () => window.open("https://www.southampton.ac.uk/")}>
                        <img src={uosLogo.src}></img>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;