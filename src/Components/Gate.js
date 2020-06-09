import React from 'react';

function Gate(props) {
    return (
            <p>The Gate is <strong>{props.isOpen===true ? 'Open' : 'Close'}</strong></p>
    )
}

export default Gate;