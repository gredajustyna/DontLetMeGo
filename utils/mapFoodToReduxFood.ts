import {Food} from '../types/Food';
import {ReduxFood} from '../types/ReduxFood';

export const mapFoodToReduxFood = (food: Food): ReduxFood => {
  return {
    id: food.id,
    name: food.name,
    expirationDate: food.expirationDate.toDateString(),
    category: food.category,
  };
};
