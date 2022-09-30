import React, { useState } from 'react';
import { addToDb } from '../../fakedb';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {sports} = props
    let time = 0
    for(const sport of sports){
        time = time + sport.time
    }
    const [times, setTimes] = useState(0)

    const handleBreak = (breakTime) =>{
        setTimes(breakTime)
        addToDb(breakTime)
    }

    const notify = () =>{
        toast.success('Exercise Successful!!!', {
            position: "top-center",
            });
    }

    return (
        
          <div className='cart'>
            <div className='user'> 
                
                <div>
                    <h4>Sohel Mahmud</h4>
                    <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div className='height-weight'>
                <div>
                    <p style={{fontWeight: 700, fontSize: '20px'}}>75</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p style={{fontWeight: 700, fontSize: '20px'}}>5.9</p>
                    <p>Height</p>
                </div>
                <div>
                    <p style={{fontWeight: 700, fontSize: '20px'}}>25</p>
                    <p>Age</p>
                </div>
            </div>
            
            <div className='breaks'>
                <h3 style={{marginTop: '25px', marginBottom:'0px'}}>Add a break</h3>
                <div className='break'>
                    <p onClick={() => handleBreak(15)} >15m</p>
                    <p onClick={() => handleBreak(25)}>25m</p>
                    <p onClick={() => handleBreak(30)}>30m</p>
                    <p onClick={() => handleBreak(40)}>40m</p>
                </div>
            </div>

            <div className='details'>
                <h3>Exercise Details</h3>
                <p><span style={{fontWeight:'700', fontSize:'16px'}}>Exercise Time:</span>  <small style={{marginLeft: '50px'}}> {time} minutes</small></p>
                <p><span style={{fontWeight:'700', fontSize:'16px'}}>Break Time:</span> <small style={{marginLeft: '50px'}}> {times} minutes</small> </p>
            </div>

            <div>
                <button 
                onClick={notify}
                className='complete-btn'>
                    <p style={{margin: 'auto', padding: '8px' }}>Activity completed</p>
                </button>
                <ToastContainer></ToastContainer>
                <a href="question.html"><button className='complete-btn'>
               <p style={{margin: 'auto', padding: '8px' }}>Question Answered</p></button>
               </a>
           
               
            </div>
        </div>
        
    );
};

export default Cart;