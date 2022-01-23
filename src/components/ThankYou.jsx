import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ThankYou.css'

export const ThankYou = () => {

  return <div className='success'> 
      <img src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" alt="success" />
        <h2>Thank you for your purchase!</h2>
        <p>Your order id: <span >{Math.round(Math.random()*3311000)}</span></p>
        <Link id="btn" to="/">Continue Shopping</Link>
       
  </div>;
};
