import styles from '../styles/EventObject.module.css';

function EventObject(props: any) {
    return(
        // if the event is upcoming, display it with its assigned colour
        <div className={styles.eventBox} style={{ background: `${props.category === "upcoming" ? props.data.colour : ""}`}}>
            <div className={styles.title}>{props.data.title}</div>
            <div>{props.data.date.toUTCString()}</div>
            <div className={styles.description}>{props.data.description}</div>
        </div>
    )
}
export default EventObject;