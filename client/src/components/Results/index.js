import React from 'react';
import { SAVE_DRINK } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries'

const Results = ({ drinkData1 }) => {
    const { loading: meLoading, data: meData } = useQuery(QUERY_ME);
    const [saveDrink, { data: myDrinkData }] = useMutation(SAVE_DRINK);

return (

    <div>
        <div className='flex-row justify-space-between my-4'>
            {drinkData1 &&
                drinkData1.map((drink) => (
                    <div key={drink.id} className="col-12 col-xl-6">
                        <div className="card mb-3 p-4 bg-dark text-light">
                            <h4 className="card-header bg-primary text-light p-2 m-0">
                                {drink.name} <br />
                            </h4>
                            <ul>
                                {drink.ingsAndMeas.map(function (name, index) {
                                    return <li key={index}>{name}</li>;
                                })}
                                <li>
                                    {drink.name && drink.instructions}
                                </li>
                            </ul>

                            <button 
                                onClick={() => saveDrink({
                                    variables: {
                                        profileId: meData.me._id,
                                        drink: drink.id
                                    }
                                })}

                                className="btn btn-block btn-squared btn-light text-dark">Save to Favorites</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
)};

export default Results;