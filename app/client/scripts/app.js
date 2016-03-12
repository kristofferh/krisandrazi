import React from 'react';

import '../styles/base';
import Navigation from './components/navigation/';
import Home from './components/home/';
import Info from './components/info/';
import RSVP from './components/rsvp/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Home />
                <Info />
                <RSVP />
            </div>
        );
    }
});

export default App;
