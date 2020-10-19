import React from 'react';
import '../styles/LocationCard.css';

function LocationCard(props) {
    return (
        <div className="card_location">
            <div className="card_name"><strong>{props.data.name}</strong></div>
            <div className="card_body_location">
                <p>Type: {props.data.type}</p>
                <p>dimension: {props.data.dimension}</p>
            </div>
        </div>
        
    );
}

export default LocationCard;