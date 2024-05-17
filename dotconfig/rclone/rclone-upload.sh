#!/bin/bash

FILE=/tmp/rclone-downloaded.lock

# only run this script if we already downloaded from remotes
if [ -f "$FILE" ]; then
  rclone sync ~/onedrive/ onedrive: --log-file ~/.config/rclone/rclone.log
  rclone sync ~/gDrive/ gdrive: --log-file ~/.config/rclone/rclone.log
  # notify-send "Rclone" "uploaded remotes"
  echo -e "upload finished: $(date +'%H:%M, %d-%m-%y')" >> ~/.config/rclone/rclone.log
else
  notify-send "ERR: Rclone" "Tried to upload, but haven't downloaded yet"  
fi

