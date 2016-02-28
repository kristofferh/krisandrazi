import {default as React, Component} from 'react';
import ClassNames from 'classnames';

import {Row, Column} from 'app/components/grid';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Slide';
    }

    render() {
        return(
            <Row id={this.props.id}
                className={ClassNames(
                  'party-slide',
                  this.props.parentClassName
                )}
                style={{background: this.props.background}}
            >
                <Column xs='12' className='party-slide__container'>
                    <Row className={ClassNames(this.props.className)}>
                        {this.props.children}
                    </Row>
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
