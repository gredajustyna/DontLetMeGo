import {Category} from './Category';

export interface ReduxFood {
  id: string;
  name: string;
  category: Category;
  expirationDate: string;
}
