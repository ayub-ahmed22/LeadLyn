@echo off
cd /d "%~dp0"
echo Building the project...
npm run build
echo.
echo Starting static server on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npx serve -s .next -p 3000
pause 