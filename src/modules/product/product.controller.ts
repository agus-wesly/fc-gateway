import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './application/services/product.service';

@Controller("api/products")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get(":id")
    async getById(@Param("id") id: string) {
        return await this.productService.getById(id)
    }
}
