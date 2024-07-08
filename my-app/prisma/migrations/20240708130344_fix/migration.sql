/*
  Warnings:

  - You are about to drop the column `appId` on the `Stack` table. All the data in the column will be lost.
  - You are about to drop the column `developerId` on the `Stack` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Stack] DROP CONSTRAINT [Stack_developerId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Stack] DROP COLUMN [appId],
[developerId];

-- CreateTable
CREATE TABLE [dbo].[StacksOnDeveloper] (
    [id] INT NOT NULL IDENTITY(1,1),
    [stackId] INT NOT NULL,
    [developerId] INT NOT NULL,
    CONSTRAINT [StacksOnDeveloper_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[StacksOnDeveloper] ADD CONSTRAINT [StacksOnDeveloper_stackId_fkey] FOREIGN KEY ([stackId]) REFERENCES [dbo].[Stack]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[StacksOnDeveloper] ADD CONSTRAINT [StacksOnDeveloper_developerId_fkey] FOREIGN KEY ([developerId]) REFERENCES [dbo].[Developer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
