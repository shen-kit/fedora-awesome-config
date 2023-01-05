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
local mytextclock = wibox.widget.textclock()

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
			volicon.markup = markup.fg.color(vol_color, 'ﱝ')
		elseif tonumber(volume_now.level) == 0 then
			volicon.markup = markup.fg.color(vol_color, '奄')
		elseif tonumber(volume_now.level) < 30 then
			volicon.markup = markup.fg.color(vol_color, '奔')
		else
			volicon.markup = markup.fg.color(vol_color, '墳')
			volicon.align = 'center'
		end

    widget:set_markup(markup.fontfg(theme.font, vol_color, " " .. volume_now.level .. "% "))
	end
})


-- redshift
local myredshift = wibox.widget{
    checked      = false,
    forced_width = 20,
    check_color  = "#EB8F8F",
    border_color = "#EB8F8F",
    border_width = 1,
    paddings     = 0,
    shape        = gears.shape.circle,
    widget       = wibox.widget.checkbox
}

local myredshift_text = wibox.widget{
    align  = "center",
    widget = wibox.widget.textbox,
}

local myredshift_stack = wibox.widget{
    myredshift,
    myredshift_text,
    layout = wibox.layout.stack
}
local redshift_placed = wibox.widget {
  myredshift_stack,
  valign = "center",
  halign = "center",
  widget = wibox.container.place,
}

lain.widget.contrib.redshift.attach(
    myredshift,
    function (active)
        if active then
            myredshift_text:set_markup(markup(theme.bg_normal, "<b>R</b>"))
        else
            myredshift_text:set_markup(markup(theme.fg_normal, "R"))
        end
        myredshift.checked = active
    end
)


-- separator widget
local spr = wibox.widget.textbox('  ')

function theme.at_screen_connect(s)
    -- set wallpaper
    local wallpaper = theme.wallpaper
    if type(wallpaper) == "function" then
        wallpaper = wallpaper(s)
    end
    gears.wallpaper.maximized(wallpaper, s, true)

    -- create tags widget
    awful.tag({ "1", "2", "3", "4" }, s, awful.layout.layouts[1])
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
            spr,
        },
        s.mytasklist, -- Middle widget
        { -- Right widgets
            layout = wibox.layout.fixed.horizontal,
            wibox.widget.systray(),
            spr,
            -- myredshift_stack,
            redshift_placed,
            spr,
            volicon,
            theme.volume.widget,
            spr,
            mytextclock,
            s.mylayoutbox,
        },
    }
end

return theme
