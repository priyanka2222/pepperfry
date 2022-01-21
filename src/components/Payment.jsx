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

                            <div id="container">
    <div className="right-side">
           <p>NEW CARD</p>
           <div className="form">
               <label for="">New Card</label><br /><br />
               <input
               id="input-card-num"
               type="text"
               placeholder="Enter Card Number"
               />
               <br />
               <span id="card-num">Please Enter card Number</span><br />
                  <div className="mid-two">
                      <div>
                             <label for="">Expiry</label><br /><br />
                             <input
                            id="input-date"
                            type="text"
                              placeholder="MM/YY"
                              />
                               <br />
                           <span id="date">Please Enter expeiry date</span><br />
                       </div>
                        <div>
                               <label for="">CVV</label><br /><br />
                               <input
                            id="input-cvv"
                            type="text"
                             placeholder="Enter CVV"
                           /><br />
                           <span id="cvv">Please Enter CVV</span><br />
                      </div>
                  </div>
                   <label for="">Name on Card</label><br /><br />
                   <input type="text" placeholder="Enter Name as on card" /><br /><br />
                   <div className="check">
                  <input type="checkbox" />&nbsp;&nbsp; Save this option securely for
                   faster payment
                   </div>
                  <button>PROCEED</button>
               </div>
            </div>
              
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