#! /bin/sh

today=$(date +"%Y-%m-%d")
startTime=$(date +"%Y-%m-%dT%T")

# npm run tree-public
# npm run backup

endTime=$(date +"%Y-%m-%dT%T")

git add .
git commit -m "backup $today" -m "start: $startTime -- end: $endTime"

git tag "v$startTime"

git push


echo "Backup complete || start: $startTime -- end: $endTime"