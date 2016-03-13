import {default as React, Component} from 'react';
import ClassNames from 'classnames';

import './styles';

import Row from '../row';
import Column from '../column';

class Slide extends Component {
    constructor(props) {
        super (props);
        this.displayName = 'Slide';
    }

    render() {
        return (
            <section id={this.props.id} className={ClassNames(
                'slide',
                {[`slide--${this.props.background}`]: this.props.background},
                this.props.className)}
            >
                <Row className={ClassNames('slide__container', this.props.rowClassNames)}>
                    <Column xs='12'>
                        {this.props.children}
                    </Column>
                </Row>
            </section>
        );
    }
}

Slide.propTypes = {
    background: React.PropTypes.string,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    rowClassNames: React.PropTypes.string
};

export default Slide;
