import React, { Component, SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import eventsSource from './events.json'

import EventObject from './EventObject';

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
        media: string[]
    }

    var events: Event[] = [];

    function getEvents() {
        for (let i = 0; i < eventsSource.events.length; i++) {

            const e = eventsSource.events[i];
            
            events.push({
                key: i,
                title: e.title,
                date: new Date(e.date),
                location: e.location,
                abstract: e.abstract,
                organisers: e.organisers,
                speakers: e.speakers,
                learningOutcomes: e.learningOutcomes,
                media: e.media
            })
        }
    }

    getEvents();

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
                                <div key={i}>
                                    <EventObject data={e} category="upcoming"/>
                                </div>
                            )
                        }
                </div>

                <div className={styles.past}>
                    <h2>Past Events</h2>
                        {
                            pastEvents.map((e, i) =>
                                <div key={i}>
                                    <EventObject data={e} category="past"/>
                                </div>
                            )
                        }
                </div>

        </div>
    );
}

export default Events;
