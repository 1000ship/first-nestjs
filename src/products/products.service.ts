import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString().substring(2);
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getSingleProduct(productId: string): Product {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(
    prodId: string,
    title: string,
    desc: string,
    price: number,
  ): any {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = { ...product };
    if (title) updatedProduct.title = title;
    if (desc) updatedProduct.desc = desc;
    if (price) updatedProduct.price = price;
    this.products[index] = updatedProduct;
    return product;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.getProducts().findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) throw new NotFoundException('Could not find product.');
    return [{ ...product }, productIndex];
  }

  deleteProduct(prodId: string): void {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }
}
