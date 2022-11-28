import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { createProductDto, updateProductDto, findProductDto } from './product.dto';

export const products: Product[] = [];


//add product
export const addProduct = (data: createProductDto) : Product=> {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}

//update product
export const updateProduct = (id: string, dataTochange: updateProductDto): Product => {
  const productIndex = products.findIndex(item => item.id === id)
  const productBeforUpdate = products[productIndex]

  products[productIndex] = {
    ...productBeforUpdate,
    ...dataTochange
  }

  return products[productIndex]
}


//Find product
export const findProduct = (termSearch: findProductDto): Product[] => {

  //set here search code

  return products
}
