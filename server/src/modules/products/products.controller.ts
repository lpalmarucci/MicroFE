import { Controller, Get, Param } from '@nestjs/common';

import products, { Product } from '../../products';

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
