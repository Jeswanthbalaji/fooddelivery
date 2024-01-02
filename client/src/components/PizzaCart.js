import React, { useState } from 'react'
import "./pizzacart.css"
import {Button, Modal} from "react-bootstrap"
const PizzaCart = ({jeswanth}) => {
  const[varients,setVarients]=useState("small")
  const[quantity,setQuantity]=useState(1)
  const[show,setShow] =useState(false);

  const handleShow =()=>setShow(true);
  const handleClose =()=>setShow(false);
  return (
    <div className='allpizzas shadow-lg p-3 mb-5 bg-body rounded'>
      <div className='heading-image-div'onClick={handleShow}> <h1 className='cart-heading' >{jeswanth.name}</h1>
  <img src={jeswanth.image} style={{height:"12rem",width:"14rem"}}/></div>
 
  <div className='var-quant-div'>
   <div className='varients'>
    <p>Varients :</p>
    <select  value={varients} onChange={(e)=>setVarients(e.target.value)}>
    {
        jeswanth.varients.map((varients)=>{
            return(<option>{varients}</option>)
        })
    }

    </select>
    </div>
   <div className='quantity'> 
  <p>Quantity :</p>
  <select  value={quantity} onChange={(e)=>setQuantity(e.target.value)}>{
    [...Array(15).keys()].map((val,i)=>{
      return<option value={val+1}>{val+1}</option>
    })
    }</select>
    </div>

  </div>
<div className='price-add-to-cart'>
<div>
<p className='price'>Price : {jeswanth.prices[0][varients]*quantity}</p>

</div>
<div>

<button className='add-to-cart-btn'>Add to Cart</button>
</div>
</div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{jeswanth.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={jeswanth.image} style={{height:"20rem",width:"25rem"}}/>
          <p>{jeswanth.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
    
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PizzaCart