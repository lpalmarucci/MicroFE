import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Cart, initialCart } from './models';
import products from 'src/products';

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() reqBody: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find((ci) => ci.id === +reqBody.id);
    if (cartItem) cartItem.quantity += 1;
    else
      cart.cartItems.push({
        ...products.find((p) => p.id === +reqBody.id),
        quantity: 1,
      });
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete() {}
}
