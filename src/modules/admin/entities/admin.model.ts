import { Entity, PrimaryGeneratedColumn, Column, Generated, BaseEntity} from 'typeorm'
import { ObjectType, ID, Field } from '@nestjs/graphql'

@Entity('Admin')
@ObjectType('Admin')
export class AdminModel extends BaseEntity {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String)
    @Column({nullable: false, unique: true})
    @Generated("uuid")
    uuid: string

    @Field(() => Number)
    @Column({ nullable: false })
    roleId: number

    @Field(() => String)
    @Column('text')
    name: string

    @Field(() => String)
    @Column('text')
    username: string

    @Field(() => String)
    @Column({ nullable: false })
    password: string

    @Field(() => Number)
    @Column({ nullable: false })
    status: number

    @Field(() => Number)
    @Column({ nullable: false })
    createdBy: number

    @Field(() => Number)
    @Column({ nullable: false })
    updatedBy: number

    // @Field(() => String)
    // @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
    // createdAt

    // @Field(() => String)
    // @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    // updatedAt
}