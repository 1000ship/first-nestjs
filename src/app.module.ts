import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], // 만들었던 ProductsModule 이 여기서 임포트된다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
