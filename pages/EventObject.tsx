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
                {props.data.description}
            </div>
        </div>
    )
}
export default EventObject;