import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

// Controller에 private 객체로 인스턴스화되며 주로 DB Fetch, Create, Delete, Edit 시, API로 사용된다.
@Injectable()
export class ProductsService {
  // DB에 저장하는 대신 private 변수로 Products를 저장한다.

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  // CREATE
  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({ title, desc, price });
    const result = await newProduct.save();
    return result.id as string;
  }

  // GET_ALL
  async getProducts() {
    return await this.productModel.find();
  }

  // GET_ONE
  async getSingleProduct(productId: string) {
    return await this.findProduct(productId); 
  }

  // UPDATE_ONE
  async updateProduct(
    prodId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const product = await this.findProduct(prodId); 
    if (title) product.title = title;
    if (desc) product.desc = desc;
    if (price) product.price = price;
    product.save();
    return product;
  }

  // DELETE
  async deleteProduct(prodId: string) {
    const product = await this.findProduct(prodId);
    product.delete();
  }

  // FETCH_ONE
  // Read, Update, Delete 시 반드시 특정 id로 찾아야하는 작업이 있는데 이 반복되는 작업을 줄인다.
  private async findProduct(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('Could not find product.');
    return product;
  }
}
