import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { MemberService } from './member.service'
import { MemberModel } from './member.model'

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService){}

    @Query(()=>[MemberModel])
    member(){
        return this.memberService.findAll()
    }

}
