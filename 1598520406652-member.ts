import {MigrationInterface, QueryRunner} from "typeorm";

export class member1598520406652 implements MigrationInterface {
    name = 'member1598520406652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP FOREIGN KEY `fk_Member_pk_Tier`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `tierId`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `countryId`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `cityId`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `phoneCode`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `phoneNumber`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `gender`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `birthDate`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `identityNumber`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `address`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `registerDate`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `totalPointBalance`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `lifetimePointEarned`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `lifetimePointExpired`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `lifetimeSpending`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `YTDSpending`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `roomPreference`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `foodPreference`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `internalPreference`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `emailVerificationStatus`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `mobileVerificationStatus`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `createdBy`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `updatedBy`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `Member` ADD `firstName` text NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `Member` ADD `lastName` text NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `memberCode`");
        await queryRunner.query("ALTER TABLE `Member` ADD `memberCode` text NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `title`");
        await queryRunner.query("ALTER TABLE `Member` ADD `title` text NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `Member` ADD `email` text NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `Member` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `Member` ADD `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `Member` ADD `email` varchar(100) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `title`");
        await queryRunner.query("ALTER TABLE `Member` ADD `title` enum ('Mr.', 'Mrs.', 'Ms.', 'Miss') CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `memberCode`");
        await queryRunner.query("ALTER TABLE `Member` ADD `memberCode` varchar(50) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `Member` ADD `lastName` varchar(200) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `Member` ADD `firstName` varchar(200) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` ADD `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6)");
        await queryRunner.query("ALTER TABLE `Member` ADD `updatedBy` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `Member` ADD `createdBy` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `Member` ADD `status` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `mobileVerificationStatus` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `emailVerificationStatus` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `internalPreference` longtext CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` ADD `foodPreference` longtext CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` ADD `roomPreference` longtext CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` ADD `YTDSpending` decimal(20,2) NOT NULL DEFAULT '0.00'");
        await queryRunner.query("ALTER TABLE `Member` ADD `lifetimeSpending` decimal(20,2) NOT NULL DEFAULT '0.00'");
        await queryRunner.query("ALTER TABLE `Member` ADD `lifetimePointExpired` int NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `lifetimePointEarned` int NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `totalPointBalance` int NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Member` ADD `registerDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `Member` ADD `address` longtext CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` ADD `identityNumber` varchar(200) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `Member` ADD `birthDate` date NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` ADD `gender` enum ('MALE', 'FEMALE', 'OTHER') CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` ADD `phoneNumber` varchar(50) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` ADD `phoneCode` varchar(20) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` ADD `password` varchar(100) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_general_ci\" NOT NULL DEFAULT ''''");
        await queryRunner.query("ALTER TABLE `Member` ADD `cityId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` ADD `countryId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` ADD `tierId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `Member` ADD CONSTRAINT `fk_Member_pk_Tier` FOREIGN KEY (`tierId`) REFERENCES `Tier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
    }

}
