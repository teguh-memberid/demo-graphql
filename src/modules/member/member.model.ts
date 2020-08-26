import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
import { ObjectType, ID, Field } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class MemberModel extends BaseEntity{
    @Field(type => ID )
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String)
    @Column('text')
    firstName: string

    @Field(() => String)
    @Column('text')
    lastName: string

    @Field(() => String)
    @Column('text')
    memberCode: string

    @Field(() => String)
    @Column('text')
    title: string

    @Field(() => String)
    @Column('text')
    email: string

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date

}