import React from 'react';
import Slide from '../slide';
import Row from '../row';
import Column from '../column';

import flag from './flag.svg';
import './styles';

let Footer = React.createClass({

    render() {
        return (
            <Slide background='light' id='footer'>
                <Row className='center-xs content-container force-center'>
                    <Column xs='12' sm='6'>
                        <span className='svg-flag' dangerouslySetInnerHTML={{__html: flag}} />
                        <p>Questions? Comments? Email us at <a href='mailto:hi@krisandrazi.party'>hi@krisandrazi.party</a></p>
                    </Column>
                </Row>
            </Slide>
        );
    }
});

export default Footer;
