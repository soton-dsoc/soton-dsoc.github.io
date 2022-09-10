import Image, { StaticImageData } from 'next/image';
import styles from '../styles/EventObject.module.css';

function EventObject(props: any) {

    return(
        // if the event is upcoming, display it with its assigned colour
        // <div className={styles.eventBox} style={{ background: `${props.category === "upcoming" ? props.data.colour : ""}`}}>
        
        // using the blue-pink gradient (if upcoming) might be better to stick to the button colours
        <div className={styles.wrapper}>
            <div className={styles.box} style={{ background: `${props.category === "upcoming" ? "linear-gradient(90deg, #9000A8, #0066FF)" : ""}`}}>
                <div className={styles.title}>{props.data.title}</div>
                <div className={styles.date}>{props.data.date.toUTCString()}</div>
                {/* <div className={styles.description}>{props.data.description}</div> */}
            </div>
            <div className={`${styles.collapsible} ${props.active ? styles.active : ""}`}>
                <div className={styles.left}>
                    <div className={styles.abstract}>
                        <div className={styles.title}>Abstract</div>
                        {
                            props.data.abstract.map((s: string, i: number) =>
                                <p key={i}>{s}</p>
                            )
                        }
                    </div>
                    <div className={styles.media}>
                        {
                            props.data.media.map((m: string, i: number) => 
                                <div className={styles.imageContainer} key={i}>
                                    <Image className={styles.image} src={m} style={{ borderRadius: "10px"}} alt=""></Image>
                                </div>
                            )
                        }
                    </div>
                    <div style={{ display: `${props.category === "past" ? "block" : "none"}`}}>
                        <p>This event has passed</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.dateAndLocation}>
                        <div className={styles.title}>Date and Location</div>
                        <p>{props.data.date.toUTCString()}</p>
                        <p>{props.data.location}</p>
                    </div>
                    <div className={styles.organisers}>
                        <div className={styles.title}>Organisers</div>
                        {
                            props.data.organisers.map((organiser: string, i: number) =>
                                <p key={i}>{organiser}</p>
                            )
                        }  
                    </div>
                    <div className={styles.speakers}>
                        <div className={styles.title}>Speakers</div>
                        {
                            props.data.speakers.map((speaker: string, i: number) => 
                                <p key={i}>{speaker}</p>
                            )
                        }
                    </div>
                    <div className={styles.learningOutcomes}>
                        <div className={styles.title}>Learning Outcomes</div>
                        {
                            props.data.learningOutcomes.map((outcome: string, i: number) => 
                                <p key={i}>{outcome}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventObject;