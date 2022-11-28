import { baseModel } from './../baseModel';
import { Category } from '../categories/category.model';


export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends baseModel {
  title: string,
  stock: number,
  image: string,
  price: number,
  color: string,
  description: string,
  tags: string[],
  isNew: boolean,
  size?: Sizes,
  category: Category
}
