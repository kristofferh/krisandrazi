import React from 'react';
import Slide from '../slide';

let Home = React.createClass({

    render() {
        return (
            <Slide className='slide--full-height' rowClassNames='center-xs middle-xs'>
                {'Home'}
            </Slide>
        );
    }
});

export default Home;
