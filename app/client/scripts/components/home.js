import React from 'react';
import {FormattedMessage} from 'react-intl';

let Home = React.createClass({

    render() {
        return (
            <div>
                <FormattedMessage id='greeting'
                  description='Welcome greeting to the user'
                  defaultMessage='Hello! {name} How are you today?'
                  values={{name: 'Kris'}}
                />
            </div>
        );
    }
});

export default Home;
