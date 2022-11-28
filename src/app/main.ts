import { createProductDto } from './products/product.dto';
import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, findProduct } from './products/product.service';
for (let index = 0; index < 20; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price:  parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.datatype.number({min:0, max:200}),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products)

const productToUpdate = products[0]

updateProduct(productToUpdate.id,{
  title: 'new title',
  stock: 90
})


findProduct({
  isNew: false,
  stock: 10
})
