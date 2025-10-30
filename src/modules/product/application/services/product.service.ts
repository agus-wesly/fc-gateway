import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  async getById(id: string) {
    const response = await fetch(
      `${process.env.PRODUCT_SERVICE_URL}/products/${id}`,
    );
    const data = await response.json();
    if (!response.ok) {
      throw new HttpException(data, response.status);
    }
    return data;
  }

  async create(payload: unknown) {
    const response = await fetch(
      `${process.env.PRODUCT_SERVICE_URL}/products`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new HttpException(data, response.status);
    }
    return data;
  }
}
