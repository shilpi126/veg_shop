import React, { useState } from 'react'

const ListComponent = (props) => {
    
    const [updateQuantity, setUpdateQuantity] = useState({});
    const [isEdit, setIsEdit] = useState({});
    
    const handleDelete = (event) => {
        props.onDeleteData(event.target.id)
        
    }


    const handleQuantityChange = (event) => {
        const itemId = event.target.id;
        const item = props.vegitableData.find((item) => item.id == itemId);
        const diff = item.quantity - (+event.target.value);
     
        setUpdateQuantity(prevState => ({
            ...prevState,
            [itemId]: diff
        }));
    }


    const handleQuantitySubmit = (event) => {
        event.preventDefault();
        const itemId = event.target.elements[0].id;
        setIsEdit(prevState => ({
            ...prevState,
            [itemId]: true
        }));
    }


return (
    <React.Fragment >
    

    {props.vegitableData.map((item,index) => {
    return (
        
        <div id={item.id}  style={{marginTop:"10px"}} key={index+1}>
            <span style={{marginRight:"10px"}}>{item.vegName}</span>
            <span style={{marginRight:"10px"}}>Rs : {item.price}</span>
          
            {/* //<span style={{marginRight:"10px"}}>{isEdit? updateQuantity : item.quantity} kg</span> */}
           
            <span style={{ marginRight: "10px" }}>{isEdit[item.id] ? updateQuantity[item.id] : item.quantity} kg</span>

           <form  onSubmit={handleQuantitySubmit}>
            <input 
            id={item.id}
            style={{marginRight:"10px"}} 
            
            onChange={handleQuantityChange}
            placeholder='0'
            type='number'/>
            <button type='submit'  style={{marginRight:"10px"}}>Buy</button>
            </form>           
            <button type='button' id={item.id} onClick={handleDelete}>delete</button>
        </div>
    )
   })}
       
    </React.Fragment>
  )
}

export default ListComponent