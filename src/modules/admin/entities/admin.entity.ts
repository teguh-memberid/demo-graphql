import { Entity, PrimaryGeneratedColumn, Column, Generated} from 'typeorm'

@Entity('Admin')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, unique: true})
    @Generated("uuid")
    uuid: string

    @Column({ nullable: false })
    roleId: number

    @Column('text')
    name: string

    @Column('text')
    username: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: false })
    status: number

    @Column({ nullable: false })
    createdBy: number

    @Column({ nullable: false })
    updatedBy: number

    @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createdAt

    @Column({ type: "timestamp", nullable: false, default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt
}