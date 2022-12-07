docker rmi -f $(docker images -aq)
docker system prune 
wsl --shutdown

diskpart
# open window Diskpart
select vdisk file="%USERPROFILE%\AppData\Local\Docker\wsl\data\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit


$tempfolders = @("C:\Windows\Temp\*", "C:\Windows\Prefetch\*", "C:\Documents and Settings\*\Local Settings\temp\*", "C:\Users\*\Appdata\Local\Temp\*")

Remove-Item $tempfolders -force -recurse -ErrorAction SilentlyContinue

Clear-RecycleBin -Force -ErrorAction SilentlyContinue