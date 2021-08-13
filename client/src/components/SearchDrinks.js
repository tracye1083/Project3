import React, {useState, useEffect} from 'react';
import Auth from '../utils/auth';
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import {saveDrinkIds, getSavedDrinkIds} from '../utils/localStorage';
import {GET_DRINKS} from '../utils/queries';
import {GET_DRINK_BY_INGREDIENT} from '../utils/queries';
import {useQuery} from '@apollo/react-hooks';



const SearchDrinks = () => {
    const [searchInput, setSearchInput] = useState('vodka');
    const { loading, data } = useQuery(GET_DRINK_BY_INGREDIENT, {
      variables: {
        ingredient: searchInput

      }
    });
    const drinkData = data?.drinks || [];
    console.log(drinkData)
      
    //   try {
    //     const response = await SearchDrinks(searchInput);
  
    //     if (!response.ok) {
    //       throw new Error('something went wrong!');
    //     }
  
    //     const { items } = await response.json();
  
    //     const drinkData = items.map((drink) => ({
    //       drinkId: drink.id,
    //       ingredients: drink.ingredients || ['No ingredients to display'],
    //       title: drink.title,
    //       description: drink.description,
    //       image: drink.image || '',
    //     }));
  
    //     setSearchedDrinks(drinkData);
    //     setSearchInput('');
    //   } catch (err) {
    //     console.error(err);
    //   }
    };

    return (
      <>
      <div fluid className='text-light bg-dark'>
      <Container>
        <h1>Search for Drinks!</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Col xs={12} md={8}>
              <Form.Control
                name='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
                size='lg'
                placeholder='Search for a drink'
              />
            </Col>
            <Col xs={12} md={4}>
              <Button type='submit' variant='success' size='lg'>
                Submit Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </div>
      </>
    )
  ;

    export default SearchDrinks;
  
     