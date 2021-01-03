import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { ChatsModule } from './chats/chats.module';
import { GraphqlsModule } from './graphqls/graphqls.module';

@Module({
  imports: [ProductsModule, UserModule, PostsModule, ChatsModule, GraphqlsModule], // 만들었던 ProductsModule 이 여기서 임포트된다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
