import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
          <div className='cart'>
            <div className='user'> 
                
                <div>
                    <h4>Asif Iqbal Joy</h4>
                    <small>Istanbul, Turky</small>
                </div>
            </div>
            <div className='weight-height'>
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
                    <p >10m</p>
                    <p >20m</p>
                    <p >30m</p>
                    <p >40m</p>
                </div>
            </div>

            <div className='details'>
                <h3>Study Details</h3>
                <p><span style={{fontWeight:'700', fontSize:'16px'}}>Study time:</span>  <small style={{marginLeft: '50px'}}> minutes</small></p>
                <p><span style={{fontWeight:'700', fontSize:'16px'}}>Break Time:</span> <small style={{marginLeft: '50px'}}> minutes</small> </p>
            </div>

            <div>
                <button className='complete-btn'>
               
                    <p>Study completed</p>
                </button>
               
            </div>
        </div>
        </div>
    );
};

export default Cart;