import React from 'react';
import Map from '../map';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

let Venue = React.createClass({

    render() {
        return (
            <Slide background='dark' className='slide--full-height slide--full-width'>
                <Row className='center-xs'>
                    <Column xs='12' sm='6'>
                        <h1>Party!</h1>
                        <p>{'Hey! We\'re getting married! And to celebrate we are throwing a party.'}</p>
                        <p>There will be drinks, dinner, and dancing &mdash; but none of that boring ceremony stuff</p>
                        <p>{'Cocktail attire encouraged'}</p>
                    </Column>
                </Row>
                <Row>
                    <Map />
                </Row>
            </Slide>
        );
    }
});

export default Venue;
