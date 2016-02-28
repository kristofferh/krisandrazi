import React from 'react';

import '../styles/base';
import Home from './components/home/';
import Venue from './components/venue/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Home />
                <Venue />
            </div>
        );
    }
});

export default App;
