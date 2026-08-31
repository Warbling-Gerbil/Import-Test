@echo off
schtasks /create /tn "ScheduledShutdown" /tr "shutdown /s /f" /sc ONCE /st 15:00
pause