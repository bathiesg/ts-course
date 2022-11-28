import { baseModel } from './../baseModel';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';


export interface Order extends baseModel {
  products: Product[],
  user: User
}
