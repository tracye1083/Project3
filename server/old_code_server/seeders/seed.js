const db = require('../config/connection');
const { Drink, Ingredient, Measure, User } = require('../models');
const drinkSeeds = require('./cocktails.json');
const ingredientSeeds = require('./ingredientsSeed.json');
const measuresSeed = require('./measuresSeed.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await Drink.deleteMany({});
        await Drink.create(drinkSeeds);

        console.log('Drink database seeded.')

        await Ingredient.deleteMany({});
        await Ingredient.create(ingredientSeeds)

        console.log('Ingredients database seeded.')

        await Measure.deleteMany({});
        await Measure.create(measuresSeed);

        console.log('Measures database seeded.')

        await User.deleteMany({});
        await User.create(userSeeds); 

        console.log('Users database seeded.')

        process.exit(0);
    } catch (err) {
        throw err;
    }
})