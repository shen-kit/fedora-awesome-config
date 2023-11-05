#!/bin/bash

FILE=/tmp/rclone-downloaded.lock

sleep 5 # wait for network to connect

if [[ -f "$FILE" ]]; then
  notify-send "ERR: Rclone Download Script" "$FILE already exists!"
else
  notify-send "Rclone Download" "download starting"

  rclone sync gdrive: ~/gDrive/ --log-file ~/.config/rclone.log
  rclone sync onedrive: ~/onedrive/ --log-file ~/.config/rclone.log
  touch "$FILE"

  echo -e "\ndownload finished: $(date +'%H:%M, %d-%m-%y')\n" >> ~/.config/rclone.log
  notify-send "Rclone Download" "download finished"
fi

