@echo off
setlocal

REM 设置目标目录和脚本路径
set "GIT_BASH_PATH=E:\Users\codetools\Git\bin\bash.exe"
set "TARGET_DIR=E:\code\source\draugus.github.io"
set "SCRIPT_PATH=./run.sh"
set "SCRIPT_ARGS=life"

REM 使用start命令启动一个新的Git Bash窗口，并执行脚本
start "" %GIT_BASH_PATH% --login -c "cd '%TARGET_DIR%' && %SCRIPT_PATH% %SCRIPT_ARGS%; exec bash"
 

endlocal