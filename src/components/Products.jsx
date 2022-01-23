import '../styles/Products.css'
import {ListItem, Button} from "@mui/material"
import { Box } from '@mui/system'
import {useEffect, useState} from 'react'
import { apiurl } from '../utils/request';
import {ProductsSidebar} from'./ProductsSidebar'
import {Link} from 'react-router-dom'
import { Header } from './Header';
import {Footer} from './Footer'
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'

export const Products = () => {
    const [products , setProducts] = useState()
    useEffect(() => {
        getProduct()
    }, []);

    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))

    async function handleAddCart(id){
        if(!user){
            console.log(user)
            return <Navigate to={"/login"} />
        }
        await apiurl.post('/cart',{
            user : user._id,
            products : {
                product : id
            }
        })
        .then((res)=>
            console.log(res)
        )
        .catch(err=>console.log(err))
    }
    async function getProduct(){
        const {data} = await apiurl.get('/product')
        setProducts(data)
        //console.log(data)
    } 
    
return (
<div>
    <Header />
    <div className='flex'>
    <ProductsSidebar />

    <div className='productdiv'>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {products ? 
            products.map(e=>(
                
                 <ListItem key={e._id} className='listitem' style={{display:"grid"}}>
                     <Link id="productsMain"  to={`/product/${e._id}`}>
                    <img style={{width:"280px", height:"300px"} } src={e.images[0]} alt="sofa1" />
                    <h4  style={{marginBottom:"6px"}}>{e.title}</h4>
                    <div style={{marginBottom:"5px"}}>{e.tag}</div>
                    <div className='price' >₹ {e.price}<span id="spandiscount"> ₹ {+e.price + 160}</span></div>
                    </Link>
                    <div className='discount' >30%off
                        <span id='spanbutton'>
                            {user ? <Button id="btn" onClick={()=>handleAddCart(e._id)} style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button> : <Link id="link" to="/login">
                                <Button id="btn" style={{backgroundColor:"orange", textDecoration:"none"}} variant="contained">Add To Cart</Button></Link>}
                        </span>
                    </div>
               
                </ListItem>
              
            )) : <p>"Loading</p>
        }
  
    </Box>
    </div>
    </div>
    <Footer/>
</div>
    )
}
