import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Player.css';

const Player = ({sport}) => {
    // console.log(sport);

     
    const {name, id, img, age, time, description} = sport;

    return (
        <div className='player'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p style={{margin: '5px'}}><small>{description.slice(0,80)}...</small></p>
            <p style={{margin: '5px'}}><span style={{fontWeight: 600}}>For Age:</span> <small style={{margin: "50px"}}>{age}</small></p>
            <p style={{margin: '5px'}}> <span style={{fontWeight: 600}}>Break Time:</span> <small style={{margin: "50px"}}>{time} m</small> </p>
            <div>
            <button className='add-btn'>
                <p>Add to list</p>
            </button>
            </div>  
              {/* <div>
              

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sport.img} />
      <Card.Body>
        <Card.Title>{sport.name}</Card.Title>
        <Card.Text>{sport.description}
        </Card.Text>
        <Card.Text>For Age:{sport.age}
        </Card.Text>
        <Card.Text>Time Required:{sport.time}
        </Card.Text>
        <Button variant="primary">AddToList</Button> 
      </Card.Body>

      
    </Card>
              </div> */}
        </div>
    );
};

export default Player;