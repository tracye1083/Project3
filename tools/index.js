var _ = require("lodash");
const fs = require('fs')
var drinks = require("./drinkSeed_v7.json");
var drinkList = drinks.drinks;

var completeList = [];
var ingredientsList = [];
var measuresList = [];

parseJSON();

function parseJSON() {
  for (let i = 0; i < drinkList.length; i++) {
    var cocktail = {
      name: drinkList[i].strDrink,
      glass: drinkList[i].strGlass,
      instructions: drinkList[i].strInstructions,
      image: drinkList[i].strDrinkThumb,
      ingredients: [],
      measure: [],
    };

    for (let j = 1; j < 16; j++) {
      var ingredient = "strIngredient" + j;
      if (drinkList[i][ingredient] !== null) {
        cocktail.ingredients.push(drinkList[i][ingredient]);
      }
    }

    for (let k = 1; k < 16; k++) {
      var measure = "strMeasure" + k;
      if (drinkList[i][measure] !== null) {
        cocktail.measure.push(drinkList[i][measure]);
      }
    }

    completeList.push(cocktail);
    // console.log("LIST OF COCKTAILS");
    //console.log(completeList[i]);
  }


}
const writeFile = async (fileName, dataToWrite) => {
  stringDataToWrite = JSON.stringify(dataToWrite);
  fs.writeFile(fileName, stringDataToWrite, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing the drink data to a JSON Object to File.");
      return console.log(err);
    }
    console.log(fileName + " file has been written.");
  })
}

function getIngredients() {
  for (let i = 0; i < completeList.length; i++) {
    ingredientsList = ingredientsList.concat(completeList[i].ingredients);
  }

  ingredientsList = _.uniq(ingredientsList);
  console.log("LIST OF ALL UNIQUE INGREDIENTS");
  console.log(ingredientsList);
  writeFile("ingredients.json", ingredientsList)
}

function getMeasures() {
  for (let i = 0; i < completeList.length; i++) {
    measuresList = measuresList.concat(completeList[i].measure);
  }
  measuresList = _.uniq(measuresList);
  console.log("LIST OF ALL UNIQUE INGREDIENTS");
  console.log(measuresList);
  writeFile("measusres.json", measuresList)
}



getIngredients();
getMeasures()