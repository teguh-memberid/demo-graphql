import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsEnum } from "class-validator";

interface AdminData {
    name: string,
    username: string
}


export class AdminRegistrationRequest {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    roleId: number

    @ApiProperty({ required: true })
    @IsNotEmpty()
    name: string

    @ApiProperty({ required: true })
    @IsNotEmpty()
    // @IsEmail()
    username: string

    @ApiProperty({ required: true })
    @IsNotEmpty()
    password: string

    // @ApiProperty({ required: true })
    // @IsNotEmpty()
    // confirmPassword: string

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    @IsEnum([0, 1])
    status: number
}

export class AdminRegistrationResponse {
    @ApiProperty()
    id: number

    @ApiProperty()
    message: string

    @ApiProperty()
    statusCode: number

    @ApiProperty()
    status: boolean
}

export class AdminQueryResponse {
    @ApiProperty()
    count: number;
  
    @ApiProperty()
    data: AdminData[];
  
    @ApiProperty()
    message: string;
  
    @ApiProperty()
    statusCode: number;
  
    @ApiProperty()
    status: boolean;
  }