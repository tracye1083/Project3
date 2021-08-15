import React from 'react';
import { useQuery } from '@apollo/client';

import DrinkSearch from '../components/DrinkSearch';

import { GET_DRINKS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(GET_DRINKS);
  // const drinkData = data?.drinks || [];
  // console.log(drinkData)

  return (
    
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <DrinkSearch
            title="Search for an ingredient above"
          /> 
        </div>
      </div>
    </main>
  );
};

export default Home;

        // {loading ? (
          //   <div>Loading...</div>
          // ) : (
          //   <ProfileList
          //     drinks={drinkData}
          //     title="Search for an ingredient above"
          //   />
          // )}