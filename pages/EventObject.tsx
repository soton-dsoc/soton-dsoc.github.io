import styles from '../styles/EventObject.module.css';
import { Button, Group, Card, Container, Grid, Badge, Paper, Title, Text, Space, TypographyStylesProvider, Image, List } from '@mantine/core';

function EventObject(props: any) {
    return(
    // if the event is upcoming, display it with its assigned colour
    <div className={styles.eventBox} style={{ background: `${props.category === "upcoming" ? props.data.colour : ""}`}}>
        <div className={styles.title}>{props.data.title}</div>
        <div>{props.data.date.toUTCString()}</div>
        <div>{props.data.description}</div>
    </div>
    )
}
export default EventObject;