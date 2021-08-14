// import React, {useState, useEffect} from 'react';
// import Auth from '../utils/auth';
// import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import {saveDrinkIds, getSavedDrinkIds} from '../utils/localStorage';
// import {GET_DRINKS} from '../utils/queries';
// import {GET_DRINK_BY_INGREDIENT} from '../utils/queries';
// import {useQuery} from '@apollo/react-hooks';



// const SearchDrinks = () => {
//     const [searchInput, setSearchInput] = useState('vodka');
//     const { loading, data } = useQuery(GET_DRINK_BY_INGREDIENT, {
//       variables: {
//         ingredient: searchInput

//       }
//     });
//     const drinkData = data?.drinks || [];
//     console.log(drinkData)
    
//     };

// const SearchDrinks = () => {

//   return (
//     <>
//     <div fluid className='text-light bg-dark'>
//       <Container>
//         <h1>Search for Drinks!</h1>
//         <Form>
//           <Form.Row>
//             <Col xs={12} md={8}>
//               <Form.Control
//                 name='searchInput'
//                 // value={searchInput}
//                 // onChange={(e) => setSearchInput(e.target.value)}
//                 type='text'
//                 size='lg'
//                 placeholder='Search for a drink'
//               />
//             </Col>
//             <Col xs={12} md={4}>
//               <Button type='submit' variant='success' size='lg'>
//                 Submit Search
//               </Button>
//             </Col>
//           </Form.Row>
//         </Form>
//       </Container>
//     </div>
//     </>
//   )
// ;
// }


  
     