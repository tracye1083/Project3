const fetch = require("node-fetch")
const fs = require('fs')
let drinkSeedOpen = '{"drinks": ['
let drinkSeedData = ''
let drinkClose = ']}'
let textDrinkList = ''
function getTheDrinks() {
    let drinkList = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
    fetch(drinkList)
        .then(res => res.json())
        .then(function (data2) {
            for (var i = 0; i < (data2.drinks.length) - 1; i++) {
                drinkSeedData = drinkSeedData + `{"name":"${data2.drinks[i].strDrink}",`
                drinkSeedData = drinkSeedData + `"category":"${data2.drinks[i].strCategory}",`
                drinkSeedData = drinkSeedData + `"alcoholic":"${data2.drinks[i].strAlcoholic}",`
                drinkSeedData = drinkSeedData + `"glass":"${data2.drinks[i].strGlass}",`
                drinkSeedData = drinkSeedData + `"instructions":"${data2.drinks[i].strInstructions}",`
                drinkSeedData = drinkSeedData + `"image":"${data2.drinks[i].strDrinkThumb}",`
                drinkSeedData = drinkSeedData + `"ingredient1":"${data2.drinks[i].strIngredient1}",`
                drinkSeedData = drinkSeedData + `"ingredient2":"${data2.drinks[i].strIngredient2}",`
                drinkSeedData = drinkSeedData + `"ingredient3":"${data2.drinks[i].strIngredient3}",`
                drinkSeedData = drinkSeedData + `"ingredient4":"${data2.drinks[i].strIngredient4}",`
                drinkSeedData = drinkSeedData + `"ingredient5":"${data2.drinks[i].strIngredient5}",`
                drinkSeedData = drinkSeedData + `"ingredient6":"${data2.drinks[i].strIngredient6}",`
                drinkSeedData = drinkSeedData + `"ingredient7":"${data2.drinks[i].strIngredient7}",`
                drinkSeedData = drinkSeedData + `"ingredient8":"${data2.drinks[i].strIngredient8}",`
                drinkSeedData = drinkSeedData + `"ingredient9":"${data2.drinks[i].strIngredient9}",`
                drinkSeedData = drinkSeedData + `"ingredient10":"${data2.drinks[i].strIngredient10}",`
                drinkSeedData = drinkSeedData + `"ingredient11":"${data2.drinks[i].strIngredient11}",`
                drinkSeedData = drinkSeedData + `"ingredient12":"${data2.drinks[i].strIngredient12}",`
                drinkSeedData = drinkSeedData + `"ingredient13":"${data2.drinks[i].strIngredient13}",`
                drinkSeedData = drinkSeedData + `"ingredient14":"${data2.drinks[i].strIngredient14}",`
                drinkSeedData = drinkSeedData + `"ingredient15":"${data2.drinks[i].strIngredient15}",`
                drinkSeedData = drinkSeedData + `"measure1":"${data2.drinks[i].strMeasure1}",`
                drinkSeedData = drinkSeedData + `"measure2":"${data2.drinks[i].strMeasure2}",`
                drinkSeedData = drinkSeedData + `"measure3":"${data2.drinks[i].strMeasure3}",`
                drinkSeedData = drinkSeedData + `"measure4":"${data2.drinks[i].strMeasure4}",`
                drinkSeedData = drinkSeedData + `"measure5":"${data2.drinks[i].strMeasure5}",`
                drinkSeedData = drinkSeedData + `"measure6":"${data2.drinks[i].strMeasure6}",`
                drinkSeedData = drinkSeedData + `"measure7":"${data2.drinks[i].strMeasure7}",`
                drinkSeedData = drinkSeedData + `"measure8":"${data2.drinks[i].strMeasure8}",`
                drinkSeedData = drinkSeedData + `"measure9":"${data2.drinks[i].strMeasure9}",`
                drinkSeedData = drinkSeedData + `"measure10":"${data2.drinks[i].strMeasure10}",`
                drinkSeedData = drinkSeedData + `"measure11":"${data2.drinks[i].strMeasure11}",`
                drinkSeedData = drinkSeedData + `"measure12":"${data2.drinks[i].strMeasure12}",`
                drinkSeedData = drinkSeedData + `"measure13":"${data2.drinks[i].strMeasure13}",`
                drinkSeedData = drinkSeedData + `"measure14":"${data2.drinks[i].strMeasure14}",`
                drinkSeedData = drinkSeedData + `"measure15":"${data2.drinks[i].strMeasure15}"},`
            }
            drinkSeedData = drinkSeedData + `{"name":"${data2.drinks[i].strDrink}",`
            drinkSeedData = drinkSeedData + `"category":"${data2.drinks[i].strCategory}",`
            drinkSeedData = drinkSeedData + `"alcoholic":"${data2.drinks[i].strAlcoholic}",`
            drinkSeedData = drinkSeedData + `"glass":"${data2.drinks[i].strGlass}",`
            drinkSeedData = drinkSeedData + `"instructions":"${data2.drinks[i].strInstructions}",`
            drinkSeedData = drinkSeedData + `"image":"${data2.drinks[i].strDrinkThumb}",`
            drinkSeedData = drinkSeedData + `"ingredient1":"${data2.drinks[i].strIngredient1}",`
            drinkSeedData = drinkSeedData + `"ingredient2":"${data2.drinks[i].strIngredient2}",`
            drinkSeedData = drinkSeedData + `"ingredient3":"${data2.drinks[i].strIngredient3}",`
            drinkSeedData = drinkSeedData + `"ingredient4":"${data2.drinks[i].strIngredient4}",`
            drinkSeedData = drinkSeedData + `"ingredient5":"${data2.drinks[i].strIngredient5}",`
            drinkSeedData = drinkSeedData + `"ingredient6":"${data2.drinks[i].strIngredient6}",`
            drinkSeedData = drinkSeedData + `"ingredient7":"${data2.drinks[i].strIngredient7}",`
            drinkSeedData = drinkSeedData + `"ingredient8":"${data2.drinks[i].strIngredient8}",`
            drinkSeedData = drinkSeedData + `"ingredient9":"${data2.drinks[i].strIngredient9}",`
            drinkSeedData = drinkSeedData + `"ingredient10":"${data2.drinks[i].strIngredient10}",`
            drinkSeedData = drinkSeedData + `"ingredient11":"${data2.drinks[i].strIngredient11}",`
            drinkSeedData = drinkSeedData + `"ingredient12":"${data2.drinks[i].strIngredient12}",`
            drinkSeedData = drinkSeedData + `"ingredient13":"${data2.drinks[i].strIngredient13}",`
            drinkSeedData = drinkSeedData + `"ingredient14":"${data2.drinks[i].strIngredient14}",`
            drinkSeedData = drinkSeedData + `"ingredient15":"${data2.drinks[i].strIngredient15}",`
            drinkSeedData = drinkSeedData + `"measure1":"${data2.drinks[i].strMeasure1}",`
            drinkSeedData = drinkSeedData + `"measure2":"${data2.drinks[i].strMeasure2}",`
            drinkSeedData = drinkSeedData + `"measure3":"${data2.drinks[i].strMeasure3}",`
            drinkSeedData = drinkSeedData + `"measure4":"${data2.drinks[i].strMeasure4}",`
            drinkSeedData = drinkSeedData + `"measure5":"${data2.drinks[i].strMeasure5}",`
            drinkSeedData = drinkSeedData + `"measure6":"${data2.drinks[i].strMeasure6}",`
            drinkSeedData = drinkSeedData + `"measure7":"${data2.drinks[i].strMeasure7}",`
            drinkSeedData = drinkSeedData + `"measure8":"${data2.drinks[i].strMeasure8}",`
            drinkSeedData = drinkSeedData + `"measure9":"${data2.drinks[i].strMeasure9}",`
            drinkSeedData = drinkSeedData + `"measure10":"${data2.drinks[i].strMeasure10}",`
            drinkSeedData = drinkSeedData + `"measure11":"${data2.drinks[i].strMeasure11}",`
            drinkSeedData = drinkSeedData + `"measure12":"${data2.drinks[i].strMeasure12}",`
            drinkSeedData = drinkSeedData + `"measure13":"${data2.drinks[i].strMeasure13}",`
            drinkSeedData = drinkSeedData + `"measure14":"${data2.drinks[i].strMeasure14}",`
            drinkSeedData = drinkSeedData + `"measure15":"${data2.drinks[i].strMeasure15}"}`
            textDrinkList = drinkSeedOpen + drinkSeedData + drinkClose
            // print the text version of the drink data
            // console.log(`jsonDL:${jsonDrinkList}`)
            //print the data returned from the API call
            // console.log(data2)
            //convert the text drink data to a json object
            var jsonDrinkList = JSON.parse(textDrinkList);
            //Print the json version of the drink data
            //console.log(jsonObj);

            // stringify JSON Object
            var stringDrinkList = JSON.stringify(jsonDrinkList);
            console.log(stringDrinkList);

            fs.writeFile("drinkSeed.json", stringDrinkList, 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing the drink data to a JSON Object to File.");
                    return console.log(err);
                }

                console.log("The drink JSON file has been written.");
            })
        })
}

getTheDrinks()