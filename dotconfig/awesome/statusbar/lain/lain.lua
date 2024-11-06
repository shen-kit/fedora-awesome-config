--[[
     Original Source Modified From: github.com/copycat-killer
     https://github.com/copycat-killer/awesome-copycats/blob/master/rc.lua.multicolor
--]]

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Standard awesome library
local awful       = require("awful")
local beautiful   = require("beautiful")

-- Wibox handling library
local wibox       = require("wibox")
local lain        = require("lain")

-- Custom Local Library
local gmc         = require("themes.gmc")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

local W           = {}
clone_widget_set  = W -- object name

-- global for all splited
markup            = lain.util.markup

-- progress bar related widgets -- after global markup
local config_path = awful.util.getdir("config") .. "statusbar/lain/"
dofile(config_path .. "lain-battery.lua")
dofile(config_path .. "lain-sound.lua")
-- dofile(config_path .. "lain-diskfree.lua")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- MEM
W.mem = lain.widget.mem({
  settings = function()
    widget:set_markup("󰍛  " .. mem_now.used .. "MB ")
  end
})

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Textclock
W.textclock = awful.widget.textclock(" %a %d %b, %I:%M%P  ")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

--[[

-- Net
I.netdown = wibox.widget.imagebox(beautiful.widget_netdown)
--netdownicon.align = "middle"

W.netdowninfo = wibox.widget.textbox()

I.netup = wibox.widget.imagebox(beautiful.widget_netup)
--netupicon.align = "middle"

W.netupinfo = lain.widget.net({
    settings = function()
--        if iface ~= "network off" and
--           string.match(myweather._layout.text, "N/A")
--        then
--            myweather.update()
--        end

        local fg_color_up   = "#000000" -- "#e54c62"
        local fg_color_down = "#000000" -- "#87af5f"
        widget:set_markup(markup(fg_color_up, net_now.sent .. " "))
        W.netdowninfo:set_markup(markup(fg_color_down, net_now.received .. " "))
    end
})

]] --
