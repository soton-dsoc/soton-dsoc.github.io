import React, { useEffect } from 'react';
import './Calendar.css'
import { atcb_init } from 'add-to-calendar-button';
import moment from 'moment';

const AddToCalendar = (props) => { // https://github.com/jekuer/add-to-calendar-button

    useEffect(() => atcb_init());

    let start = moment(props.event.startDatetime).format('MM-DD-YYYYTHH:mm')
    let end = moment(props.event.endDatetime).format('MM-DD-YYYYTHH:mm')

    const event = {
        name: props.event.title,
        description: "Decentralised Society",
        startDate: start,
        endDate: end,
        location: "Somewhere over the rainbow"
    }

    const defaultConfig = {
        event: {
            "@context": "https://schema.org",
            "@type": "Event",
            ...event
        },
        label: "Add to Calendar",
        options: [
            "Apple",
            "Google",
            "Outlook.com",
            "iCal"
        ],
        timeZone: "Europe/London",
        timeZoneOffset: "+00:00",
        iCalFileName: "dSoc-event"
    }

    return (
        <div className='atcb'>
            <script type="application/ld+json">
                {JSON.stringify(defaultConfig)}
            </script>
        </div>
    );
}

export default AddToCalendar;