#!/bin/bash

FILE=/tmp/rclone-downloaded.lock

sleep 5 # wait for network to connect

if [[ -f "$FILE" ]]; then
  notify-send "ERR: Rclone Download Script" "$FILE already exists!"
else
  notify-send "Rclone Download" "download starting"

  rclone sync onedrive: ~/onedrive/ --log-file ~/.config/rclone/rclone.log
  notify-send "Rclone Download" "onedrive download finished"

  rclone sync gdrive: ~/gDrive/ --log-file ~/.config/rclone/rclone.log
  notify-send "Rclone Download" "gdrive download finished"

  touch "$FILE"

  # overwrite the file, not append
  echo -e "\ndownload finished: $(date +'%H:%M, %d-%m-%y')\n" > ~/.config/rclone/rclone.log
fi

