import React, { useEffect } from 'react';
import './Sports.css';
import { useState } from 'react';
import { FcSportsMode } from "react-icons/fc";
import Player from '../Player/Player';

const Sports = () => {
        const [sports, setSports] = useState([])
    
    useEffect(()=> {
        fetch ('sports.json')
        .then(res => res.json())
        .then(data => {setSports(data)
            console.log(data);
        })

    },[])


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

        <div className='banner-container'>
            <div className='player-container'>
             {
                sports.map(sport => <Player key={sport.id} sport={sport}></Player>)
             }

            </div>
            <div className='cart-container bg-info'>
                  <div>
                    <h4 className='p-4'>Sohel Mahmud</h4>
                    <p className='p-4 mt-5'><small>Dhaka,Mohammadpur</small></p>
                  </div>
                  <div className='d-flex'>
                   <p>75</p> <small>kg</small><br /><small>Weight</small>
                    <p>6.5</p><br/>
                        <small>Height</small>
                    <p>25</p><small>Years</small><small>
                        Age</small>
                  </div>
                  <div >
                    <h4>Add A Break</h4>
                    <div className='d-flex seconds'>
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                    </div>
                  </div>
                   
            </div>
        </div>
        </div>
        </div>
    );
};

export default Sports;