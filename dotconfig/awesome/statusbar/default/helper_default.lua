-- {{{ Required libraries
-- Standard awesome library
local awful      = require("awful")
local beautiful  = require("beautiful")

-- Wibox handling library
local wibox      = require("wibox")

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

local WB         = wibox_package

-- Create a textclock widget
mytextclock      = wibox.widget.textclock()

-- Keyboard map indicator and switcher
mykeyboardlayout = awful.widget.keyboardlayout()

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

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
  return {
    layout = wibox.layout.fixed.horizontal,
    wibox.widget.textbox(" | "),
    mykeyboardlayout,
    wibox.widget.systray(),
    mytextclock,
  }
end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.generate_wibox(s)
  -- Create the wibox
  s.wibox_top = awful.wibar({ position = "top", screen = s, height = 30 })

  -- Add widgets
  s.wibox_top:setup {
    layout = wibox.layout.align.horizontal,
    WB.add_widgets_left(s),
    WB.add_widgets_middle(s),
    WB.add_widgets_right(s),
  }
end
