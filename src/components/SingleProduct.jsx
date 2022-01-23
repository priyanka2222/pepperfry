import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { apiurl} from '../utils/request'
import "../styles/SingleProduct.css";
import {Header} from './Header'
import {Footer} from './Footer'
import { useSelector, useDispatch} from 'react-redux';
import { PrivateRoute } from './PrivateRoute';

export const SingleProduct =()=>{
    const [product, setProductdata] = useState()
    const [qnt, setQnt] = useState()
    const {id} = useParams()
    useEffect(() => {
      getOne()
    }, [id]);

    async function getOne(){
        const {data} = await apiurl.get(`/product/${id}`)
        setProductdata(data)
    }
    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))
    async function handleAddCart(id){
        await apiurl.post('/product',{
            user : user.id,
            products : {
                product : id
            }
        })
        .then((res)=>
            console.log(res)
        )
        .catch(err=>console.log(err))
    }

    if(!product){
        return <p>Loading...</p>
    }
    if(product){
        var percent = Math.floor(Math.random() * 40)
        var discount = Math.floor(product.price * percent/100)
        var mainPrice = product.price + discount
    }
return (
<div>
    <Header />
    <div className="singleproductdiv">
        <img  style={{margin:"10px 10px 10px 40px ", height:"30%", width:"40%"}}className="image" src={product.images[0]} alt="sofa" />
        <div className="detailsdiv">
            
            <div id="bredcrumb"><Link id="bredcrumb" to="/">Home</Link> <span> {`>`} </span> Furniture {`>`} <Link id="bredcrumb" to="/products">Products</Link></div>
            <h2 style={{marginBottom:"2px"}}>{product.title}</h2>
            <div style={{color:"#ff7035",marginBottom:"20px"}}>By {product.details.brand}</div>
            <div style={{fontWeight:"bold"}}>{product.details.warranty} Months Warranty</div>
            <h2 style={{fontWeight:"bolder"}}>₹ {product.price} <span style={{color:"green", fontWeight:"normal",fontSize:"16px"}}>({percent}% off)</span></h2>
            <div style={{marginBottom:"5px"}}>Save ₹ {discount} <span id="spandiscount"> MRP ₹ {mainPrice}</span><span>(Inc of all taxes)</span></div>
            <div style={{marginBottom:"5px"}}>EMI Starting ₹ 1,202 view options</div>
            <img style={{width:"600px"}} width={300} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_17012022_es.jpg" alt="img" />

            <div style={{display:"flex",marginTop:"40px",marginBottom:"20px"}}>
            <FormControl style={{width:"100px"}}>
                    <InputLabel id="demo-simple-select-label">QTY</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={1} label="Qty"
                            onChange={(e)=>{
                            setQnt(e.target.value)
                            }}
                            >
                        <MenuItem selected="selected" value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>

            </FormControl>
                
                    <Button onClick={()=>handleAddCart()} style={{width:"200px",margin:"0 20px",color:"black"}} variant="outlined">ADD TO CART</Button>
               
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
                        <div>{product.details.brand}</div>
                    </div>
                    <div style={{marginLeft:"120px"}}>
                        <div style={{color:"grey"}}>Dimensions</div>
                        <div>H 27.5 x W 27.5 x D 27.5</div>
                    </div>
            </div>

            <div style={{display:"flex",marginTop:"20px"}}>
            <div style={{marginLeft:"140px"}}>
                        <div style={{color:"grey"}}>Weight</div>
                        <div>{product.details.weight} KG</div>
                    </div>
                    <div style={{marginLeft:"155px"}}>
                        <div style={{color:"grey"}}>Warranty</div>
                        <div>{product.details.warranty} Months Warranty</div>
                    </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
)
}