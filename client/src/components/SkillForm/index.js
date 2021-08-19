import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_DRINK } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SkillForm = ({ profileId }) => {
  const [drink, setDrink] = useState('');

  const [addDrink, { error }] = useMutation(ADD_DRINK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addDrink({
        variables: { name, glass, measure, ingredients, instructions },
      });

      setDrink('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='savedDrinks'></div>
  );
};

export default SkillForm;
