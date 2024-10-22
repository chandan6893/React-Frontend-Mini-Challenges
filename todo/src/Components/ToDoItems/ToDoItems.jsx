import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ToDoItems = (props) => {
  const { headingData, setHeadingData, heading,setHeading } = props;
  const [ update, setUpdate ] = useState(false);
  
   
  const [updateIndex, setUpdateIndex] = useState(null);

 const handleEdit = (ind)=>{
    setHeading(headingData[ind]);
    
    setUpdateIndex(ind)
    setUpdate(true); 
 }

 const handleUpdate = ()=>{




    setUpdate(false);
 }
  return (
    <div className="ToDoItems">
      {headingData.map((heading, ind) => {
        return (
          <Container key={ind}>
            <Row>
              <Col xs>
                <h2>{heading}</h2>
              </Col>
              <Col xs={{ order: 0 }}>
                
                {update ? <Button variant="success" onClick={handleUpdate}>Update</Button> : <Button variant="success" onClick={() => handleEdit(ind)}>Edit</Button> }
              </Col>
              <Col xs={{ order: 1 }}>
                <Button variant="danger">Delete</Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default ToDoItems;
