import React from 'react';
import { FloatingLabel, Form, Row, Container } from 'react-bootstrap';


function Hero() {
  return (
      
    <div className='hero'>
    <Container className='container'>
    <Row className="g-2">
    
      <FloatingLabel controlId="floatingInputGrid" label="Search by Cocktail">
        <Form.Control className='userInput' type="input" placeholder="name@example.com" />
      </FloatingLabel>
    
      <FloatingLabel controlId="floatingSelectGrid" label="Search by Ingredients">
        <Form.Select aria-label="Floating label select example" className='userInput'>
          <option>Search by Ingredients</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>
   
    </Row>
    </Container>
    </div>
    
  );
}


export default Hero;