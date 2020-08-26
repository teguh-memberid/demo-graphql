import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { MemberEntity } from './member.entity'

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(MemberEntity)
        private memberRepository: Repository<MemberEntity>
    ){}

    async findAll(take = 10): Promise<MemberEntity[]> {
        return this.memberRepository.find({
            order: {createdAt: "ASC"},
            take:take
        });
    }
}
