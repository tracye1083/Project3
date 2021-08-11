import React from 'react';

import { FloatingLabel, Form, Row, Container, Button } from 'react-bootstrap';
import { GET_DRINK_BY_INGREDIENT } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Hero = () => {
  
  const { loading, data } = useQuery(GET_DRINK_BY_INGREDIENT);
  const drinkData = data?.drinkByIngredient || [];








  return (
      
    <div className='hero'>
    <Container className='container'>
    <Row className="g-2">
    
      <FloatingLabel controlId="floatingInputGrid" label="Search by Cocktail">
        <Form.Control className='userInput' type="input" placeholder="Gin" />
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

    <Form className='submitContainer'>
      <Button as="input" type="submit" value="Submit" className='submit' />{' '}
    </Form>
    

    <Container className='searchResults' id='searchResults' >
      <div id='card'></div>
    </Container>


    </div>

  
    
  );
}


export default Hero;