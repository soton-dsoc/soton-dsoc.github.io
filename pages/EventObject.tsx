import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/EventObject.module.css';

function EventObject(props: any) {

    const eventData = props.data;
    const [ active, setActive ] = React.useState(false);

    const title: string = eventData ? eventData.title : "";
    const date: string = eventData ? eventData.date.toString() : "";
    const location: string = eventData ? eventData.location : "";
    const abstract: string[] = eventData ? eventData.abstract : [];
    const organisers: string[] = eventData ? eventData.organisers : [];
    const speakers: string[] = eventData ? eventData.speakers : [];
    const learningOutcomes: string[] = eventData ? eventData.learningOutcomes : [];
    const media = eventData ? eventData.media : [];

    return(
        <div className={styles.wrapper}>
            <div className={styles.box} style={{ background: `${props.category === "upcoming" ? "linear-gradient(90deg, #9000A8, #0066FF)" : ""}`}} onClick={() => setActive(!active)}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{date}</div>
            </div>
            <div className={`${styles.collapsible} ${active ? styles.active : ""}`}>
                <div className={styles.left}>
                    <div className={styles.abstract}>
                        <div className={styles.title}>Abstract</div>
                        {
                            abstract.map((s: string, i: number) =>
                                <p key={i}>{s}</p>
                            )
                        }
                    </div>
                    <div className={styles.media}>
                        {
                            media.map((m: string, i: number) => 
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
                        <p>{date}</p>
                        <p>{location}</p>
                    </div>
                    <div className={styles.organisers}>
                        <div className={styles.title}>Organisers</div>
                        {
                            organisers.map((organiser: string, i: number) =>
                                <p key={i}>{organiser}</p>
                            )
                        }  
                    </div>
                    <div className={styles.speakers}>
                        <div className={styles.title}>Speakers</div>
                        {
                            speakers.map((speaker: string, i: number) => 
                                <p key={i}>{speaker}</p>
                            )
                        }
                    </div>
                    <div className={styles.learningOutcomes}>
                        <div className={styles.title}>Learning Outcomes</div>
                        {
                            learningOutcomes.map((outcome: string, i: number) => 
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