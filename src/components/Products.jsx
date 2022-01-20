import '../styles/Products.css'
import {FormControlLabel,Radio,RadioGroup,FormControl,FormLabel, FormGroup, Checkbox,ListItem, Button} from "@mui/material"
import { Box } from '@mui/system'
import {useEffect, useState} from 'react'
import { apiurl } from '../utils/request';
import {ProductsSidebar} from'./ProductsSidebar'
import {Link} from 'react-router-dom'

export const Products = () => {
    const [products , setProducts] = useState()
    useEffect(() => {
        getUser()
    }, []);

    async function getUser(){
        const {data} = await apiurl.get('/product')
        setProducts(data)
        //console.log(data)
    } 
    
return (
<div>

    <div className='product' >
        <h1>Square Bean Bags with Beans</h1>
        <div>Go Back To Bean Bags with Beans</div>

    </div>
    <hr />
    <div className='flex'>
    <ProductsSidebar />

    <div className='productdiv'>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

        {products ? 
            products.map(e=>(
                <Link key={e._id} to={`/product/${e._id}`}>
                 <ListItem className='listitem' style={{display:"grid"}}>
                <img style={{width:"280px", height:"300px"} } src={e.images[0]} alt="sofa1" />
                <h4 style={{marginBottom:"6px"}}>{e.title}</h4>
                <div style={{marginBottom:"5px"}}>{e.tag}</div>
                <div className='price' >₹ {e.price}<span id="spandiscount"> ₹ {+e.price + 160}</span></div>
                <div className='discount' >30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>
               
                </ListItem>
                </Link>

            )) : <p>"Loading</p>
        }
  
</Box>

            </div>
        </div>
    </div>
    )
}
