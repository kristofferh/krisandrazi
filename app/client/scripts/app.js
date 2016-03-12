import React from 'react';

import '../styles/base';
import Navigation from './components/navigation/';
import Home from './components/home/';
import Info from './components/info/';

let App = React.createClass({

    render() {
        return (
            <div>
                <Navigation />
                <Home />
                <Info />
            </div>
        );
    }
});

export default App;
