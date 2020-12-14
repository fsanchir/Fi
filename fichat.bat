@echo off

set FS=%appdata%\FS\MSG
set msgfold=%FS%\execute
if NOT EXIST "%FS%" md "%FS%"
if NOT EXIST "%msgfold%" md "%msgfold%"
:start
if EXIST "%FS%\execute\join.bat" if EXIST "%FS%\execute\create.bat" if EXIST "%FS%\execute\seechat.bat" if EXIST "%FS%\execute\chat.bat" goto main
title 파일 다운로드 중..
powershell "(new-Object System.Net.WebClient).DownloadFile('https://fsip.ml/resource/msg/join.bat', '%FS%\execute\join.bat')" >nul || goto err
powershell "(new-Object System.Net.WebClient).DownloadFile('https://fsip.ml/resource/msg/create.bat', '%FS%\execute\create.bat')" >nul || goto err
powershell "(new-Object System.Net.WebClient).DownloadFile('https://fsip.ml/resource/msg/seechat.bat', '%FS%\execute\seechat.bat')" >nul || goto err
powershell "(new-Object System.Net.WebClient).DownloadFile('https://fsip.ml/resource/msg/chat.bat', '%FS%\execute\chat.bat')" >nul || goto err
goto start
:err
cls
color 04
echo DOWNLOAD ERROR.
pause
stop
:main
title Choose
cd "%msgfold%"
cls
echo 방 만들기 (1)
echo 참가하기 (2)
choice /c 12 >nul
cls
if %ERRORLEVEL%== 1 goto create
:join
call join.bat
exit
:create
call create.bat
exit