/* =====================================================================================
/   TABLE: NomDeLaTaula
/  ===================================================================================== */
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE name = 'NomDeLaTaula' AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
BEGIN
	CREATE TABLE dbo.NomDeLaTaula(
		IdTaula int IDENTITY(1,1) NOT NULL,
		Descripcio nvarchar(50) NULL,
		CONSTRAINT PK_NomDeLaTaula PRIMARY KEY CLUSTERED (IdTaula ASC))
		
	ALTER TABLE dbo.NomDeLaTaula ADD CONSTRAINT FK_NomDeLaTaula_NomTaulaBase
	FOREIGN KEY(FkField)
	REFERENCES dbo.NomTaulaBase (IdTaulaBase) ON DELETE CASCADE
END
GO



/* ----------------------------------------------------------------------------
  Nom sp
------------------------------------------------------------------------------- */
if exists (select * from dbo.sysobjects where id = object_id(N'dbo.SP') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
	drop procedure dbo.SP
GO

CREATE PROCEDURE dbo.SP
	@param1 nvarchar(100),
	@param2 nvarchar(100)
AS

	select 1

GO


/* ----------------------------------------------------------------------------
  Nom funcio
------------------------------------------------------------------------------- */
if exists (select * from dbo.sysobjects where id = object_id(N'dbo.RA_StrMultiSplitter') and xtype in (N'FN', N'IF', N'TF'))
	drop function dbo.RA_StrMultiSplitter
GO
CREATE Function [dbo].[RA_StrMultiSplitter] (params ) 
return type
as 
begin

end
go

/* ----------------------------------------------------------------------------
  Index
------------------------------------------------------------------------------- */
IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'dbo.NomTaula') AND name = N'NomIndex')
	DROP INDEX [index name] ON [dbo].[table name]


/* ----------------------------------------------------------------------------
  Nou camp ColumnName a la taula TableName
------------------------------------------------------------------------------- */
-- 
IF NOT EXISTS(SELECT c.* FROM syscolumns c JOIN sysobjects o ON o.id=c.id WHERE c.[name]='ColumnName' AND o.name ='TableName')
	ALTER TABLE TableName ADD ColumnName
GO


/* ----------------------------------------------------------------------------
  Nom vista
------------------------------------------------------------------------------- */
if exists (select * from dbo.sysobjects where id = object_id(N'dbo.VW') and OBJECTPROPERTY(id, N'IsView') = 1)
	drop view dbo.VW
GO

/* ----------------------------------------------------------------------------
  crear FK
------------------------------------------------------------------------------- */
IF  NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Name]') AND parent_object_id = OBJECT_ID(N'[dbo].[TableName]'))
	ALTER TABLE dbo.NomDeLaTaula ADD CONSTRAINT FK_NomDeLaTaula_NomTaulaBase
	FOREIGN KEY(FkField)
	REFERENCES dbo.NomTaulaBase (IdTaulaBase) ON DELETE CASCADE
GO

/* ----------------------------------------------------------------------------
  Eliminar PK
------------------------------------------------------------------------------- */
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE name = N'PK_Name')
	ALTER TABLE [dbo].[TableName] DROP CONSTRAINT [PK_Name]
GO


/* ----------------------------------------------------------------------------
  Trigger
------------------------------------------------------------------------------- */
if exists (select * from dbo.sysobjects where id = object_id(N'dbo.SP') and OBJECTPROPERTY(id, N'IsTrigger') = 1)
	drop TRIGGER dbo.xxx
GO
CREATE TRIGGER xxx
   ON  taula 
   AFTER INSERT
AS 
BEGIN

	select 1

GO

/* ----------------------------------------------------------------------------
  Remove Column from Table
------------------------------------------------------------------------------- */
IF EXISTS (SELECT 1 FROM   INFORMATION_SCHEMA.COLUMNS WHERE  TABLE_NAME = 'Emp' AND COLUMN_NAME = 'Lname')
  BEGIN
      ALTER TABLE Emp
        DROP COLUMN Lname
  END
GO
