import { BottomNavigationAction, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import "../styles/Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {CartHeader} from './CartHeader'
import {CartFooter} from './CartFooter'
import { useSelector, useDispatch } from 'react-redux';
import {Link } from "react-router-dom";
import { apiurl } from '../utils/request';
import {useEffect, useState} from 'react'


export const Cart=()=>{
    const [cartItems, setCartItems] = useState()
    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))
   
    useEffect(() => {
        getCart()
    }, []);

    async function getCart(){
        var {data} = await apiurl.get(`/cart/${user._id}`)
        setCartItems(data)
      
    }
    if(!user || !cartItems){
        return <p>Loading</p>
    }

return (
<div className="cart">
    <CartHeader/>
    {/* <CartHeader /> */}
    <div className="cartHead">

    </div>
    <div id="cartpage">
        <h2>IN YOUR CART</h2>
            <div id="maindiv" >               
                <div id="cart">

                    {cartItems.cart.products.map((e)=>(
                        <div key={e.product._id} id="productscart" >
                            <div>
                                <img  src={e.product.images[0]} alt="img" />
                            </div>
                            <div id="innerdata">
                                <div>{e.product.title}</div>
                               <div>Price : ₹{e.product.price} </div>
                            </div>

                         <div id="increaseQty">

                         <Tooltip title="Delete">
                         <IconButton aria-label="delete" >
                          <DeleteIcon id="deletebtn" fontSize="25px" />
                          </IconButton>
                          </Tooltip>
                         
                          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon  id="deletebtn"/>} />

                         </div>
                    </div>
                    ))}
                    
                </div>

                <div id="summary">

                    <div className="border" style={{padding:"6px"}}>
                        <div style={{marginLeft:"15px"}}><span><img style={{marginTop:"2px"}} src="https://ii1.pepperfry.com/images/svg/cpn-auto-fill-icon.svg" alt="icon" /></span>
                           &nbsp; &nbsp; &nbsp;  Apply Coupun<span id="couponicon"></span></div>
                    </div>

                    <div className="border" style={{padding:"10px"}}>
                        <hr />
                        <div style={{display:"flex"}}>
                          <h3>Total</h3>
                          <div style={{marginLeft:"230px",marginTop:"20px"}}>₹{cartItems.total}/-</div>
                        </div>
                        <div id="inclusive">(inclusive of all taxes)</div>
                        <hr />
                        <div style={{fontSize:"10px", margin:"20px 0px"}}>No Cost EMI Available Starting ₹ 5,641/month. EMI Starting ₹ 1,594/month</div>
                    </div>

                    <div className="checkboxdiv">
                        <input id="checkbox" type="checkbox"  />&nbsp; <span id="label" >Rs.99 For COVID Relief Through GiveIndia.</span>
                    </div>

                    <div className="checkboxdiv">
                        <input id="checkbox" type="checkbox"  />&nbsp; <span id="label1" >Use GSTIN For Business Purchase (Optional)</span>

                    </div>
                    <Link id="linkBtn" to="/checkout">
                    <Button  id="placeorderbutton" variant="contained">Place Order</Button>
                    </Link>

                </div>
            </div>
        </div>
        <hr />
        <CartFooter />
    </div>
)
}