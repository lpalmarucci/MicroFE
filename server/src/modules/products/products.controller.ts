import { Controller, Get, Param } from '@nestjs/common';

import products from '../../products';
import { Product } from './models';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get('/:id')
  async getById(@Param('id') productId: string): Promise<Product> {
    return products.find((p) => p.id === +productId);
  }
}
