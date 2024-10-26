--[[
     Original Source Modified From: github.com/copycat-killer
     https://github.com/copycat-killer/awesome-copycats/blob/master/rc.lua.copland
--]]

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Standard awesome library
local awful = require("awful")

-- Wibox handling library
local lain = require("lain")

local W = clone_widget_set -- object name

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- ALSA volume from copycat-multicolor

W.volume = lain.widget.alsa({
  settings = function()
    if volume_now.status == "off" then
      disp = "󰝟" .. " " .. volume_now.level .. "%"
      widget:set_markup(disp)
      return
    elseif volume_now.level >= 50 then
      disp = ""
    elseif volume_now.level >= 10 then
      disp = ""
    else
      disp = ""
    end

    disp = disp .. " " .. volume_now.level .. "%"
    widget:set_markup(disp)
  end
})

theme.volume = W.volume

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

W.mpd = awful.widget.watch(
  "playerctl metadata --format '    {{ title }} '",
  10,
  function(widget, stdout)
    widget:set_markup(stdout:gsub("\n", ""))
    widget.align = "center"
  end
)
