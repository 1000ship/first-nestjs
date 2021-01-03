import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlsService } from './graphqls.service';
import { Graphql } from './entities/graphql.entity';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';

@Resolver(() => Graphql)
export class GraphqlsResolver {
  constructor(private readonly graphqlsService: GraphqlsService) {}

  @Mutation(() => Graphql)
  createGraphql(@Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput) {
    return this.graphqlsService.create(createGraphqlInput);
  }

  @Query(() => [Graphql], { name: 'graphqls' })
  findAll() {
    return this.graphqlsService.findAll();
  }

  @Query(() => Graphql, { name: 'graphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlsService.findOne(id);
  }

  @Mutation(() => Graphql)
  updateGraphql(@Args('updateGraphqlInput') updateGraphqlInput: UpdateGraphqlInput) {
    return this.graphqlsService.update(updateGraphqlInput.id, updateGraphqlInput);
  }

  @Mutation(() => Graphql)
  removeGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlsService.remove(id);
  }
}
