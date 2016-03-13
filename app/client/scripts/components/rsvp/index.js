import {default as React, Component} from 'react';
import request from 'superagent';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

export default class RSVP extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getFormData() {
        return {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value
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
                            <input type='text' ref='firstName' placeholder='First Name' />
                            <input type='text' ref='lastName' placeholder='Last Name' />
                            <button type='submit'>Submit</button>
                        </form>
                    </Column>
                </Row>
            </Slide>
        );
    }
}
