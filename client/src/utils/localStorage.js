export const getSavedDrinkIds = () => {
    const savedDrinkIds = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : [];
  
    return savedDrinkIds;
  };

export const saveDrink = (drinkId) => {
    
    const localStorageDrinks = JSON.parse(localStorage.getItem('saved_drinks')) || []
    if(!localStorageDrinks.includes(drinkId)) {
        localStorageDrinks.unshift(drinkId)
    
        localStorage.setItem('saved_drinks', JSON.stringify(localStorageDrinks));
    } 
}

export const removeDrinkId = (drinkId) => {
    const savedDrinkIds = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : null;
  
    if (!savedDrinkIds) {
      return false;
    }
  
    const updatedSavedDrinkIds = savedDrinkIds?.filter((savedDrinkId) => savedDrinkId !== drinkId);
    localStorage.setItem('saved_drinks', JSON.stringify(updatedSavedDrinkIds));
  
    return true;
  };