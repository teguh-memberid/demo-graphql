import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './controller/admin.controller'
import { AdminEntity } from './entities/admin.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminResolver } from './resolver/admin.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminService, AdminResolver],
  controllers: [AdminController]
})
export class AdminModule {}
