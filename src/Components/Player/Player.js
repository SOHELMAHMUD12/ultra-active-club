import React from 'react';
import { Button, Card } from 'react-bootstrap';
// import './Player.css';

const Player = ({sport}) => {
    // console.log(sport);
    const {name, id, img, age, time, description} = sport;

    return (
        <div className=''>
               
              <div className='col-12 col-md-6 col-lg-4'>
              

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
              </div>
        </div>
    );
};

export default Player;