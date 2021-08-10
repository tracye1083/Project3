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

export const GET_DRINK = gql`
    {
        drinks {
            drinkId
            ingredients
            glass
            instructions
            name
            image
        }
    }`