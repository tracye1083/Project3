const db = require('../config/connection');
const { Profile, Drink } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const drinkSeeds = require('./cocktails.json');

db.once('open', async () => {
    try {
        await Profile.deleteMany({});
        await Profile.create(profileSeeds);
        console.log('Profile database seeded.')

        await Drink.deleteMany({});
        await Drink.create(drinkSeeds);
        console.log('Drink database seeded');

        process.exit(0);
    } catch (err) {
        throw err;
    }
});