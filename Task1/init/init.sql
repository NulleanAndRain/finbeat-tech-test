USE [master];
GO
IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'CodeValueDatabase')
BEGIN
	CREATE DATABASE [CodeValueDatabase]
END
GO