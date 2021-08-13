import React, { useEffect, useState } from 'react';
import * as Queries from '../utils/queries';
import { FloatingLabel, Form, Row, Container, Button } from 'react-bootstrap';
import { GET_DRINKS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { isNonEmptyArray } from '@apollo/client/utilities';

const Hero = () => {
  const [drink, setDrink] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!drink) {
      return false;
    } 
    console.log(drink)
    location.replace('/searchDrinks');
  }


  return (
      
    <div className='hero'>

    <h1 className='searchTitle'>Search for Drinks</h1>

    <Container className='container'>
    <Row className="g-2">

    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInputGrid" label="Search by Cocktail">
      <Form.Control onChange={e => {setDrink(e.target.value)}} className='userInput' type="input" placeholder="Gin" />
      </FloatingLabel>

      <Form.Select aria-label="Floating label select example" className='userInput'>
        <option>Search by Ingredients</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button type="submit">Submit</Button>
    </Form>   
    </Row>

    </Container>
    
    <Container className='searchResults' id='searchResults' >
      <div id='card'></div>
    </Container>


    </div>

  
    
  );
}


export default Hero;