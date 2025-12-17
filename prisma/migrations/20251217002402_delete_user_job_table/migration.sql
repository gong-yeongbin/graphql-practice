/*
  Warnings:

  - You are about to drop the `user_job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_job" DROP CONSTRAINT "user_job_jobId_fkey";

-- DropForeignKey
ALTER TABLE "user_job" DROP CONSTRAINT "user_job_userId_fkey";

-- DropTable
DROP TABLE "user_job";

-- CreateTable
CREATE TABLE "_jobTouser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_jobTouser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_jobTouser_B_index" ON "_jobTouser"("B");

-- AddForeignKey
ALTER TABLE "_jobTouser" ADD CONSTRAINT "_jobTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_jobTouser" ADD CONSTRAINT "_jobTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
