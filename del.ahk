﻿#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Click, Left 1000 500
Sleep 10
Click, Left 1500 105
Sleep 10
Send {Down 2}
Sleep 100
Send {Del}