import React, { useState } from 'react'

const FormComponent = (props) => {

    const [vegName, setVegName] = useState("")
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()

    const handleNameChange = (event) => {
        setVegName(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
       const data = {
        vegName,
        price,
        quantity
       }

        props.onSaveData(data)
        setVegName("")
        setPrice("")
        setQuantity("")
    }


  return (
    <React.Fragment>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='vegname'>Name : </label>
            <input type='text' value={vegName} id='vegname' onChange={handleNameChange} style={{marginBottom:"10px"}}/><br></br>
            <label htmlFor='price'>Price : </label>
            <input type='number' value={price} id='price' onChange={handlePriceChange} style={{marginBottom:"10px"}}/><br></br>
            <label  htmlFor='quantity'>Quantity : </label>
            <input type='number'value={quantity} id='quantity' onChange={handleQuantityChange} style={{marginBottom:"10px"}}/><br></br>
            <button type='submit' style={{marginBottom:"50px"}}>ADD TO SHOP</button>
        </form>
    </React.Fragment>
  )
}

export default FormComponent