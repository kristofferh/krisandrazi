import {default as React, Component} from 'react';
import request from 'superagent';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

import './styles';

export default class RSVP extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getFormData() {
        return {
            name: this.refs.name.value
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.getFormData());
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
                                <input type='text' ref='name' id='name' className='flat-input' />
                            </div>
                            <div className='form-group'>
                                <label className='inline-label' htmlFor='email'>Your email</label>
                                <input type='email' id='email' ref='email' className='flat-input' />
                            </div>
                            <div className='form-group'>
                                Will you be joining us?
                                <label className='checkbox-inline'>
                                    <input name='answer' type='radio' ref='answerYes'/>Yes!
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
                                    <input name='guest' type='radio' ref='guestNo'/>No
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
