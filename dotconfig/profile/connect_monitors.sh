#!/bin/bash

# start with all displays off, turn on whatever wants to be turned on
pkill conky
xrandr --output eDP-1 --off --output DP-1 --off --output DP-2 --off --output DP-3 --off

# monitor setup at monash
#if [[ ! -z $(xrandr | grep "DP-1 connected" | grep --invert-match "eDP-1") ]] then # connected
#    xrandr --output DP-2 --mode 1920x1080 --primary --output DP-1 --mode 1920x1080 --right-of DP-2
#else # disconnected
#    xrandr --output eDP-1 --mode 1280x720
#fi

# monitor setup at home
xrandr --output eDP-1 --mode 1280x720
if [[ ! -z $(xrandr | grep "DP-3 connected") ]] then # connected
    xrandr --output DP-3 --mode 1920x1080 --primary --right-of eDP-1
fi

# restart conky
conky -c ~/.config/conky/conky.conf &
