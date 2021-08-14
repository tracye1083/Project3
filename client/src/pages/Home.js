import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { GET_DRINKS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(GET_DRINKS);
  // const drinkData = data?.drinks || [];
  // console.log(drinkData)

  return (
    
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <ProfileList
            title="Search for an ingredient below"
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
          //     title="Search for an ingredient below"
          //   />
          // )}