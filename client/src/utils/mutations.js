import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_DRINK = gql`    
  mutation addDrink($name: String!, $glass: String, $measure: [String], $ingredients: [String], $instructions: String) {
    addDrink(name: $name, glass: $glass, measure: $measure, ingredients: $ingredients, instructions: $instructions) {
        name
        glass
        measure
        ingredients
        instructions
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        drinks
      }
    }
  }
`;

export const REMOVE_DRINK = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const SAVE_DRINK = gql`
  mutation saveDrink ($profileId:ID!, $drink:ID!) {
    saveDrink (profileId: $profileId, drink: $drink){
        name
        drinks {
          name
          measure
          ingredients
          instructions
        }
     }
  }
`;