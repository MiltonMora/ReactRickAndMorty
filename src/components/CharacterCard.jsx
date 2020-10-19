import React from 'react';
import '../styles/CharacterCard.css';

function CharacterCard(props) {
    const status = props.data.status === 'Alive' ? <em className="green">{props.data.status}</em> : <em className="red">{props.data.status}</em> 
    return (
        <div className="card">
            <img src={props.data.image} alt=""/>
            <div className="card_body">
                <strong>Name: {props.data.name}</strong>
                <p>Status: {status}</p>
                <p>species: {props.data.species}</p>
                <p>gender: {props.data.gender}</p>
                <p>origin: {props.data.origin.name}</p>
            </div>
        </div>
        
    );
}

export default CharacterCard;