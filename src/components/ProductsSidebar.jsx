import React from 'react';
import '../styles/Products.css'
import {FormControlLabel,Radio,RadioGroup,FormControl,FormLabel, FormGroup, Checkbox} from "@mui/material"


export const ProductsSidebar = () => {
  return <div className='sortingdiv'>
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
};
