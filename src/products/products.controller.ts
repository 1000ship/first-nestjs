import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

// Controller 정의
// 데코레이터에 넣은 products는 이 컨트롤러의 Route를 의미한다.
// 이후 @Get, @Post, @Patch, @Delete 도 Sub route를 의미한다.
@Controller('products')
export class ProductsController {
  // 데이터 Fetch, Execute를 위한 API
  // private readonly productsService;
  // this.productsService = productsService
  constructor(private readonly productsService: ProductsService) {}

  // Method: Post
  // Body : {title, description, price}
  // Create 역할
  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedID = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedID };
  }

  // Method: Get
  // Read 역할 (복수)
  @Get()
  async getAllProducts() {
    return await this.productsService.getProducts();
  }

  // Method: Get
  // Param: id
  // Read 역할 (단수)
  @Get(':id')
  async getProduct(@Param('id') prodId: string) {
    return await this.productsService.getSingleProduct(prodId);
  }

  // Method: Patch
  // Param: id
  // Body: {title?, description?, price?}
  // Update 역할
  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  }

  // Method: Delete
  // Param: id
  // Delete 역할
  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
  }
}
