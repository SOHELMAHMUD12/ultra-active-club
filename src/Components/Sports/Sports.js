import React, { useEffect } from 'react';
import './Sports.css';
import { useState } from 'react';
import { FcSportsMode } from "react-icons/fc";
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Sports = () => {
        const [sports, setSports] = useState([])
    
    useEffect(()=> {
        fetch ('sports.json')
        .then(res => res.json())
        .then(data => {setSports(data)
            // console.log(data);
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
     <div className='player-cart-container'>
       
            <div className='player-container'>
             {
                sports.map(sport => <Player key={sport.id} sport={sport}></Player>)
             }

        </div>
            <div className='cart'>
                <Cart></Cart>
                  {/* <div>
                    <h4 className='p-2 ms-4'>Sohel Mahmud</h4>

                  </div>
                <div className='height-weight'>

                    <div>
                        <p style={{fontWeight:700, fontSize:'20px'}}>80</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p style={{fontWeight:700, fontSize:'20px'}}>5.9</p>
                        <p>height</p>
                    </div>
                    <div>
                        <p style={{fontWeight:700, fontSize:'20px'}}>30</p>
                        <p>Age</p>
                    </div>
               </div>
               
                  <div >
                    <h4 className='ms-2 my-2'>Add A Break</h4>
                    <div className='d-flex seconds rounded-circle'>
                    <p>10s</p>
                    <p className='rounded-circle text-white'>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                    </div>

                    <div>
                        <h2 className='ms-2 pb-1'>Exercise Details</h2>
                        <h5 className='ms-2 pb-1'>Exercise Time</h5>
                        <h5 className='ms-2 pb-1'>Break Time</h5>
                       <button className='bg-danger border-0 p-2 my-3 w-75 ms-5'>Activity Completed</button>
                       
                       <a className='ques-ans' href="question.html"><button className='bg-warning border-0 p-2 mb-2 w-75 ms-5'>Question Answered</button></a>
                
                    </div>
                  </div>*/}
                   
            </div>


        
       
        </div>
            </div> 
        </div> 
    );
};

export default Sports;