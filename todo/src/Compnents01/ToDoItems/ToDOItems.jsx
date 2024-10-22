import React from 'react';
import "../ToDoItems/ToDOItems.css"
import Button from "react-bootstrap/Button";

const ToDOItems = (props) => {
  const { dataFromInput, setDataFromInput, setInputname,  setShow, setEditindex} = props;

  const handleEdit = (index) =>{
    setInputname(dataFromInput[index])
    setEditindex(index);
    setShow(true)
  }
  const handleDelete = (index) => {
    
    // const updatedItems = dataFromInput.filter((_, i) => i !== index);
    // setDataFromInput(updatedItems);

    // OR
    dataFromInput.splice(index,1);
    setDataFromInput([...dataFromInput])

  };
  return (
    <div className='ToDOItems'>
        {dataFromInput.map((ele,index)=>{
          return <div key={index}>
              <h5>{ele}</h5>
              <Button variant='success' onClick={()=>handleEdit(index)}>Edit</Button>
              <Button variant='danger' onClick={()=>handleDelete(index)}>Delete</Button>
          </div>
        })}
    </div>
  )
}

export default ToDOItems