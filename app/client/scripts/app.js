import React from 'react';

import '../styles/base';
import Navigation from './components/navigation/';
import Home from './components/home/';
import Venue from './components/venue/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Home />
                <Venue />
            </div>
        );
    }
});

export default App;
