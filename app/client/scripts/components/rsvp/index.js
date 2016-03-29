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
            guest: false
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
                <Row className='center-xs'>
                    <Column xs='12' sm='6'>
                        <h2>{'RSVP'}</h2>
                        <p>{'Let us know if you\'re coming.'}</p>
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
                            <div className='form-group'>
                                Will you be joining us?
                                <label className='checkbox-inline'>
                                    <input name='answer' type='radio' ref='answerYes' defaultChecked/>Yes!
                                </label>
                                <label className='checkbox-inline'>
                                    <input name='answer' type='radio' ref='answerNo'/>Sorry, can't make it :(
                                </label>
                            </div>
                            <div className='form-group--conditional'>
                                <div className='form-group guest'>
                                    {'Are you bringing a guest?'}
                                    <label className='checkbox-inline'>
                                        <input name='guest' type='radio' id='guestYes' onChange={this.handleGuestChange} value='yes'/>{'Yes'}
                                    </label>
                                    <label className='checkbox-inline'>
                                        <input name='guest' type='radio' id='guestNo' defaultChecked onChange={this.handleGuestChange} value='no'/>{'No'}
                                    </label>
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
