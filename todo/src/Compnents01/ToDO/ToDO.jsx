import React, { useState } from "react";
import "../ToDO/ToDO.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ToDOItems from "../ToDoItems/ToDOItems";

const ToDO = () => {
  const [inputName, setInputname] = useState("");

  const [show, setShow] = useState(false);

  const [editIndex,setEditindex] = useState();

  console.log("index",editIndex)

  const [dataFromInput, setDataFromInput] = useState([]);
  const handleClick = () => {
    if (inputName.trim() !== "") {
      setDataFromInput([...dataFromInput, inputName]);

      setInputname("");
      console.log("dataFromInput", dataFromInput);
    }
  };


  const handleUpdate = () =>{
    if (inputName.trim() !== ""){
      dataFromInput.splice(editIndex,1,inputName);
      setDataFromInput([...dataFromInput]);
      setInputname("")
      setShow(false)
    }
 
  }

  return (
    <div className="ToDo01">
      <InputGroup className="mb-3 IGroup">
        <Form.Control
          placeholder="Blog's Heading"
          aria-label="Blog's Heading"
          aria-describedby="basic-addon2"
          value={inputName}
          onChange={(e) => setInputname(e.target.value)}
        />
        {show ? (
          <Button variant="warning" onClick={handleUpdate}>
            UPDATE
          </Button>
        ) : (
          <Button variant="primary" onClick={handleClick}>
            ADD
          </Button>
        )}
      </InputGroup>
      <ToDOItems dataFromInput={dataFromInput} setDataFromInput={setDataFromInput} setInputname={setInputname} setShow={setShow} setEditindex={setEditindex} handleUpdate={handleUpdate} />
    </div>
  );
};

export default ToDO;
