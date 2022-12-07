# Run first enter command "Set-ExecutionPolicy RemoteSigned" in powershell

$imageName = "nextjs-ap"
$containerName = $imageName +"-1"

# stop container
docker ps -a -f ancestor=$containerName --no-trunc -q | foreach-object { docker stop $_ }
docker ps -a -f name=$containerName --no-trunc -q | foreach-object { docker stop $_ }

# remove container
docker ps -a -f ancestor=$containerName* --no-trunc -q | foreach-object { docker rm -f $_ }
docker ps -a -f name=$containerName* --no-trunc -q | foreach-object { docker rm -f $_ }

# remove image 
$existingImages = docker images $imageName
If ($existingImages.count -gt 1) {
write-host "[Removing image]Removing the existing image.."
docker rmi -f $imageName
} else {
write-host "[Removing image]The image does not exist"
}

# copy file 
$target = (Get-Item .).FullName + '\docker\'
$dest=".\"
robocopy $target $dest /E

# build image
yarn i 
yarn build   
# npm cache clean --force  
# npm i --force  
docker build -t nextjs-ap . -f Dockerfile

# 建立及啟動容器應用
docker run -d --name $containerName --restart=always -p 8888:80 $imageName
pause