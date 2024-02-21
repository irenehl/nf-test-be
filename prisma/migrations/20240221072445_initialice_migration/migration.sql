-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SOIL', 'FERTILIZATION');

-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coordinate" (
    "id" SERIAL NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "activity_id" INTEGER NOT NULL,

    CONSTRAINT "coordinate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coordinate" ADD CONSTRAINT "coordinate_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
