import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('Member')
export class MemberEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    firstName: string

    @Column('text')
    lastName: string

    @Column('text')
    memberCode: string

    @Column('text')
    title: string

    @Column('text')
    email: string

    @CreateDateColumn()
    createdAt: Date

}