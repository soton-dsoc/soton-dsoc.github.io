import configs from '../config'
import styles from '../styles/Home.module.css'
import classnames from 'classnames';

function Home() {
    return (
        <div className={styles.home}>
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
                <div className={classnames(styles.flex, styles.column, styles["align-center"], styles["justify-center"])}>
                    <a href={configs.discord_invite} target="_blank">
                        <div className={classnames(styles["home-button"], styles["home-button-join"])}>
                            Join us
                            {/* <DiscordLogo style={{ height: '20px', marginLeft: '5px' }}></DiscordLogo> */}
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
        </div>
    );
}

export default Home;