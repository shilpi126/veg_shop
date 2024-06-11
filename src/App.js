import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";

const DUMMY_DATA = [
  {id:1,
    vegName:"potato",
    price:10,
    quantity: 20
  },
  {id:2,
    vegName:"Onion",
    price:20,
    quantity: 10
  },
  {id:3,
    vegName:"Tomato",
    price:10,
    quantity: 20
  },
  {id:4,
    vegName:"Capsicum",
    price:10,
    quantity: 20
  }
]

function App() {
  const [vegData, setVegData] = useState(DUMMY_DATA)

  const handleSaveData = (data) =>{
      setVegData([...vegData,{...data,id:Math.random()}])
  
  }

  const handleDeleteData = (id) => {
      const filterData = vegData.filter((item) => {
        return item.id != id;
      })

      setVegData(filterData);
  }


  return (
    <React.Fragment>
      <h1 style={{textAlign:"center"}}>VEG SHOP</h1>
      <FormComponent onSaveData={handleSaveData}/>
      <ListComponent vegitableData={vegData} onDeleteData={handleDeleteData}/>
    </React.Fragment>
  );
}

export default App;
