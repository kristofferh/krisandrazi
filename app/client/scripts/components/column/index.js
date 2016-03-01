import {default as React, Component} from 'react';
import classNames from 'classnames';
import pickByArray from 'lodash._pickbyarray';

class Column extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'Column';
        this.sizes = ['xs', 'sm', 'md', 'lg'];
    }

    getSizeProp() {
        return pickByArray(this.props, this.sizes);
    }

    colClassNames(props) {
        let classes = [];
        for(let prop in props) {
            classes.push(this.colClassName(prop, props[prop]));
        }
        return classes;
    }

    colClassName(size, value) {
        return ['col', size, value].join('-');
    }

    render() {
        return (
            <div id={this.props.id} className={classNames(
                this.colClassNames(this.getSizeProp()),
                this.props.className
            )}
            >
              {this.props.children}
            </div>
        );
    }

}

Column.propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    lg: React.PropTypes.string,
    md: React.PropTypes.string,
    sm: React.PropTypes.string,
    xs: React.PropTypes.string
};

export default Column;
