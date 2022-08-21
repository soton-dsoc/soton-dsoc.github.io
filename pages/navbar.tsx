import styles from '../styles/Navbar.module.css';
import React, { useState } from 'react';
import dsocLogo from '../public/dsoc-logo-white.svg'
import uosLogo from '../public/uos_logo.svg'
import juan from '../public/juan.jpg'

function Navbar() {

    const [scroll, setScroll] = useState(false)

    // window.onscroll = (e) => {
    //     if (window.scrollY > 10) {
    //         setScroll(true)
    //     }

    //     else {
    //         setScroll(false)
    //     }
    // }

    return (
        <div className={styles.Navbar} style={scroll ? { boxShadow: '0px 5px 20px 0px black', backgroundColor: 'rgba(0, 0, 0, 0.25)' } : undefined}>
            <div className={styles['navbar-content-wrapper']}>
                <div className={styles.left}>
                    <img src={dsocLogo.src} onClick={ () => window._scrollTo(0) }></img>

                    <div className={styles.pages}>
                        {/* <div onClick={ () => window._scrollToElement('about') }>About</div>
                        <div onClick={ () => window._scrollToElement('events') }>Events</div> */}
                        <div>About</div>
                        {/* <div>Contact</div> */}
                    </div>
                </div>

                <div className={styles.right}>
                    <img src={uosLogo.src}></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar;