#!/bin/bash

FILE=/tmp/rclone-downloaded.lock
LOGFILE=~/.cache/rclone/rclone.log

# only run this script if previously downloaded from remotes
if [ -f "$FILE" ]; then
  rclone sync ~/gDrive/ gdrive: --log-file $LOGFILE
  echo -e "upload finished: $(date +'%H:%M, %d-%m-%y')" >> $LOGFILE
else
  notify-send "ERR: Rclone" "Tried to upload, but haven't downloaded yet"  
fi

