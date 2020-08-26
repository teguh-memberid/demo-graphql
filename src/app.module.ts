import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberModule } from './modules/member/member.module';


@Module({
  imports: [TypeOrmModule.forRoot(),
    GraphQLModule.forRoot(
    {
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',  
    }
  ),
   MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
