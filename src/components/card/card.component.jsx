import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
    <img alt={props.firework.name}
      src={props.firework.imgurl}/>
        <h2>{props.firework.name}</h2>
        <h3>{props.firework.description}</h3>
    </div>
);