const fetch = require("node-fetch")
const fs = require('fs')
let drinkSeedOpen = '{"drinks": ['
let drinkSeedData = []
let drinkSeedClose = ']}'
let stringDataToWrite = ''
let drinkList = {}
let counter = 0


async function fetchDrinkLetterList(URL) {
    try {
        console.log(`URL: ${URL}`)
        fetch(URL)
            .then(function (res) {
                if (res.ok) {
                    return res.json()
                }
                else {
                    return Promise.reject(res)
                }
            })
            .then(function (drinkList) {
                buildDrinkObject(drinkList)
            })
    }
    catch {

    }

}

const loopThroughURLs = async () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z', '9', '7', '6', '5', '4', '3', '2', '1']
    //const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '9', '7', '6', '5', '4', '3', '2', '1']
    //const letters = ['1', '2']
    for (let i = 0; i < letters.length; i++) {
        URL = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letters[i]}`
        await fetchDrinkLetterList(URL)
    }
}

const buildDrinkObject = async (drinkList) => {
    // console.log("type: " + drinkList.drinks.length)
    for (let i = 0; i < drinkList.drinks.length; i++) {
        // console.log(drinkList.drinks[i])
        await writeFile(drinkList.drinks[i], true, false)
        //await writeFile(',', true, false)
        // writeFile(',', false, false)
    }
}

const writeFile = async (dataToWrite, convertJSON, createNew) => {
    //var jsonDataToWrite = JSON.parse(dataToWrite);
    counter++
    if (convertJSON) {
        stringDataToWrite = JSON.stringify(dataToWrite);
    }
    else {
        stringDataToWrite = dataToWrite
    }

    //  console.log("type: " + typeof (stringDataToWrite))
    if (createNew) {
        fs.writeFile("drinkSeed_v7.json", stringDataToWrite, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing the drink data to a JSON Object to File.");
                return console.log(err);
            }
            console.log("The drink JSON file has been written. Drinks created: " + counter);
        })
    }
    else {
        fs.appendFile("drinkSeed_v7.json", stringDataToWrite, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing the drink data to a JSON Object to File.");
                return console.log(err);
            }
            console.log("The drink JSON file has been written. Drinks created: " + counter);
        })
    }
}


async function runMain() {
    writeFile(drinkSeedOpen, false, true)
    await loopThroughURLs()
    //await writeFile(drinkSeedClose, false, false)

}

runMain()
