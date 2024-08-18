/*
  Warnings:

  - Added the required column `irl_currency` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Price" ADD COLUMN     "irl_currency" TEXT NOT NULL;
