import {default as React, Component} from 'react';
import request from 'superagent';
import classNames from 'classnames';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

import './styles';

export default class RSVP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            attending: true,
            guest: false,
            guestName: null
        };

        this.errors = false;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.validateNameChange = this.validateNameChange.bind(this);
        this.validateEmailChange = this.validateEmailChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.validateNameChange()) {
            this.send();
        }
    }

    handleNameChange(e) {
        let name = e.target.value.trim();
        if (this.isNotBlank(name)) {
            this.setState({nameError: false});
        }
        this.setState({name: name});
    }

    validateNameChange() {
        if (!this.isNotBlank(this.state.name)) {
            this.setState({nameError: 'Name shouldn\'t be blank'});
            return false;
        }
        return true;
    }

    validateEmailChange() {
        if (!this.isEmail(this.state.email)) {
            this.setState({emailError: 'That email doesn\'t look right'});
            return false;
        }
        return true;
    }

    handleGuestChange(e) {
        let el = e.target;
        if (el.id === 'guestYes') {
            this.setState({guest: true});
        } else {
            this.setState({guest: false});
        }
    }

    handleEmailChange(e) {
        let email = e.target.value.trim();
        if (this.isEmail(email)) {
            this.setState({emailError: false});
        }
        this.setState({email: email});
    }

    isNotBlank(str) {
        return !!(str.trim() !== '');
    }

    isEmail(email) {
        return /(.+)@(.+){2,}\.(.+){2,}/i.test(email);
    }

    send() {
        // Make the request
        request
            .post('/rsvp')
            .type('form')
            .send(this.state)
            .end(function(err, res) {

                if (err) {
                    console.log('something got fucked')
                } else {
                    // Success!
                    console.log('cool');
                }
            });
    }

    render() {
        return (
            <Slide background='dark'>
                <Row className='center-xs content-container'>
                    <Column xs='12' sm='8'>
                        <h2>{'RSVP'}</h2>
                        <p>{'Please let us know if you\'re coming by September 16.'}</p>
                        <form className='rsvp-form' onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label className='inline-label' htmlFor='name'>{'Your name:'}</label>
                                {this.state.nameError ? <span className='error'>{this.state.nameError}</span> : null}
                                <input type='text' id='name' className='flat-input' onBlur={this.validateNameChange} onChange={this.handleNameChange} />
                            </div>
                            <div className='form-group'>
                                <label className='inline-label' htmlFor='email'>{'Your email:'}</label>
                                {this.state.emailError ? <span className='error'>{this.state.emailError}</span> : null}
                                <input type='email' id='email' className='flat-input' onBlur={this.validateEmailChange} onChange={this.handleEmailChange} />
                            </div>
                            <div className='form-group form-group--label'>
                                <span className='radio-group-label'>{'Will you be joining us?'}</span>
                                <div className='radio-group'>
                                    <label className='checkbox-label'>
                                        <input name='attending' type='radio' id='attendingYes' defaultChecked/><span className='inner-label'>{'Yes!'}</span>
                                    </label>
                                    <label className='checkbox-label'>
                                        <input name='attending' type='radio' id='answerNo'/><span className='inner-label' htmlFor='attendingYes'>{'No :('}</span>
                                    </label>
                                </div>
                            </div>
                            <div className='form-group--conditional form-group--label'>
                                <div className='form-group form-group--label guest'>
                                    <span className='radio-group-label'>{'Are you bringing a guest?'}</span>
                                    <div className='radio-group'>
                                        <label className='checkbox-label'>
                                            <input name='guest' type='radio' id='guestYes' onChange={this.handleGuestChange} value='yes'/><span className='inner-label'>{'Yes'}</span>
                                        </label>
                                        <label className='checkbox-label'>
                                            <input name='guest' type='radio' id='guestNo' defaultChecked onChange={this.handleGuestChange} value='no'/><span className='inner-label'>{'No'}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className={classNames('form-group form-group--conditional', 'guest', {'closed': !this.state.guest})}>
                                    <label className='inline-label' htmlFor='guestName'>{'Guest\'s name:'}</label>
                                    <input type='text' id='guestName' ref='guestName' className='flat-input' />
                                </div>
                            </div>
                            <button type='submit' className='flat-button'>{'Submit →'}</button>
                        </form>
                    </Column>
                </Row>
            </Slide>
        );
    }
}
