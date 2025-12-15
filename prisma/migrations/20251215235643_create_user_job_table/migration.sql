/*
  Warnings:

  - You are about to drop the column `salary` on the `job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "job" DROP COLUMN "salary";

-- CreateTable
CREATE TABLE "user_job" (
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_job_userId_jobId_key" ON "user_job"("userId", "jobId");

-- CreateIndex
CREATE UNIQUE INDEX "job_name_key" ON "job"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- AddForeignKey
ALTER TABLE "user_job" ADD CONSTRAINT "user_job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_job" ADD CONSTRAINT "user_job_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
