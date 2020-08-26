import { InputType, Field } from '@nestjs/graphql';
// import { ObjectType, ID, Field } from '@nestjs/graphql'

@InputType()
export class ItemInput {
    // @Field()
    // readonly title: string;
    // @Field(() => Int)
    // readonly price: number;
    // @Field()
    // readonly description: string;

    @Field(() => String)
    readonly firstName: string

    @Field(() => String)
    readonly lastName: string

    @Field(() => String)
    readonly memberCode: string

    @Field(() => String)
    readonly title: string

    @Field(() => String)
    readonly email: string
}