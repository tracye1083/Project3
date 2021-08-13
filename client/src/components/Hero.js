import React, { useState } from 'react';
import * as Queries from '../utils/queries';
import { FloatingLabel, Form, Row, Container, Button } from 'react-bootstrap';
import { GET_DRINKS } from '../utils/queries';
import { useQuery } from '@apollo/client';
// import { isNonEmptyArray } from '@apollo/client/utilities';

const Hero = () => {
  const [drink, setDrink] = useState('');
  
  // const { data } = useQuery(GET_DRINKS, {
  //   variables: {
  //     name: drink
  //   }
  // }) 
  // const drinkData = data?.drinks || [];
  //   console.log(drinkData)


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!drink) {
      return false;
    };
    console.log(drink);
  };


  return (
      
    <div className='hero'>

    <h1 className='searchTitle'>Search for Drinks</h1>

    <Container className='container'>
    <Row className="g-2">

    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInputGrid" label="Search by Cocktail">
      <Form.Control onChange={e => {setDrink(e.target.value)}} className='userInput' type="input" placeholder="Gin" />
      </FloatingLabel>

      <Button type="submit" className='searchBtn' >Find Drinks!</Button>
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