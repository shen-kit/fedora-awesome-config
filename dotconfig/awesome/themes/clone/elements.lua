local gmc                   = require("themes.gmc")

local theme_assets          = require("beautiful.theme_assets")
local xresources            = require("beautiful.xresources")
local dpi                   = xresources.apply_dpi

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

theme.font                  = "Arimo Nerd Font Propo 9"
theme.taglist_font          = "Inconsolata Medium 9"
theme.tasklist_disable_icon = true

theme.bg_normal             = "#333333"
theme.bg_focus              = "#4a4a4a"
theme.bg_minimize           = "#222222"
theme.bg_urgent             = "#ff0000"

theme.fg_normal             = "#eeeeee"
theme.fg_focus              = "#ffffff"
theme.fg_urgent             = "#ffffff"

theme.tasklist_fg_normal    = "#aaaaaa"

theme.useless_gap           = dpi(2)
theme.border_width          = dpi(2)

theme.border_normal         = gmc.color['grey800']
theme.border_focus          = gmc.color['blue800'] .. "cc"
theme.border_marked         = gmc.color['orange500'] .. "cc"

-- Generate taglist squares:
local taglist_square_size   = dpi(4)
theme.taglist_squares_sel   = theme_assets.taglist_squares_sel(
  taglist_square_size, gmc.color['black']
)
theme.taglist_squares_unsel = theme_assets.taglist_squares_unsel(
  taglist_square_size, gmc.color['white']
)

-- Display the taglist squares
theme.taglist_squares_sel   = theme_path .. "taglist/clone/square_sel.png"
theme.taglist_squares_unsel = theme_path .. "taglist/clone/square_unsel.png"
