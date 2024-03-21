import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableRandomNumber1710522028575 implements MigrationInterface {
    name = 'CreateTableRandomNumber1710522028575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`randomNumber\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bet1\` int NOT NULL, \`bet2\` int NOT NULL, \`bet3\` int NOT NULL, \`bet4\` int NOT NULL, \`bet5\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`randomNumber\``);
    }

}
