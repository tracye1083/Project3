import React, { useEffect, useState } from 'react';
import * as Queries from '../utils/queries';
// import axios from 'axios';

import { FloatingLabel, Form, Row, Container, Button } from 'react-bootstrap';
import { GET_DRINKS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { isNonEmptyArray } from '@apollo/client/utilities';


const Hero = () => {
  
 

  //TRYING BY LOOPING THROUGH ARRAY
  // const drinkData = data?.drinks[i].ingredients || [];

  // for(let i=0; i=drinkData.length; i++) {
  //   const { loading, data } = useQuery(GET_DRINKS);
    
  //   console.log([i]);
  // }

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
      <div id='card'>
      
       
      </div>
    </Container>


    </div>

  
    
  );
}


export default Hero;