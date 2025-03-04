-- {{{ Required libraries
-- Standard awesome library
local awful     = require("awful")
local beautiful = require("beautiful")

-- Wibox handling library
local wibox     = require("wibox")
local lain      = require("lain")

-- Custom Local Library
require("statusbar.lain.lain")
local gmc = require("themes.gmc")
-- }}}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

local WB = wibox_package

function WB.initdeco()
  -- Spacer
  WB.spacer         = wibox.widget.textbox(" |LAINHELP| ")
  WB.spacerline     = wibox.widget.textbox(" & ")

  -- Separators lain
  local separators  = lain.util.separators
  local arrow_color = gmc.color['red300']
  WB.arrow_dl       = separators.arrow_left("alpha", arrow_color)
  WB.arrow_ld       = separators.arrow_left(arrow_color, "alpha")
  WB.arrow_dr       = separators.arrow_right("alpha", arrow_color)
  WB.arrow_rd       = separators.arrow_right(arrow_color, "alpha")
end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.add_widgets_main(s) return {} end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.add_widgets_monitor_left(line, s) return {} end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.add_widgets_monitor_right(line, s) return {} end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function WB.generate_wibox_two(s)
  -- layout: l_left, l_mid, tasklist

  -- Create the wibox
  s.wibox_two = awful.wibar({ position = "bottom", screen = s })

  -- Add widgets to the wibox
  s.wibox_two:setup {
    layout = wibox.layout.align.horizontal,
    WB.add_widgets_monitor_left(s),
    WB.spacer,
    WB.add_widgets_monitor_right(s),
  }
end
