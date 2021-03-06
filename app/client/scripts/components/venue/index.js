import React from 'react';
import Map from '../map';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

let Venue = React.createClass({

    render() {
        return (
            <Slide background='dark' id='venue'>
                <Row className='center-xs content-container'>
                    <Column xs='12' sm='6'>
                        <h2>Venue</h2>
                        <p>We will be partying at one of our favorite restaurants, Glasserie, in the
                        Greenpoint neighborhood of Brooklyn.</p>

                        <p>Cool Fact! The building was originally built in 1860 as
                        a glass factory. You can read the <a href='http://glasserienyc.com/' target='_blank'>whole story on their
                        website</a></p>
                        <p>Our dinner will be held outdoors in a covered brick
                        courtyard, the weather in September should be very comfortable.</p>
                        <p>Cocktail attire is encouraged, so wear whatever makes you
                        feel fancy but you can still dance in.</p>

                        <p>Map to Glasserie below</p>
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
