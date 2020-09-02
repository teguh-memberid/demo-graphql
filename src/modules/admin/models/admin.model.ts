import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AdminModel {
  @Field()
  name: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  description?: string;

//   @Field(type => [String])
//   ingredients: string[];
}