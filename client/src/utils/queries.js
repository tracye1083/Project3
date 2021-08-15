import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const GET_DRINKS = gql`
    query allDrinks {
        drinks {
            name
            ingredients
            measure
            instructions
        }
      }
`;

export const GET_DRINK_BY_INGREDIENT = gql`
    query drinkByIngredient($ingredient: String) {
        drinkByIngredient(ingredient: $ingredient) {
            name
            ingredients
            instructions
            measure
            image
        }
    }`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

