import React from 'react';

import '../styles/base';
import Home from './components/home/';
import Calendar from './components/calendar/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Home />
                <Calendar />
            </div>
        );
    }
});

export default App;
