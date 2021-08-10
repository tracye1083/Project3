const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Drink {
        _id: ID
        ingredients: [String]
        glass: String
        instructions: String
        name: String
        measure: [String]!
        image: String
    }

    type User {
        _id: ID
        username: String
        email: String
        drinkCount: Int
        savedDrinks: [Drink]
    }
  
    input drinkInput {
        drinkId: String
        ingredients: [String]
        description: String
        image: String
        link: String
    }
    type Query {
        me: User
        drinks: [Drink]
    }
    type Auth {
        token: ID
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveDrink(input: drinkInput): User
        removeDrink(drinkId: String!): User
    }
`;

module.exports = typeDefs;