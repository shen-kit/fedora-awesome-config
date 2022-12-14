---------------------------
-- my first awesome rice --
---------------------------

local theme_assets  = require("beautiful.theme_assets")
local xresources    = require("beautiful.xresources")
local dpi           = xresources.apply_dpi
local awful         = require("awful")
local wibox         = require("wibox")
local gears         = require("gears")
local lain          = require("lain")
local markup        = lain.util.markup

local theme_path    = "~/.config/awesome/themes/theme-1/"

local theme = {}

-- ========== variable definitions ==========
theme.font          = "Hack Nerd Font 9"
theme.wallpaper = theme_path.."wall.jpg"

theme.bg_normal     = "#1A1A1A"
theme.bg_focus      = "#303030"
theme.bg_minimize   = "#232b2b"
theme.bg_urgent     = "#ff0000"
theme.fg_normal     = "#aaaaaa"
theme.fg_focus      = "#ffffff"
theme.fg_urgent     = "#ffffff"

-- clients
theme.useless_gap   = dpi(2)
theme.border_width  = dpi(1)
theme.border_normal = "#3F3F3F"
theme.border_focus  = "#7F7FAF"

-- tasklist
theme.tasklist_disable_icon = true

-- taglist
local taglist_square_size = dpi(4)
theme.taglist_squares_sel = theme_assets.taglist_squares_sel(
    taglist_square_size, theme.fg_normal
)
theme.taglist_squares_unsel = theme_assets.taglist_squares_unsel(
    taglist_square_size, theme.fg_normal
)

-- Define the icon theme for application icons. If not set then the icons
-- from /usr/share/icons and /usr/share/icons/hicolor will be used.
theme.icon_theme = nil


-- ==================== WIBOX ====================
-- create taglist buttons, clicking switches to that tag
local taglist_buttons = gears.table.join(awful.button({ }, 1, function(t) t:view_only() end))

-- clock widget
local mytextclock = wibox.widget {
    font = 'Hack Nerd Font 9',
    format = ' %a %d %b, %H:%M',
    widget = wibox.widget.textclock,
}

-- volume widget
local vol_color = theme.fg_normal --"#AAAA00"
local volicon = wibox.widget.textbox()
volicon.forced_width = 16
volicon.font='Hack Nerd font 12'
volicon.align = 'right'

theme.volume = lain.widget.alsa({
	settings = function()
		if volume_now.status == 'off' then
			volicon.align = 'center'
			volicon.markup = markup.fg.color(vol_color, '???')
		elseif tonumber(volume_now.level) == 0 then
			volicon.markup = markup.fg.color(vol_color, '???')
		elseif tonumber(volume_now.level) < 30 then
			volicon.markup = markup.fg.color(vol_color, '???')
		else
			volicon.markup = markup.fg.color(vol_color, '???')
			volicon.align = 'center'
		end

    widget:set_markup(markup.fontfg(theme.font, vol_color, " " .. volume_now.level .. "% "))
	end
})

-- battery
local baticon = wibox.widget.textbox(' ???')
local bat = lain.widget.bat({
    timeout  = 20,
    settings = function()
        if bat_now.status and bat_now.status ~= "N/A" then
            if bat_now.ac_status == 1 then
                baticon:set_markup(' ???')
                widget:set_markup(markup.font(theme.font, " " .. bat_now.perc .. "% "))
                return
            elseif tonumber(bat_now.perc) <= 20 then
                baticon:set_markup(' ???')
            elseif tonumber(bat_now.perc) <= 40 then
                baticon:set_markup(' ???')
            elseif tonumber(bat_now.perc) <= 60 then
                baticon:set_markup(' ???')
            elseif tonumber(bat_now.perc) <= 80 then
                baticon:set_markup(' ???')
            else
                baticon:set_markup(' ???')
            end
            widget:set_markup(markup.font(theme.font, " " .. bat_now.perc .. "% " .. bat_now.time .. " remaining"))
        else
            widget:set_markup(markup.font(theme.font, " 100% "))
        end
    end
})


-- separator widget
local gap = wibox.widget.textbox('  ')
local spr = wibox.widget{
  widget = wibox.widget.separator,
  shape = gears.shape.circle,
  color = "#52b0c4",
  border_color = theme.bg_normal,
  border_width = 6,
  forced_height = 4,
  forced_width = 16,
}
local spr_long = wibox.widget.textbox('        ')

function theme.at_screen_connect(s)
    -- set wallpaper
    local wallpaper = theme.wallpaper
    if type(wallpaper) == "function" then
        wallpaper = wallpaper(s)
    end
    gears.wallpaper.maximized(wallpaper, s, true)

    -- create tags widget
    awful.tag(awful.util.tagnames, s, awful.layout.layouts[1])
    s.mytaglist = awful.widget.taglist {
        screen  = s,
        filter  = awful.widget.taglist.filter.all,
        buttons = taglist_buttons,
        layout  = {
            spacing = 4,
            layout = wibox.layout.fixed.horizontal,
            spacing_widget = {
                color = theme.bg_normal,
            }
        },
    }

    -- create a tasklist widget
    s.mytasklist = awful.widget.tasklist {
        screen  = s,
        filter  = awful.widget.tasklist.filter.currenttags,
        buttons = awful.util.tasklist_buttons,
        style = {
            shape = gears.shape.rounded_rect,
            shape_border_width = 4,
            shape_border_color = theme.bg_normal,
            align = "center"
        },
        layout   = {
            spacing = 20,
            spacing_widget = {
                {
                    forced_width = 4,
                    shape        = gears.shape.circle,
                    widget       = wibox.widget.separator
                },
                valign = 'center',
                halign = 'center',
                widget = wibox.container.place,
            },
            layout  = wibox.layout.flex.horizontal
        }
    }

    -- Create the wibox
    s.mywibox = awful.wibar({ position = "top", screen = s, height = dpi(28), bg = theme.bg_normal, fg = theme.fg_normal })

    -- Add widgets to the wibox
    s.mywibox:setup {
        layout = wibox.layout.align.horizontal,
        { -- Left widgets
            layout = wibox.layout.fixed.horizontal,
            s.mytaglist,
            spr_long
        },
        s.mytasklist, -- Middle widget
        { -- Right widgets
            layout = wibox.layout.fixed.horizontal,
            spr_long,
            wibox.widget.systray(),
            spr,
            volicon,
            theme.volume.widget,
            spr,
            baticon,
            bat,
            spr,
            mytextclock,
            gap
        },
    }
end

return theme
