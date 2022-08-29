import { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import eventsSource from './events.json'

import EventObject from './EventObject';
import { StaticImageData } from 'next/image';

function Events() {

    type Event = {
        key: number,
        title: string,
        date: Date,
        description: string,
        colour?: string,
        media?: StaticImageData[]
    }

    var events: Event[] = [];

    for (let i = 0; i < eventsSource.events.length; i++) {

        const e = eventsSource.events[i];

        var mediaJSON: StaticImageData[] = [];

        for (let j = 0; j < e.media.length; j++) {
            const image: StaticImageData = require("../public/" + e.media[j]);
            mediaJSON.push(image);
        }
        
        events.push({
            key: i,
            title: e.title,
            date: new Date(e.date),
            description: e.description,
            media: mediaJSON
        })
    }

    console.log(events);

    var upcomingEvents: Event[] = [];
    var pastEvents: Event[] = [];

    events.map((e) => {
        var today = new Date();

        if (e.date > today) { // future
            upcomingEvents.push(e);
        } else { // past
            pastEvents.push(e);
        }
    });

    upcomingEvents.sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    });

    pastEvents.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
    });

    return (
        <div id="events" className={styles.events} style={{ paddingTop: '70px' }}>
            <h1>Events</h1>
                <div className={styles.upcoming}>
                    <h2 id="upcomingDiv">Upcoming Events</h2>
                        <p style={{ display: `${upcomingEvents.length > 0 ? "none" : "block"}` }}>It seems like there are no events planned right now, please check again soon!</p>
                        {
                            upcomingEvents.map((e) => 
                                <EventObject data={e} category="upcoming" className="collapsible"/>
                            )
                        }
                </div>

                <div className={styles.past}>
                    <h2>Past Events</h2>
                        {
                            pastEvents.map((e) => 
                                <EventObject data={e} category="past" className="collapsible"/>
                            )
                        }
                </div>

        </div>
    );
}

export default Events;
