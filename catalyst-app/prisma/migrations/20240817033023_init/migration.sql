-- CreateTable
CREATE TABLE "Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game" TEXT NOT NULL,
    "currency" INTEGER NOT NULL,
    "price" REAL NOT NULL
);
