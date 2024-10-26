-- {{{ Required libraries
-- Standard awesome library
local awful = require("awful")

-- Wibox handling library
local wibox = require("wibox")
local lain  = require("lain")

-- Custom local library
require("statusbar.lain.lain")
local gmc = require("themes.gmc")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

local WB = wibox_package

local sep1 = wibox.widget.textbox("  |  ")

function WB.add_widgets_left(s)
  return {
    layout = wibox.layout.fixed.horizontal,
    s.taglist,
    wibox.widget.textbox(" | "),
  }
end

function WB.add_widgets_middle(s)
  return s.tasklist
end

function WB.add_widgets_right(s)
  local cws = clone_widget_set

  local t = {
    layout = wibox.layout.fixed.horizontal,
    -- cws.mpd,
    -- sep1,
    -- cws.mem,
    sep1,
    cws.volume,
    sep1,
    cws.bat,
    sep1,
    cws.textclock,
  }

  -- add the systray to the primary screen, hidden by default
  -- use Mod4+= to toggle visibility
  if s == screen.primary then
    s.systray = wibox.widget {
      layout = wibox.layout.align.horizontal,
      sep1,
      wibox.widget.systray(),
    }
    s.systray.visible = false
    table.insert(t, 1, s.systray)
  end

  return t
end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.generate_wibox_one(s)
  -- Create the wibox
  s.wibox_one = awful.wibar({ position = "top", screen = s, height = 26 })

  -- Add widgets to the wibox
  s.wibox_one:setup {
    layout = wibox.layout.align.horizontal,
    WB.add_widgets_left(s),
    WB.add_widgets_middle(s),
    WB.add_widgets_right(s),
  }
end
