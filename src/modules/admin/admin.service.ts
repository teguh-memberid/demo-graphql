import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AdminEntity } from './entities/admin.entity'
import { AdminDomain } from './domain/admin.domain'
import { ReplaySubject } from 'rxjs';


interface ResponseService {
    status: boolean,
    message: string,
    // id: number
}

interface ListAdmin {
    count: number;
    data: AdminDomain[]
}

interface DetailAdmin { 
    data: AdminDomain
}

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly repo: Repository<AdminEntity>
    ){}

    async save(admin: AdminDomain): Promise<ResponseService>{
        await this.repo.save(admin.toJson())
        return {
            status: true,
            message: 'OK'
        }
    }

    async findAll(): Promise<ListAdmin>{
        const [data, count] = await this.repo.findAndCount()
        const respData = data.map(row => {
            const admin = new AdminDomain()
            admin.fromJSON(row)
            return admin
        })
        return {
            count: count,
            data : respData
        }
    }

    async findOne(id: Number): Promise<DetailAdmin>{

    }
}
