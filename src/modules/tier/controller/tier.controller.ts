import { Controller, Get, Param } from '@nestjs/common';
import { TierService } from '../tier.service';
import { TierQueryResponse, TierDetailResponse } from '../dtos/tier.dto'

@Controller('tier')
export class TierController {
    constructor( private readonly tierService: TierService){}

    @Get()
    async findAll(): Promise<TierQueryResponse> {
        const limit = 10
        const skip = 0
        const data = await this.tierService.findAll(limit, skip)
        const filterData = data.data.map( row => {
            const obj = { name: row.name, description: row.description, multiplier: row.multiplier}
            return obj
        })
        return {
            count: data.count,
            data: filterData,
            message: "Success",
            statusCode: 200,
            status: true
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<TierDetailResponse> {
        const tierDetail = await this.tierService.findOne(id)
        
        return {
            data: {
                name: tierDetail.name,
                description: tierDetail.description,
                multiplier: tierDetail.multiplier
            },
            message: "Success",
            statusCode: 200,
            status: true
        }
        
    } 
}
