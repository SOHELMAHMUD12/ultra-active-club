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
                    <h1>asdahvs</h1>
                    <h1>cdscsd</h1>
                    <h1>dcsdc</h1>
                    <h1>cdsc</h1>
                    <h1>c vscsd</h1>
                    <h1>dscs</h1>
                    <h1>dfsf</h1>
                    <h1>vdff</h1>
                    <h1>fefc</h1>
                    <h1>ewfwe</h1>
            </div>
        </div>


            
        {/* <div className='row'>
            <div className='col-8'>
            <div className='row'>
                <div className='col-12'>
                <div className='icons-name mt-5'>
            <FcSportsMode  className ='icon'/>
            <div>
            <h1 className='header-name'>Sports-Active-Club</h1>
            {/* <button className='bg-primary border-0 p-2'>Blog</button> */}
            {/* <h3>Select Today's Exercise</h3>
            </div>
        </div>
                </div>
                          
            </div>

            <div className='row bg-'>
    
            {
    sports.map(sport => <Player key={sport.id} sport={sport}></Player>)
       }

<div className='col col-md-4 col-lg-4 '>
              
                </div> 
            </div>
            
            </div>

            <div className='col-4'>
            <div className='bg-dark'>
                <h1>lkldfs</h1>
            </div>
            </div>
            
        </div> */} 
        </div>
        </div>
    );
};

export default Sports;