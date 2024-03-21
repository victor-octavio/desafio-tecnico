import { MigrationInterface, QueryRunner } from "typeorm";

export class DropColumnApostas1710509084915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aposta1\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aposta2\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aposta3\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aposta4\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aposta5\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bet1\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bet2\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bet3\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bet4\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`bet5\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bet5\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bet4\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bet3\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bet2\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`bet1\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aposta5\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aposta4\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aposta3\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aposta2\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aposta1\` int NOT NULL`);
    }

}
