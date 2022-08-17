import './Home.css';
import React from 'react';
import { ReactComponent as DiscordLogo } from './discord-logo.svg'
import configs from '../../config.js'

function Home() {
    return (
        <div className='home'>
            <div className='home-block home-block-title'>
                <div>
                    <div id="subtitle">
                        We are the
                    </div>
                    <div id="title">
                        Decentralised <br></br>
                        Society
                    </div>
                </div>
            </div>

            <div className='home-block home-block-cta'>
                <div className='flex column align-center justify-center'>
                    <a href={configs.discord_invite} target="_blank">
                        <div  className='home-button home-button-join'>
                            Join us
                            <DiscordLogo style={{ height: '20px', marginLeft: '5px' }}></DiscordLogo>
                        </div>
                    </a>

                    <a className='home-button-whatson' style={{ display: 'grid' }} onClick={ () => window._scrollToElement('events') }>
                        <div style={{ gridArea: '1 / 1 / 4 / 2', backgroundColor: '#0066FF', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}></div>
                        <div style={{ gridArea: '1 / 2 / 2 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>

                        <div style={{ gridArea: '2 / 2 / 3 / 3', padding: '5px 0', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                            What's on
                        </div>

                        <div style={{ gridArea: '1 / 3 / 4 / 4', backgroundColor: '#9000A8', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}></div>
                        <div style={{ gridArea: '3 / 2 / 4 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
