import { faker } from '@faker-js/faker'

export const generateFakeProduct = () => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    category: faker.commerce.department()
  }
}