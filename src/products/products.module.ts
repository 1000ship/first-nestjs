import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

// 만든 Controller와 Service를 아래와 같이 모듈로 만들어준다.
// 이 모듈은 App.module.ts에서 import 된다.
@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
