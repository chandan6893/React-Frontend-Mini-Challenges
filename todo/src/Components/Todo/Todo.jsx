import React, { useState } from "react";
import "./Todo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ToDoItems from "../ToDoItems/ToDoItems";

const Todo = () => {
  const [heading, setHeading] = useState("");
  const [headingData, setHeadingData] = useState([]);

  console.log("headingData",headingData[2])

  const handleSubmit = (e) => {
    if (heading.trim() !== "") {
      setHeadingData([...headingData, heading]);
    //   console.log("headingData", [...headingData, heading]);
       // Log the updated data
      setHeading(""); // Clear the input after submission
    }
    // if (heading.trim() !== "") {
    //     setHeadingData(prev => [...prev, heading]); // Append new heading
    //     console.log("headingData", [...headingData, heading]); // Log the updated data
    //     setHeading(""); // Clear the input after submission
    // }
  };
  return (
    <div className="ToDO">
      <h1>BLOGS</h1>
      <InputGroup className="mb-3 ToDOInputGroup" onClick={handleSubmit}>
        <Form.Control
          placeholder="blog's heading"
          aria-label="blog's heading"
          aria-describedby="basic-addon2"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <Button variant="primary" id="button-addon2">
          ADD
        </Button>
      </InputGroup>
      <ToDoItems headingData={headingData} setHeadingData={setHeadingData} heading={heading} setHeading={setHeading}/>
    </div>
  );
};

export default Todo;
