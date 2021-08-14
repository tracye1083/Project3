const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    glass: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
    },
    instructions: {
        type: String
    },
    image: {
        type: String,
    },
    measure: {
        type: [String],
    },
});

const Drink = model('Drink', drinkSchema)

module.exports = Drink;