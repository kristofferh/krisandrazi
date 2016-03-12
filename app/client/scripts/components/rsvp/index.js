import {default as React, Component} from 'react';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

export default class RSVP extends Component {

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        return (
            <Slide background='dark'>
                <Row className='center-xs'>
                    <Column xs='12' sm='6'>
                        <h2>RSVP</h2>
                        <p>{'Let us know if you\'re coming.'}</p>
                        <form className='commentForm' onSubmit={this.handleSubmit}>
                            <input type='text' placeholder='Your name' />
                            <input type='text' placeholder='Say something...' />
                            <input type='submit' value='Post' />
                        </form>
                    </Column>
                </Row>
            </Slide>
        );
    }
}