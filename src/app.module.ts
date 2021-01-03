import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "test";
 
let mongooseModule = null;
if (MONGO_USERNAME && MONGO_PASSWORD && MONGO_DB_NAME)
  mongooseModule = MongooseModule.forRoot(
    `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.z8vhp.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`,
  );
else throw new Error('Invalid .env');

@Module({
  imports: [ProductsModule, mongooseModule], // 만들었던 ProductsModule 이 여기서 임포트된다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
