import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AdminQueryResponse } from '../dtos/admin.objectType'
import { AdminService } from '../admin.service'
import { AdminModel } from './../models/admin.model'
import { AdminArgs } from '../dtos/admin.args'

@Resolver(of => AdminModel)
export class AdminResolver {
    constructor(private readonly adminService:AdminService){}

    @Query(returns => AdminModel)
    async admin(@Args('id') id: string): Promise<AdminModel>{
        
        const data = (await this.adminService.findOne(parseInt(id))).toJson()
        
        return {
            name: data.name,
            username: data.username
        }
    }
    @Query(returns => [AdminModel])
    async adminList(@Args() adminArgs: AdminArgs): Promise<AdminModel[]> {
        console.log(adminArgs)

        const data = [{
            name: 'Teguh',
            username: 'Title',
            description: 'Description title'
        },{
            name: 'Hadi',
            username: 'Title',
            description: 'Description title'
        }]

        return data;
    }

    // @Mutation(()=>)
    // async createAdmin(){

    // }
}
