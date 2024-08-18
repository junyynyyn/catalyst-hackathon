/*
  Warnings:

  - You are about to drop the column `currency` on the `Price` table. All the data in the column will be lost.
  - Added the required column `currencyId` to the `Price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Price" DROP COLUMN "currency",
ADD COLUMN     "currencyId" INTEGER NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
