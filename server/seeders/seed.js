const db = require('../config/connection');
const { Drink, Ingredient } = require('../models');
const drinkSeeds = require('./cocktails.json');
const ingredientSeeds = require('./ingredientsSeed.json');

db.once('open', async () => {
    try {
        await Drink.deleteMany({});
        await Drink.create(drinkSeeds);

        console.log('Drink database seeded.')

        await Ingredient.deleteMany({});
        await Ingredient.create(ingredientSeeds)

        console.log('Ingredients database seeded.')
        process.exit(0);
    } catch (err) {
        throw err;
    }
})