import React, { Component } from 'react';
import animals from './petInfo.js';

export default class PetsList extends Component {
    render() {
        return (animals.map(pet => {
                return (
                    <li>
                        <h2>{pet.name}</h2>
                        <img src={`${pet.picture}`} alt={`${pet.name} is a ${pet.size} ${pet.type}`}/>
                        <p>{`${pet.name} is a ${pet.size} ${pet.type}`}</p>
                    </li>
                )
            }) 
        )
    };
};