$ipV4 = Test-Connection -ComputerName (hostname) -Count 1  | Select -ExpandProperty IPV4Address 
$localRedis=$ipV4.IPAddressToString
$bindLocalPort="6360:6379"
$localPort="6360"
$targetRedis="192.168.20.39"
$targetRedisPort="8800"
$sleepSecond = 900 
$containerName="local-redis"

# stop container
docker ps -a -f ancestor=$containerName --no-trunc -q | foreach-object { docker stop $_ }
docker ps -a -f name=$containerName --no-trunc -q | foreach-object { docker stop $_ }

# remove container
docker ps -a -f ancestor=$containerName* --no-trunc -q | foreach-object { docker rm -f $_ }
docker ps -a -f name=$containerName* --no-trunc -q | foreach-object { docker rm -f $_ }

# pull & run 
docker pull redis
docker run --name $containerName -p $bindLocalPort -d redis

# get container id 
$containerId=docker ps -aqf "name=$containerName"

## redis sync 
docker exec -u 0 -it $containerId redis-cli -h $localRedis -p $localPort slaveof no one

docker exec -u 0 -it $containerId redis-cli -h $localRedis -p $localPort slaveof $targetRedis $targetRedisPort
Write-Host "wait $sleepSecond sec"
Start-Sleep -Seconds $sleepSecond

docker exec -u 0 -it $containerId redis-cli -h $localRedis -p $localPort slaveof no one

pause 


