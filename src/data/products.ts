import { images } from './images'

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'grain' | 'ground' | 'instant';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Café Arábica Premium',
    description: 'Granos de café arábica de altura, con notas a chocolate y frutos rojos.',
    price: 15.99,
    image: images.products.arabicaPremium,
    category: 'grain',
  },
  {
    id: '2',
    name: 'Café Colombiano Molido',
    description: 'Café colombiano de origen único, con un perfecto balance y aroma intenso.',
    price: 12.99,
    image: images.products.colombianGround,
    category: 'ground',
  },
  {
    id: '3',
    name: 'Espresso Italiano',
    description: 'Blend especial para espresso con notas a caramelo y frutos secos.',
    price: 14.99,
    image: images.products.italianEspresso,
    category: 'grain',
  },
]; 