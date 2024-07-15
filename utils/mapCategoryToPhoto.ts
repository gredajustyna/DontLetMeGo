import {Category} from '../types/Category';
import {images} from '../assets/images/index.ts';
export const mapCategoryToPhoto = (category: Category): any => {
  console.log(images);
  switch (category) {
    case Category.DAIRY:
      return images.dairy;
    case Category.FRUITS:
      return images.fruits;
    case Category.MEALS:
      return images.meals;
    case Category.MEAT:
      return images.meat;
    case Category.VEGETABLES:
      return images.vegetables;
    case Category.OTHER:
      return images.other;
    default:
      return images.other;
  }
};
