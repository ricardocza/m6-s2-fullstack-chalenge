import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClientsPhoneColumnName1684938060369 implements MigrationInterface {
    name = 'UpdateClientsPhoneColumnName1684938060369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telefone" TO "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "clientId" uuid`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "phone" TO "telefone"`);
    }

}
