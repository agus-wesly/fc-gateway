import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { OrderService } from './application/service/order.service';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('product/:productId')
  async getById(@Param('productId') productId: string) {
    return await this.orderService.getByProductId(productId);
  }

  @Post()
  async create(@Body() payload: unknown) {
    return await this.orderService.create(payload);
  }
}
