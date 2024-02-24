/*
  Warnings:

  - You are about to drop the column `createdAt` on the `activity` table. All the data in the column will be lost.
  - Changed the type of `type` on the `activity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('SOIL', 'FERTILIZATION');

-- AlterTable
ALTER TABLE "activity" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "type",
ADD COLUMN     "type" "ActivityType" NOT NULL;

-- DropEnum
DROP TYPE "Type";
