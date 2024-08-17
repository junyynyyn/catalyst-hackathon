-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "game" TEXT NOT NULL,
    "max_price" INTEGER NOT NULL,
    "min_price" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
