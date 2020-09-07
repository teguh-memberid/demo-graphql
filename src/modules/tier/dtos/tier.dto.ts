import { IsEmail, IsNotEmpty, IsNumber, IsEnum } from "class-validator";

interface TierData {
    name: string,
    description: string,
    multiplier: string
}


export class TierQueryResponse {
    count: number;
  
    data: TierData[];
  
    message: string;
  
    statusCode: number;
  
    status: boolean;
}

export class TierDetailResponse {
    data: TierData;
  
    message: string;
  
    statusCode: number;
  
    status: boolean;
}