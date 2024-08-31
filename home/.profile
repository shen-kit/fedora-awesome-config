~/.config/profile/connect_monitors.sh
~/.config/profile/setup_touchpad.sh
~/.config/rclone/rclone-download.sh &
# map capslock to escape, use shift+caps to toggle capslock
# setxkbmap -option caps:escape_shifted_capslock

[ -f "/home/shenkit/.ghcup/env" ] && . "/home/shenkit/.ghcup/env" # ghcup-env