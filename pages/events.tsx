import React, { Component, SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import eventsSource from './events.json'

import EventObject from './EventObject';
import { StaticImageData } from 'next/image';

function Events() {

    type Event = {
        key: number,
        title: string,
        date: Date,
        location: string,
        abstract: string[],
        organisers: string[],
        speakers: string[],
        learningOutcomes: string[],
        media: StaticImageData[]
    }

    var events: Event[] = [];
    var states: Map<number, [boolean, React.Dispatch<SetStateAction<boolean>>]> = new Map() // a map between the event key (k) and the pair of state variables (v)

    function getEvents() {
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
                location: e.location,
                abstract: e.abstract,
                organisers: e.organisers,
                speakers: e.speakers,
                learningOutcomes: e.learningOutcomes,
                media: mediaJSON
            })
        }
    }

    function generateStates() {
        for (let i = 0; i < events.length; i++) {
            const [eventState, setState] = React.useState(false);
            states.set(events[i].key, [eventState, setState])
        }
    }

    function toggleEvent(key: number) {
        const pair = states.get(key);

        const eventState = pair?.[0];
        const setState = pair?.[1];
        
        if (eventState != undefined && setState != undefined) {
            setState(!eventState);
        }
    }
 
    function updateStates(key: number) {
        toggleEvent(key);

        for (let i = 0; i < events.length; i++) {
            const pair = states.get(i);

            const eventState = pair?.[0];
            const setState = pair?.[1];

            if (eventState == true && setState && i != key) {
                setState(false);
            }
        }
    }

    function getState(key: number): boolean {
        const pair = states.get(key);
        const eventState = pair?.[0];
        if (eventState) return eventState
        return false;
    }

    getEvents();
    generateStates();

    var upcomingEvents: Event[] = [];
    var pastEvents: Event[] = [];

    function categoriseEvents() {

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
    }

    categoriseEvents();

    return (
        <div id="events" className={styles.events} style={{ paddingTop: '70px' }}>
            <h1>Events</h1>
                <div className={styles.upcoming}>
                    <h2 id="upcomingDiv">Upcoming Events</h2>
                        <p style={{ display: `${upcomingEvents.length > 0 ? "none" : "block"}` }}>It seems like there are no events planned right now, please check again soon!</p>
                        {
                            upcomingEvents.map((e, i) =>
                                <div key={i} onClick={ () => updateStates(e.key) }>
                                    <EventObject data={e} category="upcoming" active={getState(e.key)}/>
                                </div>
                            )
                        }
                </div>

                <div className={styles.past}>
                    <h2>Past Events</h2>
                        {
                            pastEvents.map((e, i) =>
                                <div key={i} onClick={ () => updateStates(e.key) }>
                                    <EventObject data={e} category="past" active={getState(e.key)}/>
                                </div>
                            )
                        }
                </div>

        </div>
    );
}

export default Events;
