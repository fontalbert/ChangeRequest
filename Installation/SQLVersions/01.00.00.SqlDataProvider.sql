
/* ----------------------------------------------------------------------------
  New field NewColumn to Arv_ChangeRequest
------------------------------------------------------------------------------- */
-- 
IF NOT EXISTS(SELECT c.* FROM syscolumns c JOIN sysobjects o ON o.id=c.id WHERE c.[name]='NewColumn' AND o.name ='Arv_ChangeRequest')
	ALTER TABLE Arv_ChangeRequest ADD NewColumn nvarchar(150)
GO
