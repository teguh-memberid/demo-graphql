import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Author1598521125281 implements MigrationInterface {

    private authorTable = new Table({
        name: 'authors',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'createdAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updatedAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.authorTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.authorTable);
    }

}
