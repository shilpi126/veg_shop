import React, { useState } from 'react'

const ListComponent = (props) => {
    const [updateQuantity, setUpdateQuantity] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [val, setVal] = useState()
    const handleDelete = (event) => {
        props.onDeleteData(event.target.id)
        
    }

    useState(()=>{

    },[])
 

    const handleQuantityChange = (event) => {
        const filterQuantity = props.vegitableData.filter((item) => {
            return item.id == event.target.id;
        })

        let {quantity} = filterQuantity[0];
        const diff = quantity - (+event.target.value);
        setVal(event.target.value)
        
        setUpdateQuantity(diff)
        
        

    }


    const handleQuantitySubmit = (event) => {

        event.preventDefault();
        setIsEdit(true)
        
    }


return (
    <React.Fragment >
    

    {props.vegitableData.map((item,index) => {
    return (
        
        <div id={item.id}  style={{marginTop:"10px"}} key={index+1}>
            <span style={{marginRight:"10px"}}>{item.vegName}</span>
            <span style={{marginRight:"10px"}}>Rs : {item.price}</span>
          
            <span style={{marginRight:"10px"}}>{isEdit? updateQuantity : item.quantity} kg</span>
           
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