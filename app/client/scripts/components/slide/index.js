import {default as React, Component} from 'react';
import ClassNames from 'classnames';

import './styles';

import Row from '../row';
import Column from '../column';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Slide';
    }

    render() {
        return(
            <Row id={this.props.id}
                className={ClassNames(
                  'slide',
                  this.props.className
                )}
                style={{background: this.props.background}}
            >
                <Column xs='12' className='slide__container'>
                    {this.props.children}
                </Column>
            </Row>
        );
    }
}

Slide.propTypes = {
    background: React.PropTypes.string,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    parentClassName: React.PropTypes.string
};

export default Slide;
