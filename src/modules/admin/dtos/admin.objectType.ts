import { ApiProperty } from '@nestjs/swagger';
import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Post } from './post';


// count: number;
  
//     @ApiProperty()
//     data: AdminData[];
  
//     @ApiProperty()
//     message: string;
  
//     @ApiProperty()
//     statusCode: number;
  
//     @ApiProperty()
//     status: boolean;

interface AdminData {
    name: string,
    username: string
}

@ObjectType()
export class AdminQueryResponse {
    // @ApiProperty()
    // @Field()
    // data: AdminData[];

    @ApiProperty()
    @Field({ nullable: false })
    message: string;

    @ApiProperty()
    @Field({ nullable: false })
    statusCode: string;

    @ApiProperty()
    @Field()
    status: number;
}