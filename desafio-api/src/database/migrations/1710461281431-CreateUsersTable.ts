import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1710461281431 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '11',
                        isNullable: false
                    },
                    {
                        name: 'aposta1',
                        type: 'int'
                    },
                    {
                        name: 'aposta2',
                        type: 'int'
                    },
                    {
                        name: 'aposta3',
                        type: 'int'
                    },
                    {
                        name: 'aposta4',
                        type: 'int'
                    },
                    {
                        name: 'aposta5',
                        type: 'int'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
