import configs from '../config'
import styles from '../styles/Home.module.css'
import discordLogo from '../public/discord-logo.svg'
import classnames from 'classnames';
import { homedir } from 'os';

function Home() {
    
    if (typeof window !== "undefined") {
        let homeDiv = document.getElementById("home");

        window.addEventListener('scroll', () => {

            let scrollValue = window.scrollY;
            if (homeDiv) {
                let scaleValue = Math.max(1, 0.9 + scrollValue / 1000);
                let blurValue = 0;

                if (scaleValue > 7) {
                    scaleValue = 1;
                }

                if (scrollValue > 100) {
                    blurValue = scrollValue / 150;
                }

                // if (blurValue < )
                homeDiv.style.transform = `scale(${scaleValue})`;
                homeDiv.style.filter = `blur(${blurValue}px)`;
                console.log(scrollValue);
            }
        })
    }

    return (
        <div id="home" className={styles.home}>
            {/* <div className={styles["home-inner"]}> */}
                <div className={classnames(styles["home-block"], styles["home-block-title"])}>
                    <div>
                        <div id={styles.subtitle}>
                            We are the
                        </div>
                        <div id={styles.title}>
                            Decentralised <br></br>
                            Society
                        </div>
                    </div>
                </div>

                <div className={classnames(styles["home-block"], styles["home-block-cta"])}>
                    <div className={styles["button-wrapper"]}>
                        <a href={configs.discord_invite} target="_blank">
                            <div className={classnames(styles["home-button"], styles["home-button-join"])}>
                                Join us
                                <img src={discordLogo.src} style={{ height: '20px', marginLeft: '10px' }}/>
                            </div>
                        </a>

                        <a className={styles["home-button-whatson"]} style={{display: 'grid'}}>
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
            {/* </div> */}
        </div>
    );
}

export default Home;