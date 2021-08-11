import gql from 'graphql-tag';

export const GET_USER = gql`
    {
        me {
            _id
            username
            email
            drinkCount
            savedDrinks {
                drinkId
                ingredients
                glass
                instructions
                name
                image
            }
        }
    }
`;

export const GET_DRINKS = gql`
    {
        drinks {
            name
            ingredients
            measure
            instruction
        }
    }
`;

export const GET_DRINK_BY_INGREDIENT = gql`
    query drinksByIngredient($ingredient: String) {
        drinkByIngredient(ingredient: $ingredient) {
            name
            ingredients
            instructions
        }
    }    
// {
//         drinks {
//             drinkId
//             ingredients
//             glass
//             instructions
//             name
//             image
//         }
    }`;