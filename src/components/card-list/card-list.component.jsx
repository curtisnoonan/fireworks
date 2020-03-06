import React from 'react';
import { Card } from '../card/card.component.jsx';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
    {props.fireworks.map(firework =>(
        <Card key={firework.id} firework={firework}/>
      ))}
    </div>

);