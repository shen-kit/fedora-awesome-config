#!/bin/bash

FILE=/tmp/rclone-downloaded.lock
LOGFILE=~/.cache/rclone/rclone.log

sleep 5 # wait for network to connect

if [[ -f "$FILE" ]]; then
  notify-send "ERR: Rclone Download Script" "$FILE already exists!"
else
  notify-send "Rclone Download" "download starting"

  rclone sync gdrive: ~/gDrive/ --log-file $LOGFILE

  touch "$FILE"
  echo -e "download finished: $(date +'%H:%M, %d-%m-%y')\n" > $LOGFILE
fi

