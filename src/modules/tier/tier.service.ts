import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TierEntity } from './entities/tier.entity'


interface TierQuery {
    count: number,
    data: TierEntity[]
}

interface TierDetail {
    data: TierEntity
}

// interface TierCondition {
//     take: number,
//     skip: number
// }

@Injectable()
export class TierService {
    constructor(
        @InjectRepository(TierEntity)
        private repo: Repository<TierEntity>
    ){}

    async findAll(limit: number, skip: number): Promise<TierQuery>{
        const [data, count] = await this.repo.findAndCount({
            take: 10,
            skip: 0
        })
        return { 
            count: count,
            data: data
        }
    }

    async findOne(id: number) {
        const tierDetail = await this.repo.findOne({where:{id:id}})
        if(!tierDetail) throw new NotFoundException()
        console.log(tierDetail)
        return tierDetail
    }

}
