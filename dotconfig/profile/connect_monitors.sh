#!/bin/bash

# start with all displays off, turn on whatever wants to be turned on
pkill conky

xrandr --output eDP-1 --mode 1280x720 --output DP-1 --off --output DP-2 --off --output DP-3 --off

# single monitor setup
if [[ ! -z $(xrandr | grep --invert-match "eDP-1" | grep "DP-1 connected") ]] then # connected
   xrandr --output DP-1 --mode 1920x1080 --primary --left-of eDP-1 #--output eDP-1 --mode 1280x720 --right-of DP-1
fi

# double monitor setup
# if [[ ! -z $(xrandr | grep "DP-2 connected" | grep --invert-match "eDP-1") ]] then # connected
#     xrandr --output DP-2 --mode 1920x1080 --primary --output DP-1 --mode 1920x1080 --right-of DP-2 ||
#         xrandr --output DP-2 --mode 1920x1080 --primary   
# else # disconnected
#     xrandr --output eDP-1 --mode 1280x720
# fi

# restart conky
# conky -c ~/.config/conky/conky.conf &
