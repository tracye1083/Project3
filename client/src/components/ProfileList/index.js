import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_DRINK_BY_INGREDIENT } from '../../utils/queries';

const ProfileList = ({ drinks, title }) => {
  const [ingredient, setIngredient] = useState();

  const [search, { loading, data }] = useLazyQuery(GET_DRINK_BY_INGREDIENT, {
    variables: { ingredient: ingredient }
  })
  const drinkData = data?.drinkByIngredient || [];
  console.log(drinkData)
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(ingredient)
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
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Vodka, gin, rum..."
            value={ingredient}
            className="form-input w-100"
            onChange={(event) => setIngredient(event.target.value)}
          />
        </div>
        <div className="col-12 col-lg-3">
          <button
            className="btn btn-info btn-block py-3" 
            type="submit"
            >
            Search
          </button>
        </div>
      </form>
      <div>
        <h3 className="text-primary">{title}</h3>
        <div className="flex-row justify-space-between my-4">
          {drinkData &&
            drinkData.map((drink) => (
              <div key={drink._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {drink.name} <br />
                    <span className="text-white" style={{ fontSize: '1rem' }}>
                      currently has {drink.name ? drink.ingredients.length : 0}{' '}
                      ingredient 
                      {drink.name && drink.name.length === 1 ? '' : 's'}
                    </span>
                  </h4>
                  <ul>
                    <li>
                      {drink.name && drink.instructions}
                    </li>
                    <li>
                      {drink.name && drink.ingredients}
                    </li>
                    <li>
                      {drink.name && drink.measure}
                    </li>
                  </ul>
  
                  <Link
                    className="btn btn-block btn-squared btn-light text-dark"
                    to={`/drinks/${drink._id}`}
                  >
                    View and endorse their skills.
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;