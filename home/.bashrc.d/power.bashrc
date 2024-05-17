alias suspend="systemctl suspend"
alias screen-off="sleep 0.2 && xset dpms force off"
# turn on/off monitor and laptop screens
alias laptop-off="~/.profile;xrandr --output eDP-1 --off; pkill conky; conky & disown; awesome-client 'awesome.restart()'"
alias laptop-on="xrandr --output eDP-1 --mode 1280x720; xrandr --output DP-1 --off; xrandr --output DP-3 --off; xrandr --output DP-2 --off; pkill conky; conky & disown; awesome-client 'awesome.restart()'"

