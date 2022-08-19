import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
// import Event from './event/Event.js'
import configs from '../config';
import classNames from 'classnames';

function Events() {

    const [events, setEvents] = useState(null)

    const currentDate = new Date()

    // useEffect(() => {
    //     axios.get(configs.api.baseUrl + '/api/events?populate=*').then(r => {
    //         setEvents(r.data.data)
    //     })
    // }, [])

    return (
        <div id="events" style={{ marginTop: '50px' }}>
            <h1>Current Events</h1>

            <div className={classNames(styles["event-list"], styles.flex, styles.column)}>
                {/* {
                    events && events.filter(e => new Date(e.attributes.endDatetime) > currentDate)
                        .sort((a, b) => {
                        return new Date(b.attributes.startDatetime) - new Date(a.attributes.startDatetime)
                    })
                        .map((e, i) =>
                            <Event event={e} key={i} open={i == 0}></Event>
                        )
                } */}
            </div>

            <h1>Past Events</h1>

            <div className={classNames(styles["event-list"], styles.flex, styles.column)}>
                {/* {
                    events && events.filter(e => new Date(e.attributes.endDatetime) < currentDate)
                        .sort((a, b) => {
                        return new Date(b.attributes.startDatetime) - new Date(a.attributes.startDatetime)
                    })
                        .map((e, i) =>
                            <Event event={e} key={i} open={ false }></Event>
                        )
                } */}
            </div>
        </div>
    );
}

export default Events;
