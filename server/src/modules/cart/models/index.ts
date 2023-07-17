import { Product } from 'src/modules/products/models';
import products from 'src/products';

export type Cart = {
  cartItems: ICartItem[];
};

export interface ICartItem extends Product {
  quantity: number;
}

export const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});
