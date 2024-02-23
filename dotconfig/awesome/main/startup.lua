awful = require("awful")

awful.spawn.with_shell("picom")
awful.spawn.with_shell("conky -c ~/.config/conky/conky.conf")
awful.spawn.with_shell("xfce4-power-manager")
awful.spawn.with_shell("nm-applet")
