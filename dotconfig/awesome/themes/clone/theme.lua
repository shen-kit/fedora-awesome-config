local awful = require("awful")
awful.util = require("awful.util")

theme_path = awful.util.getdir("config") .. "/themes/clone/"

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

theme = {}

dofile(theme_path .. "elements.lua")
dofile(theme_path .. "icons.lua")
dofile(theme_path .. "notifications.lua")

theme.wallpaper = theme_path .. "background.jpg"

return theme
