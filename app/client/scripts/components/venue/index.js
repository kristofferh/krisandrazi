import React from 'react';
import Map from '../map';
import Slide from '../slide';

let Venue = React.createClass({

    render() {
        return (
            <Slide background='#000' className='slide--full-height slide--full-width'>
                <Map />
                {'Venue'}
            </Slide>
        );
    }
});

export default Venue;
