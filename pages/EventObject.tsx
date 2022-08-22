import styles from '../styles/EventObject.module.css';

function EventObject(props: any) {
    return(
    <div className={styles.event} style={{ backgroundColor: `${props.data.colour}`}}>
        <div className={styles.title}>{props.data.title}</div>
        <div>{props.data.date.toUTCString()}</div>
        <div>{props.data.description}</div>
    </div>
    )
}

export default EventObject;