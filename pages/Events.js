import axios from 'axios';
import { useEffect, useState } from 'react';
// import Event from './events/event/Event.js'
// import configs from '../../config';

export default function Events() {

    // const [events, setEvents] = useState(null)

    // useEffect(() => {
    //     axios.get(configs.api.baseUrl + '/api/events?populate=*').then(r => {
    //         setEvents(r.data.data)
    //     })
    // }, [])

    // if (!events) return null

    return (
        <div id="events" style={{ marginTop: '50px' }}>
            <h1>Events</h1>
            {/* <div className='event-list flex column'>
                {
                    events && events.map((e) => 
                        <Event event={e} key={ e.id }></Event>
                    )
                }
            </div> */}
        </div>
    );
}