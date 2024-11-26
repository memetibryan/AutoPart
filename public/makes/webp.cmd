@echo off

FOR %%A IN (*.png, *.jpg) DO ( cwebp -q 90 "%%A" -o "%%~nA.webp" )