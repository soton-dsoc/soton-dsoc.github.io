import './Footer.css';
import React from 'react';

import twitterLogo from './twitter-logo.svg';
import linkedinLogo from './linkedin-logo.svg';
import discordLogo from './discord-logo.svg';
import dsocLogo from './soton-dSoc-icon-white.svg';
import EmailForm from './EmailForm';
import { ColorInput } from '@mantine/core';

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <div className='footer-top'>
                    <div className="social-box">
                        <div className="twitter">
                            <img alt="" src={twitterLogo} onClick={()=> window.open("https://twitter.com/SotonDsoc", "_blank")} className="footer-icon" id="twitter-icon" />
                        </div>
                        <div className="discord-box">
                            <img alt="" src={discordLogo} onClick={()=> window.open("https://discord.gg/xxNa7CUE8D", "_blank")} className="footer-icon" id="discord-icon" />
                        </div>
                        <div className="linkedin-box">
                            <img alt="" src={linkedinLogo} onClick={()=> window.open("https://www.linkedin.com/company/dsoc/", "_blank")} className="footer-icon" id="linkedin-icon" />
                        </div>
                    </div>

                    <div className="dsoc-icon">
                        <img alt="" id="dsoc-logo" src={dsocLogo} />
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className="footer-left">
                        <div className="hae">
                            <div onClick={ () => window._scrollTo(0) }>Home</div>
                            <div onClick={ () => window._scrollToElement('about') }>About</div>
                            <div onClick={ () => window._scrollToElement('events') }>Events</div>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="EmailForm">
                            <EmailForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
