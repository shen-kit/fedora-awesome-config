xrandr --output DP-1 --mode 1920x1080 --primary
xrandr --output DP-2 --mode 1920x1080 --right-of DP-1
xrandr --output eDP-1 --off

xinput set-prop "DLL0945:00 06CB:76B1 Touchpad" "libinput Tapping Enabled" 1
xinput set-prop "DLL0945:00 06CB:76B1 Touchpad" "libinput Natural Scrolling Enabled" 1

# Added by Toolbox App
export PATH="$PATH:/home/shenkit/.local/share/JetBrains/Toolbox/scripts"

