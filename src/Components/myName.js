import React from 'react';


function Name (props) {
    return  <div>
                <p>Hello, My name is <strong>{props.firstName} {props.lastName}</strong> ! </p>
            </div>;
}

export default Name;