const { Schema } = require('mongoose');

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  glass: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient"
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  // drinkId: {
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
  },
});

const Drink = mongoose.model("Drink", drinkSchema)

module.exports = Drink;
