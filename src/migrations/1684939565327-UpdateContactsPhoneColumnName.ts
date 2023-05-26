import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateContactsPhoneColumnName1684939565327 implements MigrationInterface {
    name = 'UpdateContactsPhoneColumnName1684939565327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telefone" TO "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "phone" TO "telefone"`);
    }

}
