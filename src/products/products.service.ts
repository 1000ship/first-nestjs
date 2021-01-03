import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

// Controller에 private 객체로 인스턴스화되며 주로 DB Fetch, Create, Delete, Edit 시, API로 사용된다.
@Injectable()
export class ProductsService {

  // DB에 저장하는 대신 private 변수로 Products를 저장한다.
  private products: Product[] = [];

  // CREATE
  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString().substring(2);
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  // GET_ALL
  getProducts(): Product[] {
    return this.products;
  }

  // GET_ONE
  getSingleProduct(productId: string): Product {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  // UPDATE_ONE
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

  // DELETE
  deleteProduct(prodId: string): void {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  // FETCH_ONE
  // Read, Update, Delete 시 반드시 특정 id로 찾아야하는 작업이 있는데 이 반복되는 작업을 줄인다.
  private findProduct(id: string): [Product, number] {
    const productIndex = this.getProducts().findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) throw new NotFoundException('Could not find product.');
    return [{ ...product }, productIndex];
  }
}
