/*
  Warnings:

  - You are about to drop the column `max_price` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `min_price` on the `Item` table. All the data in the column will be lost.
  - Added the required column `picture` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "max_price",
DROP COLUMN "min_price",
ADD COLUMN     "picture" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
