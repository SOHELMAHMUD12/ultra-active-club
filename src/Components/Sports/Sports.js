import React, { useEffect } from 'react';
import './Sports.css';
import { useState } from 'react';
import { FcSportsMode } from "react-icons/fc";
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Sports = () => {
        const [sports, setSports] = useState([])
        const [carts, setCarts] = useState([])
    console.log(carts)
    useEffect(()=> {
        fetch ('sports.json')
        .then(res => res.json())
        .then(data => {setSports(data)
            // console.log(data);
        })

    },[])

    const timeHandler = (sport) =>{
        let newCart = [];
        const exits = carts.find(cart => cart.id === sport.id);
        if(!exits){
            newCart = [...carts, sport]
        }
        else{
            newCart = carts;
            alert('Already Added')
            return
        }
   
        setCarts(newCart);
    }
    
    return (

        <div className=''>
              <div className=''>
                <div className='icons-name mt-4'>
                    <FcSportsMode  className ='icon'/>
            <div>
                 <h1 className='header-name'>Sports-Active-Club</h1>
                <h3>Select Today's Exercise</h3>
            </div>
        </div>
     <div className='player-cart-container'>
       
            <div className='player-container'>
             {
                sports.map(sport => <Player 
                    key={sport.id} 
                    sport={sport}
                    timeHandler = {timeHandler}
                    ></Player>)
             }
        </div>
            <div className='cart'>
                <Cart
                sports = {carts}
                ></Cart>            
            </div>
        </div>
    </div> 
</div> 

    );
};

export default Sports;