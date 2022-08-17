import './EmailForm.css';
import React from 'react';

import planeLogo from './Exclude.svg';

class EmailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form action="">
                <div className="everything">
                        <div className="text-subscribe">
                            <label>
                                Subscribe to our newsletter
                            </label>
                        </div>
                    <div className="form-n-button">
                        <div className="form-newsletter">
                            <input onChange={this.handleChange} id="email-newsletter" name="email-newsletter" placeholder="Enter your email address" type="email"/>
                        </div>
                        {/* <div className="static-button-div"> */}
                            <div className={this.state.value ? "button-shown" : "button-hidden"}>
                                <input id="paper-plane" src={planeLogo} type="image"/>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </form>
        );
    };
};

export default EmailForm;