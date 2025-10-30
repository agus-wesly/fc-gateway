import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './application/service/order.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
