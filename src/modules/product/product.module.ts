import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './application/services/product.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
