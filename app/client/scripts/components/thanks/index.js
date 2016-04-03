import React from 'react';

const Thanks = (props) => {
    return (
        <div className='form-response'>
            {props.attending ? <div>{'Yay! We are so glad you can make it! See you soon!'}</div> : <div>{'Ah, sorry you can\'t make it. But we hope to see you soon.'}</div>}
        </div>
    );
};

Thanks.defaultProps = {
    attending: true
};

Thanks.propTypes = {
    attending: React.PropTypes.bool.isRequired
};

export default Thanks;
