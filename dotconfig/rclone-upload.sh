#!/bin/bash

rclone sync ~/onedrive/ onedrive: --log-file ~/.config/rclone-upload.log
rclone sync ~/gDrive/ gdrive: --log-file ~/.config/rclone-upload.log
