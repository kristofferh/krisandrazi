import React from 'react';
import Slide from '../slide';

import crest from './crested.svg';

let Home = React.createClass({

    render() {
        return (
            <Slide className='slide--full-height' rowClassNames='center-xs middle-xs'>
                <span className='home-stuff' dangerouslySetInnerHTML={{__html: crest}} />
            </Slide>
        );
    }
});

export default Home;
