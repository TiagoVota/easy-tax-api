-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('Stock', 'FII', 'BDR', 'ETF');

-- CreateEnum
CREATE TYPE "TypeName" AS ENUM ('buy', 'sell');

-- CreateTable
CREATE TABLE "health" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "health_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" VARCHAR(80) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" "CategoryName" NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "cnpj" VARCHAR(20) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "tickers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brokers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "cnpj" VARCHAR(20) NOT NULL,

    CONSTRAINT "brokers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" "TypeName" NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tickerId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "brokerId" INTEGER NOT NULL,
    "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "health_name_key" ON "health"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tickers_name_key" ON "tickers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "brokers_cnpj_key" ON "brokers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "types_name_key" ON "types"("name");

-- AddForeignKey
ALTER TABLE "tickers" ADD CONSTRAINT "tickers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickers" ADD CONSTRAINT "tickers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "tickers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "brokers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
