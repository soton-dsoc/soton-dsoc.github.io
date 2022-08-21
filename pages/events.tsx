import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
// import Event from './event/Event.js'
import configs from '../config';
import classNames from 'classnames';
import { ColorFormat } from '@mantine/core/lib/components/ColorPicker/types';
import EventObject from './EventObject';

function Events() {

    type Event = {
        title: string,
        date: Date,
        description: string,
        colour: string,
    }

    function determineSection(date: Date) {
        var today = new Date()
        return date > today ? "upcoming" : "past"
    }

    const events: Event[] = [
        {
            title: "Big Event",
            date: new Date("2022-10-31T22:00:00"),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            colour: "#050433"
        },
        {
            title: "Best Event Ever",
            date: new Date("2020-11-15T20:30:00"),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            colour: "#f405d3"
        }
    ]

    var upcomingEvents: Event[] = [];
    var pastEvents: Event[] = [];

    events.map((e) => {
        var today = new Date();

        if (e.date > today) { // future
            upcomingEvents.push(e);
        } else { // past
            pastEvents.push(e);
        }
    })

    return (
        <div id="events" className={styles.events} style={{ paddingTop: '70px' }}>
            <h1>Events</h1>
                <div className={styles.upcoming}>
                    <h2>Upcoming Events</h2>
                        {
                            upcomingEvents.map((e) => 
                                <EventObject data={e}/>
                            )
                        }
                </div>

                <div className={styles.past}>
                    <h2>Past Events</h2>
                        {
                            pastEvents.map((e) => 
                                <EventObject data={e}/>
                            )
                        }
                </div>

        </div>
    );
}

export default Events;
