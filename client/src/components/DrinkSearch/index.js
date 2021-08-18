import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_DRINK_BY_INGREDIENT, QUERY_ME } from '../../utils/queries';
import { SAVE_DRINK } from '../../utils/mutations';
import { Button } from 'react-bootstrap';
import { saveDrink } from '../../utils/localStorage';

const DrinkSearch = ({ drinks, title }) => {
  const [ingredient, setIngredient] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { status, profile } = useQuery(QUERY_ME);
  const [saveDrink, {d}] = useMutation(SAVE_DRINK);
  const [search, { loading, data }] = useLazyQuery(GET_DRINK_BY_INGREDIENT, {
    variables: { ingredient: searchTerm }
  })



  let ingsAndMeas = []
  function mergeIngsAndMeas() {
    drinkData1 = []
    console.log('test123')
    console.log(drinkData)
    console.log('test456')
    for (let d = 0; d < drinkData.length; d++) {
      console.log('name: ' + drinkData[d].name)
      ingsAndMeas = []
      for (let i = 0; i < drinkData[d].ingredients.length; i++) {
        console.log('ing: ' + drinkData[d].measure[i] + ' ' + drinkData[d].ingredients[i])
        if (drinkData[d].measure[i]) {
          console.log("meas exist")
          ingsAndMeas.push(drinkData[d].measure[i] + '- ' + drinkData[d].ingredients[i])
        }
        else {
          console.log("meas not exist")
          ingsAndMeas.push(drinkData[d].ingredients[i])
        }
      }
      drinkData1.push({ "name": drinkData[d].name, "image": drinkData[d].image, "instructions": drinkData[d].instructions, "ingsAndMeas": ingsAndMeas })
      console.log(drinkData1)

    }
    return drinkData1
  }

  const drinkData = data?.drinkByIngredient || [];
  console.log(drinkData)
  var drinkData1
  //if (drinkData.length > 0) {
  drinkData1 = mergeIngsAndMeas(drinkData)
  //}
  //console.log(drinkIngs)//[1]
  // console.log([1].measures)
  console.log("test1")
  console.log(drinkData1)
  console.log("test2")



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSearchTerm(ingredient)
    console.log(searchTerm)
    search();
  }

  //   try {

  //   console.log(data)
  //   console.log(drinkData);
  //   // setIngredient('');
  //   console.log(ingredient);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // if (!drinks.length) {
  //   return <h3>No Drinks Yet</h3>;
  // }

  return (
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Vodka, gin, rum..."
          value={ingredient}
          className="form-input w-100"
          onChange={(event) => setIngredient(event.target.value)}
        />
        <label className='formLabel'>
          Choose a Booze:<br></br>
          <select value={ingredient} onChange={(e) => setIngredient(e.target.value)}>
            <option disabled>Choose a booze below!</option>
            <option value="151 Proof Rum">151 Proof Rum</option>
            <option value="Absinthe">Absinthe</option>
            <option value="Absolut Citron">Absolut Citron</option>
            <option value="Absolut Kurant">Absolut Kurant</option>
            <option value="Absolut Peppar">Absolut Peppar</option>
            <option value="Absolut Vodka">Absolut Vodka</option>
            <option value="Advocaat">Advocaat</option>
            <option value="Ale">Ale</option>
            <option value="Amaretto">Amaretto</option>
            <option value="Amaro Montenegro">Amaro Montenegro</option>
            <option value="Angostura bitters">Angostura bitters</option>
            <option value="Anis">Anis</option>
            <option value="Anisette">Anisette</option>
            <option value="Aperol">Aperol</option>
            <option value="Apfelkorn">Apfelkorn</option>
            <option value="Apple Brandy">Apple Brandy</option>
            <option value="Apple Schnapps">Apple Schnapps</option>
            <option value="Applejack">Applejack</option>
            <option value="Apricot Brandy">Apricot Brandy</option>
            <option value="Aquavit">Aquavit</option>
            <option value="Añejo rum">Añejo rum</option>
            <option value="Bacardi Limon">Bacardi Limon</option>
            <option value="Bailey's Irish Cream">Bailey's Irish Cream</option>
            <option value="Banana Liqueur">Banana Liqueur</option>
            <option value="Beer">Beer</option>
            <option value="Benedictine">Benedictine</option>
            <option value="Bitters">Bitters</option>
            <option value="Black Sambuca">Black Sambuca</option>
            <option value="Blackberry brandy">Blackberry brandy</option>
            <option value="Blackcurrant cordial">Blackcurrant cordial</option>
            <option value="Blackstrap rum">Blackstrap rum</option>
            <option value="Blended Scotch">Blended Scotch</option>
            <option value="Blended whiskey">Blended whiskey</option>
            <option value="Blue Curacao">Blue Curacao</option>
            <option value="Blueberry schnapps">Blueberry schnapps</option>
            <option value="Bourbon">Bourbon</option>
            <option value="Brandy">Brandy</option>
            <option value="Butterscotch schnapps">Butterscotch schnapps</option>
            <option value="Cachaca">Cachaca</option>
            <option value="Campari">Campari</option>
            <option value="Chambord raspberry liqueur">Chambord raspberry liqueur</option>
            <option value="Champagne">Champagne</option>
            <option value="Cherry Heering">Cherry Heering</option>
            <option value="Cherry brandy">Cherry brandy</option>
            <option value="Cherry liqueur">Cherry liqueur</option>
            <option value="Chocolate liqueur">Chocolate liqueur</option>
            <option value="Coconut liqueur">Coconut liqueur</option>
            <option value="Coconut rum">Coconut rum</option>
            <option value="Coffee brandy">Coffee brandy</option>
            <option value="Coffee liqueur">Coffee liqueur</option>
            <option value="Cognac">Cognac</option>
            <option value="Cointreau">Cointreau</option>
            <option value="Corona">Corona</option>
            <option value="Cranberry vodka">Cranberry vodka</option>
            <option value="Creme de Banane">Creme de Banane</option>
            <option value="Creme de Cacao">Creme de Cacao</option>
            <option value="Creme de Cassis">Creme de Cassis</option>
            <option value="Creme de Mure">Creme de Mure</option>
            <option value="Crown Royal">Crown Royal</option>
            <option value="Curacao">Curacao</option>
            <option value="Daiquiri mix">Daiquiri mix</option>
            <option value="Dark Creme de Cacao">Dark Creme de Cacao</option>
            <option value="Dark rum">Dark rum</option>
            <option value="Drambuie">Drambuie</option>
            <option value="Dry Vermouth">Dry Vermouth</option>
            <option value="Dubonnet Rouge">Dubonnet Rouge</option>
            <option value="Elderflower cordial">Elderflower cordial</option>
            <option value="Erin Cream">Erin Cream</option>
            <option value="Everclear">Everclear</option>
            <option value="Falernum">Falernum</option>
            <option value="Firewater">Firewater</option>
            <option value="Frangelico">Frangelico</option>
            <option value="Galliano">Galliano</option>
            <option value="Gin">Gin</option>
            <option value="Godiva liqueur">Godiva liqueur</option>
            <option value="Gold rum">Gold rum</option>
            <option value="Gold tequila">Gold tequila</option>
            <option value="Goldschlager">Goldschlager</option>
            <option value="Grain alcohol">Grain alcohol</option>
            <option value="Grand Marnier">Grand Marnier</option>
            <option value="Green Chartreuse">Green Chartreuse</option>
            <option value="Green Creme de Menthe">Green Creme de Menthe</option>
            <option value="Guinness stout">Guinness stout</option>
            <option value="Hpnotiq">Hpnotiq</option>
            <option value="Irish whiskey">Irish whiskey</option>
            <option value="Irish cream">Irish cream</option>
            <option value="Islay single malt Scotch">Islay single malt Scotch</option>
            <option value="Jack Daniels">Jack Daniels</option>
            <option value="Jägermeister">Jägermeister</option>
            <option value="Jim Beam">Jim Beam</option>
            <option value="Johnnie Walker">Johnnie Walker</option>
            <option value="Kahlua">Kahlua</option>
            <option value="Kirschwasser">Kirschwasser</option>
            <option value="Kiwi liqueur">Kiwi liqueur</option>
            <option value="Kummel">Kummel</option>
            <option value="Lager">Lager</option>
            <option value="Lemon vodka">Lemon vodka</option>
            <option value="Light rum">Light rum</option>
            <option value="Lillet">Lillet</option>
            <option value="Lillet Blanc">Lillet Blanc</option>
            <option value="Lime juice cordial">Lime juice cordial</option>
            <option value="Lime vodka">Lime vodka</option>
            <option value="Malibu Rum">Malibu Rum</option>
            <option value="Maraschino liqueur">Maraschino liqueur</option>
            <option value="Melon liqueur">Melon liqueur</option>
            <option value="Mezcal">Mezcal</option>
            <option value="Midori">Midori</option>
            <option value="Orange bitters">Orange Bitters</option>
            <option value="Orange Curacao">Orange Curacao</option>
            <option value="Ouzo">Ouzo</option>
            <option value="Passoa">Passoa</option>
            <option value="Peach Bitters">Peach Bitters</option>
            <option value="Peach Vodka">Peach Vodka</option>
            <option value="Peach brandy">Peach brandy</option>
            <option value="Peach schnapps">Peach schnapps</option>
            <option value="Peachtree schnapps">Peachtree schnapps</option>
            <option value="Peppermint schnapps">Peppermint schnapps</option>
            <option value="Pernod">Pernod</option>
            <option value="Peychaud bitters">Peychaud bitters</option>
            <option value="Pisang Ambon">Pisang Ambon</option>
            <option value="Jägermeister">Jägermeister</option>
            <option value="Pisco">Pisco</option>
            <option value="Port">Port</option>
            <option value="Prosecco">Prosecco</option>
            <option value="Raspberry Liqueur">Raspberry Liqueur</option>
            <option value="Raspberry Vodka">Raspberry Vodka</option>
            <option value="Red wine">Red wine</option>
            <option value="Ricard">Ricard</option>
            <option value="Rose">Rose</option>
            <option value="Rosso Vermouth">Rosso Vermouth</option>
            <option value="Ruby Port">Ruby Port</option>
            <option value="Rum">Rum</option>
            <option value="Rumple Minze">Rumple Minze</option>
            <option value="Rye whiskey">Rye whiskey</option>
            <option value="Sambuca">Sambuca</option>
            <option value="Scotch">Scotch</option>
            <option value="Sherry">Sherry</option>
            <option value="Sloe gin">Sloe gin</option>
            <option value="Southern Comfort">Southern Comfort</option>
            <option value="Spiced rum">Spiced rum</option>
            <option value="St. Germain">St. Germain</option>
            <option value="Strawberry liqueur">Strawberry liqueur</option>
            <option value="Strawberry schnapps">Strawberry schnapps</option>
            <option value="Sweet Vermouth">Sweet Vermouth</option>
            <option value="Tennessee whiskey">Tennessee whiskey</option>
            <option value="Tequila">Tequila</option>
            <option value="Tia maria">Tia maria</option>
            <option value="Triple Sec">Triple Sec</option>
            <option value="Vanilla vodka">Vanilla vodka</option>
            <option value="Vermouth">Vermouth</option>
            <option value="Vodka">Vodka</option>
            <option value="Whiskey">Whiskey</option>
            <option value="White Creme de Menthe">White Creme de Menthe</option>
            <option value="White Rum">White rum</option>
            <option value="White Wine">White Wine</option>
            <option value="Wild Turkey">Wild Turkey</option>
            <option value="Wine">Wine</option>
            <option value="Yellow Chartreuse">Yellow Chartreuse</option>
            <option value="Yukon Jack">Yukon Jack</option>
            <option value="Zima">Zima</option>

          </select>
        </label><br></br>
        <button className="submit" type="submit" value="Submit">Show Drinks</button>
      </form>

      <div>
        <h3 className='text-primary'>{title}</h3>
        <div className="flex-row justify-space-between my-4">
          {drinkData1 &&
            drinkData1.map((drink) => (
              <div key={drink._id} className="col-12 col-xl-6">
                <div className="card mb-3 bg-dark text-light">
                  <h4 className="card-header bg-primary text-light p-2 m-0">
                    {drink.name} <br />
                    <span className="text-white" style={{ fontSize: '1rem' }}>
                      Has {drink.name ? drink.ingsAndMeas.length : 0}{' '}
                      ingredient
                      {drink.name && drink.name.length === 1 ? '' : 's'}
                    </span>
                  </h4>
                  <ul>
                    {drink.ingsAndMeas.map(function (name, index) {
                      return <li key={index}>{name}</li>;
                    })}
                    <li>
                      {drink.name && drink.instructions}
                    </li>
                  </ul>

                  <Link
                    onClick={ () => saveDrink({
                      variables: {profileId: '611c4aee7cbd530e265d8114', 
                        drink: '611c4aee7cbd530e265d811e'}
                    })}

                    className="btn btn-block btn-squared btn-light text-dark"
                    to={`/me/${drink._id}`}
                  >
                    Save to Favorites
                  </Link>
                </div>
              </div>
            ))}
        </div>

      </div>

    </div>

    // <div>
    //   <form
    //     className="flex-row justify-center justify-space-between-md align-center"
    //     onSubmit={handleFormSubmit}
    //   >
    //     <div className="col-12 col-lg-9">
    //       <input
    //         placeholder="Vodka, gin, rum..."
    //         value={ingredient}
    //         className="form-input w-100"
    //         onChange={(event) => setIngredient(event.target.value)}
    //       />
    //     </div>
    //     <div className="col-12 col-lg-3">
    //       <button
    //         className="btn btn-info btn-block py-3" 
    //         type="submit"
    //         >
    //         Search
    //       </button>
    //     </div>
    //   </form>
    //   <div>
    //     <h3 className="text-primary">{title}</h3>
    //     <div className="flex-row justify-space-between my-4">
    //       {drinkData &&
    //         drinkData.map((drink) => (
    //           <div key={drink._id} className="col-12 col-xl-6">
    //             <div className="card mb-3">
    //               <h4 className="card-header bg-primary text-light p-2 m-0">
    //                 {drink.name} <br />
    //                 <span className="text-white" style={{ fontSize: '1rem' }}>
    //                   Has {drink.name ? drink.ingredients.length : 0}{' '}
    //                   ingredient 
    //                   {drink.name && drink.name.length === 1 ? '' : 's'}
    //                 </span>
    //               </h4>
    //               <ul>
    //                 <li>
    //                   {drink.name && drink.ingredients}
    //                 </li>
    //                 <li>
    //                   {drink.name && drink.measure}
    //                 </li>
    //                 <li>
    //                   {drink.name && drink.instructions}
    //                 </li>
    //               </ul>

    //               <Link
    //                 className="btn btn-block btn-squared btn-light text-dark"
    //                 to={`/drinks/${drink._id}`}
    //               >
    //                 This is placeholder text.
    //               </Link>
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DrinkSearch;