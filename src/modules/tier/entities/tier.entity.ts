import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('Tier')
export class TierEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    level: number

    @Column({ nullable: false })
    code: number

    @Column('text')
    name: string

    @Column('text')
    description: string

    @Column({ nullable: false })
    multiplier: string

    @Column({ nullable: false })
    isBasicLevel: number

    @Column({ nullable: false })
    isVIPLevel: number

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