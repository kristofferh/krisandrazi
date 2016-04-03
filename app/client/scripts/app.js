import React from 'react';

import '../styles/base';
import Navigation from './components/navigation/';
import Home from './components/home/';
import Info from './components/info/';
import Venue from './components/venue/';
import RSVP from './components/rsvp/';
import Footer from './components/footer/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Home />
                <Info />
                <Venue />
                <RSVP />
                <Footer />
            </div>
        );
    }
});

export default App;
