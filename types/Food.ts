import {Category} from './Category';

export interface Food {
  id: string;
  name: string;
  expirationDate: Date;
  category: Category;
}
