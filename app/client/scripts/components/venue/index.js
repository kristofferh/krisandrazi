import React from 'react';
import Map from '../map';
import {Row} from '../grid';

let Venue = React.createClass({

    render() {
        return (
            <div>
                <Row className='hey'>
                    <Map />
                    {'Venue'}
                </Row>
            </div>
        );
    }
});

export default Venue;
