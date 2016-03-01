import {default as React, Component} from 'react';
import classNames from 'classnames';

class Row extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'Row';
    }

    render() {
        return (
            <div id={this.props.id} className={classNames(
                'row',
                this.props.className
                )}
                style={this.props.style}
            >
              {this.props.children}
            </div>
        );
    }

}

Row.propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    style: React.PropTypes.object
};

export default Row;
