#!/bin/bash

rclone sync gdrive: ~/gDrive/ --log-file ~/.config/rclone-download.log
rclone sync onedrive: ~/onedrive/ --log-file ~/.config/rclone-download.log
