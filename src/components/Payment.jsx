
import { Button } from "@mui/material";
import "../styles/Payment.css";


export const Payment=()=>{
    return (
        <div id="cartpage">
           
            <div id="maindiv" >
                
                <div id="cart">
                    <div id="pincode" >
                        <div>
                        Order Summary
                        </div>
                    </div>

                    

                    <div id="paymentsection" >
                        <h4>Select Payment Method</h4>
                        <div id="paymentbox">
                            <div id="paymentoptions">
                                <div>ATM/DEBIT</div>
                                <div>CARDLESS EMI</div>
                                <div>CREDIT CARD</div>
                                <div>EMI</div>
                                <div>INTERNET BANKING</div>
                                <div>GOOGLE PAY</div>
                                <div>PAYTM</div>

                            </div>
                            <div id="paymentcardbox">
                                <label htmlFor="">NEW CARD</label>
                                <br />
                                <input type="text" name="card" id="cardnumber" placeholder="Enter Card Number" />
                                <br />

                                <div id="expiry">
                                <label htmlFor="">Expiry</label>
                                <input type="text" name="card" id="" placeholder="MM/YY" />
            
                                <label htmlFor="">CVV</label>
                                <input type="password" name="card" id="" placeholder="Enter CVV" />


                                </div>
                                <br />
                                <label htmlFor="">Name on Card</label>
                                <br />
                                <input type="password" name="card" id="cardname" placeholder="Enter Name" />

                                <Button  id="proceedbutton" variant="contained">Proceed</Button>
                                    
                           </div>







                        </div>
                      
                        
                    </div>



                    

                </div>
                <div id="summary">
        
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

                </div>
            </div>
        </div>
    )
}