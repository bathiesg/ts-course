import { updateProduct, findProduct } from './product.service';
import { Product, Sizes } from "./product.model";

//take all product params excepts that given into omit and add an extra param
export interface createProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//take only params passed into pick
type chooseProductData = Pick<Product, "color" | "size">


//update product
export interface updateProductDto extends Partial<createProductDto> {}


//Find product: It could be possible to find product with any product attribut but in readonly mode
export interface findProductDto extends Readonly<Partial<Product>> {}
