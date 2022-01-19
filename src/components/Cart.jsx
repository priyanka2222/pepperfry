import { BottomNavigationAction, Button, IconButton, Tooltip } from "@mui/material";
import "../styles/Cart.css";


import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';



export const Cart=()=>{
    return (
        <div id="cartpage">
            <h2>IN YOUR CART</h2>
            <div id="maindiv" >
                
                <div id="cart">
                    <div id="pincode" >
                        <div>
                        Enter Your Pincode For Delivery  Assembly Information
                        </div>
                        <div>
                        
                            <input type="pincode" /><span><button id="spanbutton2">Go</button></span>
                            
                        </div>

                    </div>

                    

                    <div id="productscart" >
                        <div>
                        <img src="https://ii1.pepperfry.com/media/catalog/product/b/o/90x99/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="img" />
                        </div>
                         <div id="innerdata">
                             <div>Box Sofa Bean Bag With Beans In Tan Colour By Couchette</div>
                             <div>4 Years' Warranty, 100% Genuine</div>
                             <div>Delivery By</div>
                             <div>Enter Your Pincode Above To Get These Details</div>
                         </div>


                         <div id="increaseQty">
                         <Tooltip title="Delete">
                         <IconButton aria-label="delete" size="large">
                          <DeleteIcon fontSize="inherit" />
                          </IconButton>
                          </Tooltip>
                         
                          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        

                         </div>
                        
                    </div>



                    

                </div>
                <div id="summary">
                    <div className="border" style={{padding:"10px"}} >
                       <h4 id="login">Login <span style={{fontWeight:"bold"}}>Or</span> Register</h4>
                       <div id="logindown">For Express Checkout, Exciting Offers & More.</div>
                    </div>

                    <div className="border" style={{padding:"6px"}}>
                        <div style={{marginLeft:"15px"}}><span><img style={{marginTop:"2px"}} src="https://ii1.pepperfry.com/images/svg/cpn-auto-fill-icon.svg" alt="icon" /></span>
                           &nbsp; &nbsp; &nbsp;  Apply Coupun<span id="couponicon"></span></div>
                    </div>



                    <div className="border" style={{padding:"10px"}}>
                        <div style={{display:"flex"}}>
                          <div id="cartvalue">Cart Value</div>
                          <div id="cartprice">26,000/-</div>
                        </div>
                        <div style={{display:"flex"}}>
                          <div id="retaildiscount">Retail Discount</div>
                          <div id="retailprice" >(-)5,000/-</div>
                        </div>
                        <div style={{fontSize:"11px"}}>Delivery & Assembly Charges Extra. Enter Pincode To Know</div>
                        <hr />
                        <div style={{display:"flex"}}>
                          <h3>Total</h3>
                          <div style={{marginLeft:"230px",marginTop:"20px"}}>25,000/-</div>
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
                    <Button  id="placeorderbutton" variant="contained">Place Order</Button>



                </div>
            </div>
        </div>
    )
}