import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminRegistrationRequest, AdminRegistrationResponse } from '../dtos/admin.dto'
import { AdminService } from '../admin.service'
import { AdminDomain } from '../domain/admin.domain'
import { v4 as uuidv4 } from 'uuid';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @Get()
    async findAll(): Promise<string>{
        return 'FindAll'
    }

    @Post()
    async createAdmin(@Body() payload: AdminRegistrationRequest): Promise<AdminRegistrationResponse>{
        const saltRounds = 10;
        const bcrypt = require('bcrypt')
        const hashPassword = await bcrypt.hash(payload.password, saltRounds)
        const dataAdmin = new AdminDomain()
        dataAdmin.register({
            uuid: uuidv4(),
            roleId: 1,
            name: payload.name,
            username: payload.username,
            password: hashPassword,
            status: 1,
            createdBy: 1, 
            updatedBy: 1
        })
        const statusSave = await this.adminService.save(dataAdmin)
        return {
            id: 1,
            status: true,
            statusCode: 201,
            message: 'Success created admin'
        }
    }
}
