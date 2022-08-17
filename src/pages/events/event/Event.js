import './Event.css'

import { createRef, useEffect, useRef, useState } from 'react';

import arrow from './arrow.svg'
import { marked } from 'marked';

import Form from './form/Form.js'
import AddToCalendar from './calendar/Calendar';
import configs from '../../../config';

function Event(props) {

    const [open, setOpen] = useState(true)
    let _event = props.event.attributes

    let date = new Date(_event.startDatetime)
    let time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

    let weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
    let day = date.toLocaleDateString('en-GB', { day: '2-digit' })
    let month = date.toLocaleDateString('en-GB', { month: 'short' })

    const body = createRef()
    const objectives = createRef()
    const speakers = createRef()
    const organisers = createRef()

    useEffect(() => {
        body.current.innerHTML = marked.parse(_event.body)
        objectives.current.innerHTML = _event.objectives.replaceAll("\n", "<br>")
        speakers.current.innerHTML = _event.speakers.replaceAll("\n", "<br>")
        organisers.current.innerHTML = _event.organisers.replaceAll("\n", "<br>")
    })

    return (
        <div className='event' style={{ position: 'relative', background: 'linear-gradient(90deg, #222222, #464747' }}>
            <div className='event-snackbar flex row align-center justify-between' onClick={() => setOpen(!open)} style={{ background: _event.background }}>
                <div className='event-snackbar-body'>
                    <div className='event-title'>
                        {_event.title}
                    </div>
                    <div className='event-subtitle'>
                        {month} {day} ({weekday}) @ {time}
                    </div>
                </div>

                <div className='event-snackbar-toggle'>
                    <img src={arrow} style={{ transform: open ? 'rotate(90deg)' : null }}></img>
                </div>
            </div>

            <div className='event-body-wrapper' style={open ? { maxHeight: '5000px' } : { maxHeight: 0, padding: 0 }}>

                <div className='event-body flex'>
                    <div className='body-left' style={{ flex: 7 }}>
                        <div ref={body} className='event-abstract event-container'>

                        </div>

                        <div className='event-images event-container'>
                            {
                                _event.images.data && _event.images.data.map(i =>
                                    <img key={i.id} src={configs.api.baseUrl + i.attributes.url}></img>
                                )
                            }
                        </div>
                    </div>
                    <div className='body-right event-container' style={{ flex: 3, marginLeft: '50px' }}>
                        <div className='event-date flex column' style={{ justifyContent: 'left' }}>
                            <div className='event-title'>Time & place</div>
                            <span>{month} {day} ({weekday}) @ {time}</span>
                            <span>{_event.location}</span>
                            <AddToCalendar event={_event}></AddToCalendar>
                        </div>

                        <div className='event-organisers'>
                            <div className='event-title'>Organisers</div>
                            <div ref={organisers}></div>
                        </div>

                        <div className='event-guests'>
                            <div className='event-title'>Speakers</div>
                            <div ref={speakers}></div>
                        </div>

                        <div className='event-objectives'>
                            <div className='event-title'>Learning objectives</div>
                            <div ref={objectives}></div>
                        </div>
                    </div>
                </div>

                <div>
                    <Form questions={_event.questions} eventId={props.event.id} />
                </div>
            </div>
        </div>
    )
}

export default Event