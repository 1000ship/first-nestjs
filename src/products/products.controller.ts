import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from './product.model';
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
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): {id: string} {
    const generatedID = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedID };
  }


  // Method: Get
  // Read 역할 (복수)
  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getProducts();
  }


  // Method: Get
  // Param: id
  // Read 역할 (단수)
  @Get(':id')
  getProduct(@Param('id') prodId: string): Product {
    return this.productsService.getSingleProduct(prodId);
  }



  // Method: Patch
  // Param: id
  // Body: {title?, description?, price?}
  // Update 역할
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): null {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }


  // Method: Delete
  // Param: id
  // Delete 역할
  @Delete(":id")
  removeProduct(@Param('id') prodId: string): null {
    this.productsService.deleteProduct(prodId)
    return null
  }
}
