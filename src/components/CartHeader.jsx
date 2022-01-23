import React from "react";
import '../styles/CartHeader.css'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const CartHeader = ()=>{
    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))
    return(
        <div className="CartHeader">
            <div id="header">
                <div id="img">
                    <Link to="/">
                   <img id="logo_size" src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg" alt="logo" />
                   </Link>
                </div>
                
                <div id="content">
                    <div id="logo">
                        <img id="cart_logo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswlJrC8ZfOshcq4B6FrZTwm8dt3rLltp3TA&usqp=CAU" alt="" />
                    </div>
                    <div id="description">
                        <span id="cart_color">Cart</span>
                        <span >------  Delivery & Biling Address  </span>
                        <span id="description_color">------ Payment</span>
                    </div>
                </div>
                <div id="notification">
                    <div id="name_in_notify">WELCOME <span id="capital">{user.name}</span>!</div>
                </div>
            </div>
            <div>
                <hr/>
            </div>
        </div>
    )
}