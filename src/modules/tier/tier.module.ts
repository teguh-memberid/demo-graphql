import { Module } from '@nestjs/common';
import { TierService } from './tier.service';
import { TierController } from './controller/tier.controller';
import { TierResolver } from './resolver/tier.resolver';
import { TierEntity } from './entities/tier.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([TierEntity])],
  providers: [TierService, TierResolver],
  controllers: [TierController]
})
export class TierModule {}
