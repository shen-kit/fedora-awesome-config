xrandr --output eDP-1 --mode 1280x720
xrandr --output eDP-1 --pos 1920+180
xrandr --output DP-2 --primary --mode 1920x1080 --left-of eDP-1

xinput set-prop 16 "libinput Tapping Enabled" 1
xinput set-prop 16 "libinput Natural Scrolling Enabled" 1
