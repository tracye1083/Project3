import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import Axios from 'axios';
import * as Queries from '../utils/queries';

const HomePage = () => {

//  TRYING USING AXIOS
  const [data, setDrinkData] = useState( { drinks: [] } );

  useEffect( () => {
    const fetchData = async () => {
      const queryResult = await Axios.get (
        Queries.GRAPHQL_API, {
          query: Queries.GET_DRINKS
        }
      );
      const result = queryResult.data.data;
      
      setDrinkData( { drinks: result.drinks } )
    }
    fetchData();
  })

    return (
        <>
           <Hero />
        </>
    )
}

export default HomePage; 