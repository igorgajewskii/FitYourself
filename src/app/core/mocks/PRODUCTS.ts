import { Product } from 'src/app/shared/models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Rice',
    proteins: 7.5,
    carbohydrates: 76.8,
    fats: 1.9,
    calories: 337,
    defaultPortion: 100,
  },
  {
    id: 2,
    name: 'Flour',
    proteins: 11.1,
    carbohydrates: 74,
    fats: 1.2,
    calories: 347,
    defaultPortion: 30,
  },
  {
    id: 3,
    name: 'Noodles',
    proteins: 15.2,
    carbohydrates: 68,
    fats: 1.3,
    calories: 345,
    defaultPortion: 80,
  },
  {
    id: 4,
    name: 'Chicken breasts',
    proteins: 21.5,
    carbohydrates: 0,
    fats: 1.3,
    calories: 99,
    defaultPortion: 200,
  },
];
