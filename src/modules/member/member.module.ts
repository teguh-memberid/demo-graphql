import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberEntity } from './member.entity'

@Module({
  imports:[TypeOrmModule.forFeature([MemberEntity])],
  providers: [MemberService, MemberResolver]
})
export class MemberModule {}
