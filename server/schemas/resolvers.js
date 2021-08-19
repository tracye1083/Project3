const { AuthenticationError } = require('apollo-server-express');
const { Profile, Drink } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    drinks: async () => {
      return await Drink.find({});
    },

    favDrinks: async (parent, { ids }) => {
      //Finds all drinks with an id from the array of ids
      return await Drink.find({ _id: { $in: ids } });
    },

    profile: async (parent, { profileId }) => {
      return await Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    drinkByIngredient: async (parent, args) => {
      return await Drink.find({ ingredients: args.ingredient })
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },

    addDrink: async (parent, args) => {
      const drink = await Drink.create(args);
      return drink;
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      console.log("Token:", token)
      console.log("Profile: ", profile)
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    saveDrink: async (parent, { profileId, drink }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      // if (context.user) {
      console.log("profileid: ", profileId)
      console.log("drink: ", drink)
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { drinks: drink },
        },
        {
          new: true,
          runValidators: true,
        }
      ).populate('drinks');
      // }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;