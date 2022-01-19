import '../styles/Products.css'
import {FormControlLabel,Radio,RadioGroup,FormControl,FormLabel, FormGroup, Checkbox,ListItem, Button} from "@mui/material"

import { Box } from '@mui/system'



export const Products = () => {

    
    
    return (
    <div>

        <div className='product' >
            <h1>Square Bean Bags with Beans</h1>
            <div>Go Back To Bean Bags with Beans</div>
        </div>
        <hr />
        <div className='flex'>
            <div className='sortingdiv'>
            <FormControl>
               <FormLabel id="demo-radio-buttons-group-label" style={{fontWeight:"bold", color:"black"}}>Sort by</FormLabel>
                  <RadioGroup
                       aria-labelledby="demo-radio-buttons-group-label"
                       defaultValue="Relevance"
                       name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />}  label="Relevance" />
                    <FormControlLabel value="male" control={<Radio />} label="Highest Priced First" />
                    <FormControlLabel value="Lowest Priced First" control={<Radio />} label="Lowest Priced First" />
                    <FormControlLabel value="Fastest Shopping" control={<Radio />} label="Fastest Shopping" />
                    <FormControlLabel value="Newest" control={<Radio />} label="Newest" />
                 </RadioGroup>
                </FormControl>
                <hr />
                <FormControl>
                    <FormLabel  style={{ fontWeight:"bold", color:"black"}}>Brand</FormLabel >
                
                <FormGroup>
                <FormControlLabel control={<Checkbox   />} label="Sattava (36)" />
                <FormControlLabel control={<Checkbox   />} label="Counchette (28)" />
                <FormControlLabel control={<Checkbox   />} label="Orka (1)" />
                <FormControlLabel control={<Checkbox   />} label="Style Homez (10)" />
                </FormGroup>
                </FormControl>

                <hr />
                <FormControl>
                    <FormLabel  style={{fontWeight:"bold", color:"black"}}>Price</FormLabel >
                
                <FormGroup>
                <FormControlLabel  control={<Checkbox   />} label="under ₹2,000" />
                <FormControlLabel control={<Checkbox   />} label="₹2000 to ₹4000" />
                <FormControlLabel control={<Checkbox   />} label="₹4000 to ₹6000" />
                <FormControlLabel control={<Checkbox   />} label="₹6000 to ₹10000" />
                </FormGroup>
                </FormControl>

            </div>
            <div className='productdiv'>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <ListItem className='listitem' style={{display:"grid"}}>
      <img style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price' >₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div className='discount' >30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>

  </ListItem>

  
  <ListItem  className='listitem' style={{display:"grid"}}>
      <img style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price' >₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div  className='discount' >30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>
</ListItem>
  <ListItem className='listitem' style={{display:"grid"}}>
  <img  style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price'>₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div   className='discount'>30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>

  </ListItem>
  <ListItem  className='listitem' style={{display:"grid"}}>
  <img  style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price' >₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div   className='discount'>30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>

  </ListItem>
  <ListItem  className='listitem' style={{display:"grid"}}>
  <img style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price' >₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div  className='discount' >30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>

  </ListItem>
  <ListItem  className='listitem' style={{display:"grid"}}>
  <img  style={{width:"280px", height:"300px"} } src="https://ii2.pepperfry.com/media/catalog/product/b/o/494x544/box-sofa-bean-bag-with-beans-in-tan-colour-by-couchette-box-sofa-bean-bag-with-beans-in-tan-colour-b-ghoyd3.jpg" alt="sofa1" />
      <h4 style={{marginBottom:"6px"}}>Box Sofa Bean Bag with beans in Tan Colour</h4>
      <div style={{marginBottom:"5px"}}>Couchette</div>
      <div className='price'>₹ 25,515<span id="spandiscount"> ₹ 28,515</span></div>
      <div  className='discount' >30%off<span id='spanbutton'><Button style={{backgroundColor:"orange"}} variant="contained">Add To Cart</Button></span></div>

  </ListItem>
  
  
</Box>

            </div>
        </div>
    </div>
    )
}
