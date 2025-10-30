import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    async getByProductId(productId: string) {
        const response = await fetch(`${process.env.ORDER_SERVICE_BASE_URL}/orders/product/${productId}`)
        const data = await response.json()
        if (!response.ok) {
            throw new HttpException(data, response.status);
        }
        return data
    }

    async create(payload: unknown) {
        const response = await fetch(`${process.env.ORDER_SERVICE_BASE_URL}/orders`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        if (!response.ok) {
            throw new HttpException(data, response.status);
        }
        return data
    }
}
