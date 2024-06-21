# ===== DISPLAY =====
# setup monitors / display if connected, else set laptop display resolution
#monitorConnected=$(xrandr | grep "DP-1 connected" | grep --invert-match "eDP-1")
#if [[ ! -z $monitorConnected ]] then # connected
#    xrandr --output eDP-1 --off --output DP-2 --mode 1920x1080 --primary --output DP-1 --mode 1920x1080 --right-of DP-2
#else # disconnected
#    xrandr --output DP-1 --off --output DP-2 --off --output DP-3 --off --output eDP-1 --mode 1280x720
#fi

# monitor setup at home
xrandr --output eDP-1 --mode 1280x720
if [[ ! -z $(xrandr | grep "DP-3 connected") ]] then # connected
    xrandr --output DP-3 --mode 1920x1080 --primary --right-of eDP-1
fi

# start conky after display setup
conky -c ~/.config/conky/conky.conf &

# ===== TOUCHPAD =====
xinput set-prop "DLL0945:00 06CB:76B1 Touchpad" "libinput Tapping Enabled" 1
xinput set-prop "DLL0945:00 06CB:76B1 Touchpad" "libinput Natural Scrolling Enabled" 1
libinput-gestures-setup start
fusuma -d

# ===== RCLONE =====
~/.config/rclone/rclone-download.sh &

# ===== MISC. =====
# Added by Toolbox App
export PATH="$PATH:/home/shenkit/.local/share/JetBrains/Toolbox/scripts"

# map capslock to escape, use shift+caps to toggle capslock
# setxkbmap -option caps:escape_shifted_capslock

