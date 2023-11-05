--[[
     Original Source Modified From: github.com/copycat-killer
     https://github.com/copycat-killer/awesome-copycats/blob/master/rc.lua.copland
--]]

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Standard awesome library
local beautiful = require("beautiful")
local bfont = beautiful.font
local gears = require("gears")
local awful = require("awful")

local xresources = require("beautiful.xresources")
local dpi = xresources.apply_dpi

local my_table = awful.util.table or gears.table -- 4.{0,1} compatibility

-- Wibox handling library
local wibox = require("wibox")
local lain = require("lain")

local W = clone_widget_set     -- object name

-- Custom Local Library
local gmc = require("themes.gmc")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- ALSA volume from copycat-multicolor

W.volume = lain.widget.alsa({
  settings = function()
    if volume_now.status == "off" then
      disp = "󰝟 " .. " " .. volume_now.level .. "%"
      widget:set_markup(disp)
      return
    elseif volume_now.level >= 50 then
      disp = "  "
    elseif volume_now.level >= 10 then
      disp = " "
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

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- ALSA volume bar

--[[
-- global terminal is required in alsabar, unfortunately
terminal = RC.vars.terminal

-- ALSA volume bar from copycat-copland

I.volume_dynamic = wibox.widget.imagebox(beautiful.monitor_vol)

local volume_wibox_settings = function()
    if volume_now.status == "off" then
        I.volume_dynamic:set_image(beautiful.monitor_vol_mute)
    elseif volume_now.level == 0 then
        I.volume_dynamic:set_image(beautiful.monitor_vol_no)
    elseif volume_now.level <= 50 then
        I.volume_dynamic:set_image(beautiful.monitor_vol_low)
    else
        I.volume_dynamic:set_image(beautiful.monitor_vol)
    end
end

local volume_wibox_colors = {
    background = beautiful.bg_normal,
    mute = gmc.color['red300'],
    unmute = gmc.color['blue300']
}

W.volume_wibox = lain.widget.alsabar({
  width = 55, ticks = true, ticks_size = 6, step = "2%",
  settings = volume_wibox_settings,
  colors = volume_wibox_colors
})

theme.volume_wibox = W.volume_wibox

W.volume_wibox_buttons = my_table.join (
  awful.button({}, 1, function()
    awful.spawn(string.format("%s -e alsamixer", terminal))
  end),
  awful.button({}, 2, function()
    os.execute(string.format("%s set %s 100%%", W.volume_wibox.cmd, W.volume_wibox.channel))
    W.volume_wibox.update()
  end),
  awful.button({}, 3, function()
    os.execute(string.format("%s set %s toggle", W.volume_wibox.cmd, W.volume_wibox.togglechannel or W.volume_wibox.channel))
    W.volume_wibox.update()
    end),
  awful.button({}, 4, function()
    os.execute(string.format("%s set %s 2%%+", W.volume_wibox.cmd, W.volume_wibox.channel))
    W.volume_wibox.update()
  end),
    awful.button({}, 5, function()
    os.execute(string.format("%s set %s 2%%-", W.volume_wibox.cmd, W.volume_wibox.channel))
    W.volume_wibox.update()
  end)
)

W.volume_wibox.tooltip.wibox.fg = beautiful.fg_focus

W.volume_wibox.bar:buttons(W.volume_wibox_buttons)

W.volumebg = wibox.container.background(
  W.volume_wibox.bar, gmc.color['grey500'], gears.shape.rectangle)
W.volumewidget = wibox.container.margin(
  W.volumebg, dpi(2), dpi(7), dpi(6), dpi(6))

]]--

