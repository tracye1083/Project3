const { Schema } = require('mongoose');

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    measure: {
        type: String,
        required: true,
    }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = ingredient