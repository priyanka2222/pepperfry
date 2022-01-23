import {useEffect, useState} from "react";
import '../styles/Checkout.css'
import {CartHeader} from './CartHeader'
import {CartFooter} from './CartFooter'
import { useSelector } from "react-redux";
import { apiurl } from "../utils/request";
import {Link} from 'react-router-dom'

export const Checkout = () => {
    const [total, setTotal] = useState()
    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))
   
    useEffect(() => {
        getCart()
    }, []);

    async function getCart(){
        var {data} = await apiurl.get(`/cart/${user._id}`)
        setTotal(data)
      
    }
    if(!user || !total){
        return <h1>Loading</h1>
    }
return (
    <div>
        <CartHeader />
        <div className="checkout">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
            <div id="middle">
                <div id="mid_left">
                    {/* <div id="mid_left1">
                        <div id="mid_left1_inside">
                            <div className="mid_left12">ORDER SUMMERY    <a href="demoCart.html"><span id="edit_cart"></span></a></div>
                            <div id="mid_left11">( <span id="count">2</span> Items)</div>
                            <button id="showitems" onclick="hide_and_seek()"><span className="material-icons-outlined">   add </span></button>
                        </div>
                    </div> */}
                    <div id="mid_left2">
                        <div id="mid_left21">
                            <div className="mid_left12">SHIPPING & BILLING DETAILS</div>
                        </div>
                        <div id="mid_left22">
                            <div id="email"></div>
                            <div id="shippingAddress">
                                <p id="shipping"><strong>Add New Shipping Address</strong></p>
                                <form id="form" >
                                    <br />
                                    <div className="nme">
                                        <label className="label1">Name</label>
                                        <input type="text" id="name" placeholder="Name" required />
                                        {/* <div id="name">Akash</div> */}
                                    </div>
                                    
                                    <div className="Spacing_between"></div>

                                        
                                    <div className="num1">
                                        <label className="label2">Moblie Number</label>
                                        <input type="number" id="moblie" placeholder="9898989898" required />
                                        {/* <div id="moblie">9898989898</div> */}
                                        <img id="question_mark" src="https://ii1.pepperfry.com//images/svg/nCheckout-question-mark.svg" alt="" />
                                        <div id="show"> </div>
                                    </div>

                                    <div id="moblie_valid"></div>
                                    
                                    <div className="Spacing_between"></div>

                                        
                                    <div className="side">
                                        <label className="label3">PinCode</label>
                                        <input type="number" id="pincode" placeholder="400059" required />
                                    </div>
                                    <div id="pin_valid"></div>
                                    
                                    <div className="Spacing_between"></div>

                                        
                                    <div className="side">
                                        <label className="label4">Address</label>
                                        <input type="text" id="address" placeholder="House Number, Building Name, Society, Area, Road, Landmark" required />
                                    </div>

                                    <div id="address_valid"></div>
                                    
                                    <div className="Spacing_between"></div>

                                        
                                    <div id="mid_left2221">
                                        <div id="city_part">
                                            <input type="text" id="city" placeholder="City" required />
                                            <div id="city_valid"></div>
                                        </div>
                                        <div id="city_part">
                                            <select id="state" required>
                                                <option>Select State</option>
                                                <option>Delhi</option>
                                                <option>Maharashtra</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>Assam</option>
                                                <option>Bihar</option>
                                                <option>Goa</option>
                                                <option>Haryana</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Jammu and Kashmir</option>
                                                <option>Jharkhand</option>
                                                <option>Karnataka</option>
                                                <option>Kerala</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Manipur</option>
                                                <option>Meghalaya</option>
                                                <option>Mizoram</option>
                                                <option>Nagaland</option>
                                                <option>Punjab</option>
                                                <option>Rajasthan</option>
                                                <option>Sikkim</option>
                                                <option>Tamil Nadu</option>
                                                <option>Tripura</option>
                                                <option>West Bengal</option>
                                                <option>Utter Pradesh</option>
                                                <option>Chandigarh</option>
                                                <option>Andaman and Nicobar Islands</option>
                                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                                <option>Telangana</option>
                                                <option>Uttarakhand</option>
                                                <option>Gujarat</option>
                                                <option>Chhattisgarh</option>
                                                <option>Punducherry</option>
                                                <option>Odisha</option>
                                                <option>Pundicherry</option>
                                                <option>Lakshadweep</option>
                                            </select>

                                            <div id="state_valid"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="Spacing_between"></div>

                                        
                                    {/* <!-- <input type="text" placeholder="India" /> --> */}
                                    <div id="country">India</div>
                                    <br />
                                    <div id="mid_left2222">
                                        <input id="same_address" className="checkbox" type="checkbox" onclick="checkbox1()" />
                                        <div className="below_checkbox">Biling Address Is The Same As Shipping Address</div>
                                    </div>
                                    <br />
                                    
                                </form>
                                
                            <div className="Spacing_between"></div>

                                <Link to="/success"><button id="submit" onclick="verify()">SAVE & CONTINUE</button></Link>
                               
                                {/* <div id="mid_left3">
                                    <div id="mid_left31">PAYMENT</div>
                                    <div id="mid_left32">How Would You Like To Pay</div>
                                    <div id="PaymentMethod">+</div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div id="right">
                    <div id="mid_right">
                        <div className="right_in">
                            <div>Cart Value</div>
                            <div className="right_in1">₹ <span id="cart_val">{total.total}</span></div>
                        </div>
                        <div className="right_in">
                            <div>Delivery<span id="free_color">(FREE)</span></div>
                            <div className="right_in1">₹ <span id="delivery">0</span></div>
                        </div>
                        <div className="right_in">
                            <div>Assembly</div>
                            <div className="right_in1"><span>₹ <span id="assembly_val">449</span></span></div>
                        </div>
                        
                        <hr />
                        <div className="right_in" id="total_font">
                            <div>Total</div>
                            <div id="total_value" className="right_in1" >₹ <span id="total_val">{total.total + 449}</span></div>
                        </div>
                        <div className="right_in1" id="tax"><strong>(inclusive of all taxes)</strong></div>
                      
                    </div>
                    {/* <div className="right_below1" id="">No Cost EMI Available starting <span><a href="">₹
                        4,221/month</a></span>. EMI Starting <span><a href="">₹ 1,193/month</a></span>
                    </div>
                    <div className="right_below2" id="right_checkbox">
                        <input id="rgt_checkbox" type="checkbox" />
                        <div id="right_last">Contribute Rs.99 For COVID Relief Through GiveIndia.</div>
                    </div> */}
                </div>
            </div>
        </div>
        <hr />
        <CartFooter />
    </div>
    )
}