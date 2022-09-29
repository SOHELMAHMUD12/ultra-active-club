import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Player.css';

const Player = ({sport,timeHandler}) => {
   
    const {name, id, img, age, time, description} = sport;

    return (
        <div className='player'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p style={{margin: '5px'}}><small>{description.slice(0,80)}...</small></p>
            <p style={{margin: '5px'}}><span style={{fontWeight: 600}}>For Age:</span> <small style={{margin: "50px"}}>{age}</small></p>
            <p style={{margin: '5px'}}> <span style={{fontWeight: 600}}>Break Time:</span> <small style={{margin: "50px"}}>{time} m</small> </p>
            <div>
            <button
            onClick={()=>timeHandler(sport) }
            className='add-btn'>
                <p>Add to Cart</p>
            </button>
            </div>  
        </div>
    );
};

export default Player;