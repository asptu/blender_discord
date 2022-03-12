#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.


position = 1


Sleep 10
Send g
Sleep 100
Send z
Sleep 100
Send %position%
Sleep 100
Send {Enter}
