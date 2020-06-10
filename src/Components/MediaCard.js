import React from 'react';

function MediaCard(props) {

    return (
        <div style={{margin: 0, padding: 0}}>
            <h2 style={{textDecoration: "none"}}>{props.title}</h2>    
            <p>{props.mcbody}</p>
            <img style={{width: "200px", height: "100px"}} src={props.imageUrl} alt="Img not found" />
        </div>
    );
}

export default MediaCard;