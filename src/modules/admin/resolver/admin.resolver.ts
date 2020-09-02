import { Resolver, Query, Args } from '@nestjs/graphql';
import { AdminQueryResponse } from '../dtos/admin.objectType'
import { AdminService } from '../admin.service'
import { AdminModel } from './../models/admin.model'
import { AdminArgs } from '../dtos/admin.args'

@Resolver(of => AdminModel)
export class AdminResolver {
    constructor(private readonly adminService:AdminService){}

    @Query(returns => AdminModel)
    async admin(@Args('id') id: string): Promise<AdminModel>{
        const data = await this.adminService.findAll()
        const resp = data.data.map(row => {
            return {
                name: row.toListJSON().name,
                username: row.toListJSON().username
            }
        })

        return resp;
    }

    @Query(returns => [AdminModel])
    async recipes(@Args() adminArgs: AdminArgs): Promise<AdminModel[]> {
        const data = [{
            id: '2',
            title: 'Title',
            description: 'Description title'
        },{
            id: '2',
            title: 'Title',
            description: 'Description title'
        }]

        return data;
    }
}
