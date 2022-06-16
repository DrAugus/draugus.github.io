::author: augus
::time: 2022.06.07

@echo off
::#####################################################################
::全局变量
::获取上级目录
for %%d in (%~dp0../) do set WORKDIR=%%~fd
@if %errorlevel% neq 0 goto :errMsg
@echo %WORKDIR%
::#####################################################################
::echo %BAT_DISK%
::echo %WORKDIR%
@cd %WORKDIR%

@call :update "genshin"
@call :update "draugus.github.io"
@call :update "resume"
@call :update "RoyalFamily"
@call :update "RandomThought"

@echo ++++++++++++++++++ git pull finish! ++++++++++++++++++
goto :endl

:update
	@echo ++++++++++++++++++ git pull project=%~1! ++++++++++++++++++
	@if not exist %~1 (
		@echo ++++++++++++++++++ %~1 not exist! ++++++++++++++++++
		@echo.
		@cd %WORKDIR%
		goto :eof
	)
	
	@cd %~1
	echo %cd%
	git pull
	@if %errorlevel% neq 0 (
		@echo ++++++++++++++++++ git pull %~1 failure! ++++++++++++++++++
		goto :endl
	)
	@echo ++++++++++++++++++ git pull %~1 compeleted! ++++++++++++++++++
	@echo.
	@cd %WORKDIR%
goto :eof

::错误输出
:errMsg
@echo get path fail!

:endl
@pause