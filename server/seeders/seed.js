const db = require('../config/connection');
const { Drink } = require('../models');
const drinkSeeds = require('./cocktails.json');

db.once('open', async () => {
    try {
        await Drink.deleteMany({});
        await Drink.create(drinkSeeds);

        console.log('Drink database seeded.')
        process.exit(0);
    } catch (err) {
        throw err;
    }
})