const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    drinks: [ID]!
  }

  type ProfileDrinks {
    _id: ID
    name: String
    email: String
    password: String
    drinks: [Drink]
  }

  type Drink {
    _id: ID
    name: String
    ingredients: [String]
    glass: String
    instructions: String
    image: String
    measure: [String]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    favDrinks(profileId: ID!): ProfileDrinks
    drinkById(drinkId: ID!): Drink
    profiles: [Profile]!
    profile(profileId: ID!): ProfileDrinks
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    drinks: [Drink]
    drinkByIngredient(ingredient: String): [Drink]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDrink(name: String!, glass: String, measure: [String], ingredients: [String], instructions: String): Drink
    saveDrink(profileId: ID!, drink: ID!): ProfileDrinks
    removeProfile: Profile
    removeSkill(skill: String!): Profile
    
  }
`;

module.exports = typeDefs;

