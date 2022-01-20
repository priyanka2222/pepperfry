import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { apiurl} from '../utils/request'
import "../styles/SingleProduct.css";
export const SingleProduct =()=>{
    const [product, setProductdata] = useState()
    const {id} = useParams()
    useEffect(() => {
      getOne()
    }, []);

    async function getOne(){
        const {data} = await apiurl.get(`/product/${id}`)
        setProductdata(data)
    }
    console.log(product)
    return (
     
        <div>
            <hr />
            <div className="singleproductdiv">
                <img  style={{margin:"10px 10px 10px 40px ", width:"600px", height:"600px"}}className="image" src={product.images[0]} alt="sofa" />
                <div className="detailsdiv">
                    
                        <div>Home <span> {`>`} </span> Furniture {`>`} Products </div>


                        <h3 style={{marginBottom:"2px"}}>{product.title}</h3>
                        <div style={{color:"#ff7035",marginBottom:"20px"}}>By {}</div>
                        <div style={{fontWeight:"bold"}}>4 Years' Warranty</div>
                        <h2 style={{fontWeight:"bolder"}}>₹ 25,519 <span style={{color:"green", fontWeight:"normal",fontSize:"16px"}}>(36% off)</span></h2>
                        <div style={{marginBottom:"5px"}}>Save ₹ 14,480 <span id="spandiscount"> MRP ₹ 39,999</span><span>(Inc of all taxes)</span></div>
                        <div style={{marginBottom:"5px"}}>EMI Starting ₹ 1,202 view options</div>
                        <img style={{width:"600px"}} width={300} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_17012022_es.jpg" alt="img" />
                        
                        
                        
                        <div style={{display:"flex",marginTop:"20px"}}>

                            <div style={{fontWeight:"bold"}}>DELIVERY</div>
                                <div style={{marginLeft:"40px"}}>
                                   <div style={{fontSize:"12px",marginBottom:"12px"}}>Enter Pincode to get Delivery Date, Assembly Information and other details</div>
                                   <div style={{marginTop:"15px"}} > 
                                   <TextField style={{height:"6px",width:"180px"}} id="outlined-basic" label="Pin Code" variant="outlined" /><span style={{fontWeight:"bolder",fontSize:"30px",margin:"10px"}}><Button style={{ fontWeight:"bolder"}} variant="text">APPLY</Button></span>
                                </div>
                            </div>

                        </div>



                        <div style={{display:"flex",marginTop:"40px",marginBottom:"20px"}}>
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




                        <div style={{display:"flex"}}>
                            <div style={{fontWeight:"bold"}}>MORE OFFERS</div>
                             <div style={{marginLeft:"35px"}}>
                                     <div style={{fontSize:"14px",marginBottom:"8px"}}>Cashback on Kotak Debit Cards EMI</div>
                                     <div style={{fontSize:"14px",color:"grey", marginBottom:"4px"}}>Get 10% Cashback upto Rs 3000 on Kotak Debit Card EMI transactions</div>
                                     <div style={{fontSize:"16px",marginBottom:"8px"}}>RUPAY Credit CardsCode: RUPAYPF</div>
                                     <div style={{fontSize:"14px",color:"grey", marginBottom:"4px"}}>Get Extra 10% off on purchases through Rupay Credit Cards.</div>
                             </div>
                        </div>



                        <div style={{display:"flex",marginTop:"20px"}}>
                            <div style={{fontWeight:"bold"}}>DETAILS</div>
                               <div style={{marginLeft:"80px"}}>
                                    <div style={{color:"grey"}}>Brand</div>
                                    <div>Counchette</div>
                                </div>
                                <div style={{marginLeft:"120px"}}>
                                    <div style={{color:"grey"}}>Dimensions</div>
                                    <div>H 27.5 x W 27.5 x D 27.5</div>
                                </div>
                        </div>

                        <div style={{display:"flex",marginTop:"20px"}}>
                        <div style={{marginLeft:"140px"}}>
                                    <div style={{color:"grey"}}>Weight</div>
                                    <div>5 KG</div>
                                </div>
                                <div style={{marginLeft:"155px"}}>
                                    <div style={{color:"grey"}}>Warranty</div>
                                    <div>4 Years' Warranty</div>
                                </div>
                        </div>

                    


                </div>
            </div>
        </div>
    )
}