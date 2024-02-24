/*
  Warnings:

  - Added the required column `number` to the `activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "number" INTEGER NOT NULL;
