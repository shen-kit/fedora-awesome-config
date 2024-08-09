-- {{{ Required libraries
-- Standard awesome library
local awful     = require("awful")
local beautiful = require("beautiful")

-- Wibox handling library
local wibox = require("wibox")
local lain  = require("lain")

-- Custom local library
require("statusbar.lain.lain")
local gmc = require("themes.gmc")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

local WB = wibox_package

-- Create a textclock widget
mytextclock = wibox.widget.textclock()

-- Keyboard map indicator and switcher
mykeyboardlayout = awful.widget.keyboardlayout()

function WB.initdeco ()
    -- Spacer
    WB.spacer = wibox.widget.textbox(" ")
    WB.spacerline = wibox.widget.textbox(" | ")

    -- Separators lain
    local separators  = lain.util.separators
    local arrow_color = gmc.color['red300']
    WB.arrow_dl = separators.arrow_left("alpha", arrow_color)
    WB.arrow_ld = separators.arrow_left(arrow_color, "alpha")
    WB.arrow_dr = separators.arrow_right("alpha", arrow_color)
    WB.arrow_rd = separators.arrow_right(arrow_color, "alpha")
end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
local sep1 = wibox.widget.textbox(" | ")
local sep2 = wibox.widget.textbox("  ")

function WB.add_widgets_left (s)
  return {
    layout = wibox.layout.fixed.horizontal,
    s.taglist,
    wibox.widget.textbox(" | "),
  }
end

function WB.add_widgets_middle (s)
  return s.tasklist
end

function WB.add_widgets_right (s)
  local cis = clone_icon_set
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

function WB.generate_wibox_one (s)
  -- layout: l_left, tasklist, l_right

  -- Create the wibox
  s.wibox_one = awful.wibar({ position = "top", screen = s, height = 26 })

  -- Add widgets to the wibox
  s.wibox_one:setup {
    layout = wibox.layout.align.horizontal,
    WB.add_widgets_left (s),
    WB.add_widgets_middle (s),
    WB.add_widgets_right (s),
  }
end
