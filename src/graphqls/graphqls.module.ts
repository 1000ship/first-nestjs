import { Module } from '@nestjs/common';
import { GraphqlsService } from './graphqls.service';
import { GraphqlsResolver } from './graphqls.resolver';

@Module({
  providers: [GraphqlsResolver, GraphqlsService]
})
export class GraphqlsModule {}
