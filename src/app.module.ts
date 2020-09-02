import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
// import { MemberModule } from './modules/member/member.module';
import { AdminModule } from './modules/admin/admin.module';
import { join } from 'path';


@Module({
  imports: [TypeOrmModule.forRoot(),
    GraphQLModule.forRoot(
    {
      // debug: true,
      // playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    }
  ),
  //  MemberModule,
   AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
