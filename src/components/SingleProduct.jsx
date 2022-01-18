import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import "../styles/SingleProduct.css";
export const SingleProduct =()=>{
    return (
        <div>
            <hr />
            <div className="singleproductdiv">
                <img  style={{margin:"10px 10px 10px 40px ", width:"600px", height:"600px"}}className="image" src="https://ii1.pepperfry.com/media/catalog/product/b/o/568x625/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-gn3fou.jpg" alt="sofa" />
                <div className="detailsdiv">
                    <div>Home <span> {`>`} </span> Furniture {`>`} Products </div>


                        <h3 style={{marginBottom:"2px"}}>Box Sofa Bean Bag with beans in Tan Colour</h3>
                        <div style={{color:"#ff7035",marginBottom:"20px"}}>By Couchette</div>
                        <div style={{fontWeight:"bold"}}>4 Years' Warranty</div>
                        <h2 style={{fontWeight:"bolder"}}>₹ 25,519 <span style={{color:"green", fontWeight:"normal",fontSize:"16px"}}>(36% off)</span></h2>
                        <div style={{marginBottom:"5px"}}>Save ₹ 14,480 <span id="spandiscount"> MRP ₹ 39,999</span><span>(Inc of all taxes)</span></div>
                        <div style={{marginBottom:"5px"}}>EMI Starting ₹ 1,202 view options</div>
                        <img style={{width:"600px"}} width={300} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_17012022_es.jpg" alt="img" />
                        
                        
                        
                        <div style={{display:"flex",marginTop:"20px"}}>

                            <div style={{fontWeight:"bold"}}>DELIVERY</div>
                            <div style={{marginLeft:"40px"}}>
                                <div style={{fontSize:"12px",marginBottom:"8px"}}>Enter Pincode to get Delivery Date, Assembly Information and other details</div>
                                <div > 
                                <TextField id="outlined-basic" label="Pin Code" variant="outlined" /><span style={{fontWeight:"bolder",fontSize:"30px",margin:"10px"}}>APPLY</span>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex",marginTop:"20px"}}>
                        <FormControl style={{width:"100px"}}>
  <InputLabel id="demo-simple-select-label">QTY</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    //value={age}
    label="Qty"
    //onChange={handleChange}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={7}>7</MenuItem>
  </Select>
</FormControl>
<Button style={{width:"200px",margin:"0 20px",color:"black"}} variant="outlined">ADD TO CART</Button>
<Button style={{width:"200px",margin:"0 20px",backgroundColor:"#ff7035",color:"white"}} variant="contained">BUY NOW</Button>


                        </div>

                    


                </div>
            </div>
        </div>
    )
}