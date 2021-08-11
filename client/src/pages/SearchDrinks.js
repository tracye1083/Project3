// //New code here: 

// import React, {useState, useEffect} from 'react';
// import Auth from '../utils/auth';
// import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import {saveDrinkIds, getSavedDrinkIds} from '../utils/localStorage';
// import {SAVE_DRINK} from '../utils/mutations';
// import {useMutation} from '@apollo/react-hooks';






// const SearchDrinks = () => {
//   const [saveDrink, {error}] = useMutation(SAVE_DRINK);
//   // create state for holding returned data
//   const [searchedDrinks, setSearchedDrinks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved drinkId values
//   const [savedDrinkIds, setSavedDrinkIds] = useState(getSavedDrinkIds());

//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveDrinkIds(savedDrinkIds);
//   });

//   // create method to search for drinks and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await SearchDrinks(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();

//       const drinkData = items.map((drink) => ({
//         drinkId: drink.id,
//         ingredients: drink.ingredients || ['No ingredients to display'],
//         title: drink.title,
//         description: drink.description,
//         image: drink.image || '',
//       }));

//       setSearchedDrinks(drinkData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // create function to handle saving a book to our database
//   const handleSaveDrink = async (drinkId) => {
//     const drinkToSave = searchedDrinks.find((drink) => drink.drinkId === drinkId);

//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const {data} = await saveDrink({
//         variables: {input: drinkToSave}
//       });

//       if(error) {
//         throw new Error('Something went wrong!');
//       }

//       setSavedDrinkIds([...savedDrinkIds, drinkToSave.drinkId]);
//     }
//      catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
    //   <div fluid className='text-light bg-dark'>
    //     <Container>
    //       <h1>Search for Drinks!</h1>
    //       <Form onSubmit={handleFormSubmit}>
    //         <Form.Row>
    //           <Col xs={12} md={8}>
    //             <Form.Control
    //               name='searchInput'
    //               value={searchInput}
    //               onChange={(e) => setSearchInput(e.target.value)}
    //               type='text'
    //               size='lg'
    //               placeholder='Search for a drink'
    //             />
    //           </Col>
    //           <Col xs={12} md={4}>
    //             <Button type='submit' variant='success' size='lg'>
    //               Submit Search
    //             </Button>
    //           </Col>
    //         </Form.Row>
    //       </Form>
    //     </Container>
    //   </div>

//       <Container>
//         <h2>
//           {searchedDrinks.length
//             ? `Viewing ${searchedDrinks.length} results:`
//             : 'Search for a drink to begin'}
//         </h2>
//         <CardColumns>
//           {searchedDrinks.map((drink) => {
//             return (
//               <Card key={drink.drinkId} border='dark'>
//                 {drink.image ? (
//                   <Card.Img src={drink.image} alt={`The cover for ${drink.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{drink.title}</Card.Title>
//                   <p className='small'>Ingredients: {drink.ingredients}</p>
//                   <Card.Text>{drink.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedDrinkIds?.some((savedDrinkId) => savedDrinkId === drink.drinkId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveDrink(drink.drinkId)}>
//                       {savedDrinkIds?.some((savedDrinkId) => savedDrinkId === drink.drinkId)
//                         ? 'This drink has already been saved!'
//                         : 'Save this Drink!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SearchDrinks;
