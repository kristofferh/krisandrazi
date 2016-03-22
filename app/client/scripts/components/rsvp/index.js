import {default as React, Component} from 'react';
import request from 'superagent';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

import './styles';

export default class RSVP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    getFormData() {
        return {
            name: this.refs.name.value,
            nameError: false,
            email: this.refs.email.value
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.isEmail(this.state.email));
        if (!this.isNotBlank(this.state.name)) {
            this.setState({nameError: 'Name shouldn\'t be blank'});
        }
        this.send();
    }

    handleNameChange(e) {
        let name = e.target.value.trim();
        if (this.isNotBlank(name)) {
            this.setState({nameError: false});
            this.setState({name: e.target.value.trim()});
        } else {
            this.setState({nameError: 'Name shouldn\t be blank'});
        }
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value.trim()});
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
                        <h2>RSVP</h2>
                        <p>{'Let us know if you\'re coming.'}</p>
                        <form className='rsvp-form' onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label className='inline-label' htmlFor='name'>Your name</label>
                                {this.state.nameError ? <span className='error'>{this.state.nameError}</span> : null}
                                <input type='text' ref='name' id='name' className='flat-input' onChange={this.handleNameChange} />
                            </div>
                            <div className='form-group'>
                                <label className='inline-label' htmlFor='email'>Your email</label>
                                <input type='email' id='email' ref='email' className='flat-input' onChange={this.handleEmailChange} />
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
                            <div className='form-group guest'>
                                Are you bringing a guest?
                                <label className='checkbox-inline'>
                                    <input name='guest' type='radio' ref='guestYes'/>Yes
                                </label>
                                <label className='checkbox-inline'>
                                    <input name='guest' type='radio' ref='guestNo' defaultChecked/>No
                                </label>
                            </div>
                            <div className='form-group guest'>
                                <label className='inline-label' htmlFor='guestName'>Guest's name</label>
                                <input type='text' id='guestName' ref='guestName' className='flat-input' />
                            </div>
                            <button type='submit' className='flat-button'>Submit</button>
                        </form>
                    </Column>
                </Row>
            </Slide>
        );
    }
}
