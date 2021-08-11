// // New code here:
// import React from 'react';


// const SavedDrinks = () => {
//     return (
//         <div>
//             <h1>Saved Drinks Page!</h1>
//         </div>
//     )
// }

// export default SavedDrinks; 

import React from 'react';
import Auth from '../utils/auth';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { removeDrinkId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { REMOVE_DRINK } from '../utils/mutations';
import { GET_USER } from '../utils/queries';

const SavedDrinks = () => {
  const [removeDrink, { error }] = useMutation(REMOVE_DRINK);
  
  const { loading, data } = useQuery(GET_USER);
  const userData = data?.me || {};

  const handleDeleteDrink = async (drinkId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeDrink({
        variables: { drinkId }
      });

      if (error) {
        throw new Error('Something went wrong!');
      }

      removeDrinkId(drinkId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>HAVE A DRINK WHILE I'M WORKING...</h2>;
  }
  
  return (
    <>
    
        <Container>
          <h1>Viewing saved drinks!</h1>
        </Container>
      
      <Container>
        <h2>
          {userData.savedDrinks && userData.savedDrinks.length
            ? `Viewing ${userData.savedDrinks.length} saved ${userData.savedDrinks.length === 1 ? 'drink' : 'drinks'}:`
            : 'You have no saved drinks!'}
        </h2>
        <CardColumns>
          {userData.savedDrinks && userData.savedDrinks.map((drink) => {
            return (
              <Card key={drink.drinkId} border='dark'>
                {drink.image ? <Card.Img src={drink.image} alt={`The cover for ${drink.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{drink.title}</Card.Title>
                  <p className='small'>Authors: {drink.ingredients}</p>
                  <Card.Text>{drink.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteDrink(drink.drinkId)}>
                    Delete this Drink!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedDrinks;
