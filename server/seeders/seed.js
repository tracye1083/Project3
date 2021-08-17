const db = require('../config/connection');
const { Profile, Drink } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const drinkSeeds = require('./cocktails.json');



const dataCopy = drinkSeeds.map((drink) => {
    drink.ingredients.forEach((ingredient) => {
        ingredient.toLowerCase()
    })
})

console.log(dataCopy)

// db.once('open', async () => {
//     try {
//         await Profile.deleteMany({});
//         await Profile.create(profileSeeds);
//         console.log('Profile database seeded.')

//         await Drink.deleteMany({});
//         await Drink.create(drinkSeeds);
//         console.log('Drink database seeded');

//         process.exit(0);
//     } catch (err) {
//         throw err;
//     }
// });