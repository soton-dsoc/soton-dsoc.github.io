import { Input, Select, InputWrapper, TextInput, Chips, Chip } from '@mantine/core'
import axios from 'axios'
import { useState, useRef } from 'react'
import configs from '../../../../config'
import './Form.css'
import validator from 'validator'

function Form(props) {

    const [studyAreas, setStudyArea] = useState(['Computer Science', 'Electronics', 'Business', 'Economics', 'Law'])

    const [chips, setChips] = useState([])

    const formName = useRef()
    const formEmail = useRef()
    const formSource = useRef()
    const formSchool = useRef()
    const formExperience = useRef()

    const [formEmailError, setFormEmailError] = useState(false)
    const [formNameError, setFormNameError] = useState(false)
    const [formSourceError, setFormSourceError] = useState(false)
    const [formSchoolError, setFormSchoolError] = useState(false)
    const [formExperienceError, setFormExperienceError] = useState(false)

    const [formSubmitted, setFormSubmitted] = useState(false)

    const register = () => {

        if (!validator.isEmail(formEmail.current.value) || !formEmail.current.value.includes("soton.ac.uk")) {
            setFormEmailError(true)
            return
        }
        if (formName.current.value == "") {
            setFormNameError(true)
            return
        }
        if (formSource.current.value == "") {
            setFormSourceError(true)
            return
        }
        if (formSchool.current.value == "") {
            setFormSchoolError(true)
            return
        }
        if (formExperience.current.value == "") {
            setFormExperienceError(true)
            return
        }


        let payload = {
            data:
            {
                name: formName.current.value,
                email: formEmail.current.value,
                extras: [{
                    question: props.questions[0].text,
                    answers: chips
                }],
                school: formSchool.current.value,
                event: props.eventId,
                source: formSource.current.value,
                experience: formExperience.current.value
            },
            populate:
            {
                event: true
            }
        }


        axios.post(configs.api.baseUrl + '/api/forms', payload).then(r => {
            if (r.status == "201") {
                setFormSubmitted(true)
            }
        })

    }


    return (
        <div className='Form'>
            <div style={ { display: formSubmitted ? 'none' : null } }>
                <TextInput className='form-input'
                    ref={formName}
                    error={formNameError}
                    onChange={() => setFormNameError(false)}
                    required
                    label="Your name"
                    placeholder="Tim Berners-Lee"
                />


                <TextInput className='form-input'
                    ref={formEmail}
                    required
                    error={formEmailError}
                    onChange={() => setFormEmailError(false)}
                    label="Your university email"
                    placeholder="mp3u21@soton.ac.uk"
                />


                <Select className='form-input'
                    ref={formSource}
                    error={formSourceError}
                    onChange={() => setFormSourceError(false)}
                    required
                    label="How did you hear about this event?"
                    placeholder="Pick one"
                    data={['Poster', 'Email', 'Social media', 'Word of mouth']}
                />


                <Select className='form-input'
                    ref={formSchool}
                    error={formSchoolError}
                    onChange={() => setFormSchoolError(false)}
                    required
                    label="What is your field of study?"
                    placeholder="Pick one or type"
                    description="If your area of study is not listed, type it in"
                    searchable
                    creatable
                    getCreateLabel={(query) => `${query}`}
                    onCreate={(query) => setStudyArea((studyAreas) => [...studyAreas, query])}
                    data={studyAreas}
                />

                <Select className='form-input'
                    ref={formExperience}
                    error={formExperienceError}
                    onChange={() => setFormExperienceError(false)}
                    required
                    label="What is your experience with the topic?"
                    placeholder="Pick one"
                    data={['Not familiar', 'Somewhat familiar', 'Very familiar']}
                />

                {
                    props.questions !== null && props.questions.map((q, i) =>
                        <InputWrapper
                            label={q.text}
                            description={q.description}
                            key={i}
                        >
                            {
                                q.type == "Chips" &&
                                <Chips multiple style={{ fontWeight: 400 }} onChange={setChips}>

                                    {
                                        q.options.map((o, j) =>
                                            <Chip value={o} key={j}>{o}</Chip>
                                        )
                                    }
                                </Chips>
                            }
                        </InputWrapper>
                    )
                }

                <div className='event-register'>
                    <div className='event-button' onClick={register}>Register</div>
                </div>
            </div>


            <div style={ { display: formSubmitted ? null : 'none' } }>
                Thank you for registering - you will receive a confirmation email shortly
            </div>
        </div>
    )
}

export default Form