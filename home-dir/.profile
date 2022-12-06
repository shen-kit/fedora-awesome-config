xrandr --output eDP-1 --mode 1280x720
xrandr --output DP-3 --primary --mode 1920x1080 --right-of eDP-1
xrandr --output DP-3 --pos 1344x-531

xinput set-prop 17 "libinput Tapping Enabled" 1
xinput set-prop 17 "libinput Natural Scrolling Enabled" 1
