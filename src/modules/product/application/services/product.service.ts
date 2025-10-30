import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    async getById(id: string) {
        const response = await fetch(`${process.env.PRODUCT_SERVICE_BASE_URL}/products/${id}`)
        const data = await response.json()
        if (!response.ok) {
            if (response.status === 404) throw new NotFoundException()
            else throw new InternalServerErrorException()
        }
        return data
    }
}
