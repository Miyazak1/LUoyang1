@echo off
setlocal

cd /d "%~dp0"

echo.
echo Starting Luoyang No.1 High School website...
echo Project directory: %cd%
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Please install Node.js first.
  pause
  exit /b 1
)

if not exist node_modules (
  echo node_modules was not found. Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

set PORT=5188

start "" powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 3; Start-Process 'http://127.0.0.1:%PORT%/'"

echo Website will open at:
echo http://127.0.0.1:%PORT%/
echo.
echo Keep this window open while previewing the website.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev -- --host 127.0.0.1 --port %PORT% --strictPort

pause
