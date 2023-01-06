-- If LuaRocks is installed, make sure that packages installed through it are
-- found (e.g. lgi). If LuaRocks is not installed, do nothing.
pcall(require, "luarocks.loader")

-- ==================== IMPORT REQUIREMENTS ====================
-- Standard awesome library
local gears         = require("gears")
local awful         = require("awful")
                      require("awful.autofocus")
local beautiful     = require("beautiful")            -- theme handling library
local naughty       = require("naughty")              -- notification library
local hotkeys_popup = require("awful.hotkeys_popup")
                      require("awful.hotkeys_popup.keys")
local mytable       = awful.util.table or gears.table -- 4.{0,1} compatibility


-- ==================== ERROR HANDLING ====================
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
if awesome.startup_errors then
    naughty.notify({ preset = naughty.config.presets.critical,
                     title = "Oops, there were errors during startup!",
                     text = awesome.startup_errors })
end

-- Handle runtime errors after startup
do
    local in_error = false
    awesome.connect_signal("debug::error", function (err)
        -- Make sure we don't go into an endless error loop
        if in_error then return end
        in_error = true

        naughty.notify({ preset = naughty.config.presets.critical,
                         title = "Oops, an error happened!",
                         text = tostring(err) })
        in_error = false
    end)
end


-- ==================== VARIABLE DEFINITIONS ====================
-- theme for colours, icons, font and wallpapers
local themes = {
    "theme-1",
    "everforest"
}
local theme = themes[2]
beautiful.init(string.format("~/.config/awesome/themes/%s/theme.lua", theme))
-- beautiful.init("~/.config/awesome/themes/everforest/theme.lua")

-- This is used later as the default terminal and editor to run.
local terminal = "alacritty"

local browser = "brave-browser"
-- local file_explorer = "thunar"

local modkey = "Mod4"
local altkey = "Mod1"

awful.util.tasklist_buttons = mytable.join(
    awful.button({}, 1, function(c)
        if c ~= client.focus then
          c:emit_signal("request::activate", "tasklist", {raise = true })
        end
    end)
)

-- Table of layouts to cover with awful.layout.inc, order matters.
awful.layout.layouts = {
    awful.layout.suit.tile,
}


-- ==================== WIBOX ====================
-- Re-set wallpaper when a screen's geometry changes (e.g. different resolution)
screen.connect_signal("property::geometry", function(s)
    if beautiful.wallpaper then
        local wallpaper = beautiful.wallpaper
        -- If wallpaper is a function, call it with the screen
        if type(wallpaper) == "function" then
            wallpaper = wallpaper(s)
        end
        gears.wallpaper.maximized(wallpaper, s, true)
    end
end)

-- No borders when rearranging only 1 non-floating or maximized client
screen.connect_signal("arrange", function (s)
    local only_one = #s.tiled_clients == 1
    for _, c in pairs(s.clients) do
        if only_one and not c.floating or c.maximized or c.fullscreen then
            c.border_width = 0
        else
            c.border_width = beautiful.border_width
        end
    end
end)

awful.screen.connect_for_each_screen(function(s) beautiful.at_screen_connect(s) end)


-- ==================== HELPER FUNCTIONS ====================
local function sendToSpotify(command)
    return function ()
      awful.util.spawn_with_shell("dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player." .. command)
    end
  end

-- ==================== KEY BINDINGS ====================
local globalkeys = gears.table.join(
    -- awesome
    awful.key({ modkey, "Control" }, "r", awesome.restart,
              {description = "reload awesome", group = "awesome"}),
    awful.key({ modkey,           }, "z",      hotkeys_popup.show_help,
              {description="show help", group="awesome"}),

    -- switch tags
    awful.key({ modkey }, "h",   awful.tag.viewprev,
              {description = "view previous", group = "tag"}),
    awful.key({ modkey }, "l",  awful.tag.viewnext,
              {description = "view next", group = "tag"}),

    -- window focus
    awful.key({ modkey }, "j",
        function () awful.client.focus.byidx(-1) end,
        {description = "focus previous by index", group = "client"}
    ),
    awful.key({ modkey }, "k",
        function () awful.client.focus.byidx( 1) end,
        {description = "focus next by index", group = "client"}
    ),
    awful.key({ modkey, "Shift"   }, "j", function () awful.client.swap.byidx(-1)    end,
              {description = "swap with previous client", group = "client"}),
    awful.key({ modkey, "Shift"   }, "k", function () awful.client.swap.byidx(1)    end,
              {description = "swap with next client", group = "client"}),
    awful.key({ modkey, "Control" }, "j", function () awful.screen.focus_relative( 1) end,
              {description = "focus next screen", group = "screen"}),
    awful.key({ modkey, "Control" }, "k", function () awful.screen.focus_relative(-1) end,
              {description = "focus previous screen", group = "screen"}),
    awful.key({ modkey,           }, "Tab",
        function ()
            awful.client.focus.history.previous()
            if client.focus then
                client.focus:raise()
            end
        end,
        {description = "go back", group = "client"}),

    -- launch applications
    awful.key({ modkey }, "Return", function () awful.spawn(terminal) end,
              {description = "open a terminal", group = "launcher"}),
    awful.key({ modkey }, "1",
              function () awful.util.spawn("flatpak run com.spotify.Client") end,
              {description = "spotify", group = "launcher"}),
    awful.key({ modkey }, "2", function () awful.spawn(browser) end,
              {description = "firefox", group = "launcher"}),
    awful.key({ modkey }, "3", function () awful.spawn.with_shell("~/Discord/Discord") end,
              {description = "discord", group = "launcher"}),
    awful.key({ modkey }, "4", function () awful.spawn("flatpak run md.obsidian.Obsidian") end,
              {description = "obsidian", group = "launcher"}),

    -- layout
    awful.key({ modkey, altkey }, "k",     function () awful.tag.incmwfact( 0.05)          end,
              {description = "increase master width factor", group = "layout"}),
    awful.key({ modkey, altkey }, "j",     function () awful.tag.incmwfact(-0.05)          end,
              {description = "decrease master width factor", group = "layout"}),
    awful.key({ modkey, "Shift" }, "l",     function () awful.tag.incncol( 1, nil, true)    end,
              {description = "increase the number of columns", group = "layout"}),
    awful.key({ modkey, "Shift" }, "h",     function () awful.tag.incncol(-1, nil, true)    end,
              {description = "decrease the number of columns", group = "layout"}),
    awful.key({ modkey }, "Up",
              function ()
                  local c = awful.client.restore()
                  -- Focus restored client
                  if c then
                    c:emit_signal(
                        "request::activate", "key.unminimize", {raise = true}
                    )
                  end
              end,
              {description = "restore minimized", group = "client"}),

    -- Show/hide wibox
    awful.key({ modkey }, "w", function ()
            for s in screen do
                s.mywibox.visible = not s.mywibox.visible
                if s.mybottomwibox then
                    s.mybottomwibox.visible = not s.mybottomwibox.visible
                end
            end
        end,
        {description = "toggle wibox", group = "awesome"}),

    -- dmenu
    awful.key({ modkey }, "r", function ()
                    os.execute(string.format("dmenu_run -b -m 0 -i -fn 'Monospace' -nb '%s' -nf '%s' -sb '%s' -sf '%s'",
                    beautiful.bg_normal, beautiful.fg_normal, beautiful.bg_focus, beautiful.fg_focus))
              end,
              {description = "launch dmenu", group = "launcher"}),

    -- screenshot
    -- https://github.com/lcpz/dots/blob/master/bin/screenshot
    awful.key({ }, "Print", function()
            awful.util.spawn("scrot -z -s -e 'xclip -selection clipboard -t image/png -i $f && rm $f'") end,
            {description = "screenshot selection to clipboard", group = "hotkeys"}),

    -- Screen brightness
    awful.key({ }, "XF86MonBrightnessUp", function () os.execute("light -A 7.5") end,
              {description = "+7.5%", group = "hotkeys"}),
    awful.key({ }, "XF86MonBrightnessDown", function () os.execute("light -U 7.5") end,
              {description = "-7.5%", group = "hotkeys"}),

    -- ALSA volume control
    awful.key({ }, "XF86AudioRaiseVolume",
        function ()
            os.execute(string.format("amixer -q set %s 2%%+", beautiful.volume.channel))
            beautiful.volume.update()
        end,
        {description = "volume up", group = "hotkeys"}),
    awful.key({ }, "XF86AudioLowerVolume",
        function ()
            os.execute(string.format("amixer -q set %s 2%%-", beautiful.volume.channel))
            beautiful.volume.update()
        end,
        {description = "volume down", group = "hotkeys"}),
    awful.key({ }, "XF86AudioMute",
        function ()
            os.execute(string.format("amixer -q set %s toggle", beautiful.volume.togglechannel or beautiful.volume.channel))
            beautiful.volume.update()
        end,
        {description = "toggle mute", group = "hotkeys"}),

    -- music controls
    awful.key({ }, "XF86AudioPlay", sendToSpotify("PlayPause"), {description = "play/pause", group = "music"}),
    awful.key({ }, "XF86AudioNext", sendToSpotify("Next"), {description = "next track", group = "music"}),
    awful.key({ }, "XF86AudioPrev", sendToSpotify("Previous"), {description = "previous track", group = "music"}),
    awful.key({ "Control", altkey }, "space", sendToSpotify("PlayPause"), {description = "play/pause", group = "music"}),
    awful.key({ "Control", altkey }, "Right", sendToSpotify("Next"), {description = "next track", group = "music"}),
    awful.key({ "Control", altkey }, "Left", sendToSpotify("Previous"), {description = "previous track", group = "music"}),

    -- Copy primary to clipboard (terminals to gtk)
    awful.key({ modkey }, "c", function () awful.spawn.with_shell("xsel | xsel -i -b") end,
              {description = "copy terminal to gtk", group = "hotkeys"})
)

clientkeys = gears.table.join(
    awful.key({ modkey, "Shift"   }, "w",      function (c) c:kill()                         end,
              {description = "close", group = "client"}),
    awful.key({ modkey, "Control" }, "Return", function (c) c:swap(awful.client.getmaster()) end,
              {description = "move to master", group = "client"}),
    awful.key({ modkey }, "o",      function (c) c:move_to_screen()               end,
              {description = "move to screen", group = "client"}),
    awful.key({ modkey }, "t",      function (c) c.ontop = not c.ontop            end,
              {description = "toggle keep on top", group = "client"}),
    awful.key({ modkey }, "Down",
        function (c)
            -- The client currently has the input focus, so it cannot be
            -- minimized, since minimized clients can't have the focus.
            c.minimized = true
        end ,
        {description = "minimize", group = "client"}),
    -- maximise (horizontally / vertically)
    awful.key({ modkey }, "m",
        function (c)
            c.maximized = not c.maximized
            c:raise()
        end ,
        {description = "(un)maximize", group = "client"}),
    awful.key({ modkey, "Control" }, "m",
        function (c)
            c.maximized_vertical = not c.maximized_vertical
            c:raise()
        end ,
        {description = "(un)maximize vertically", group = "client"}),
    awful.key({ modkey, "Shift"   }, "m",
        function (c)
            c.maximized_horizontal = not c.maximized_horizontal
            c:raise()
        end ,
        {description = "(un)maximize horizontally", group = "client"})
)

-- Bind all key numbers to tags.
-- Be careful: we use keycodes to make it work on any keyboard layout.
-- This should map on the top row of your keyboard, usually 1 to 9.
for i = 1, 9 do
    globalkeys = gears.table.join(globalkeys,
        -- Move client to tag.
        awful.key({ modkey, "Control" }, "#" .. i + 9,
                  function ()
                      if client.focus then
                          local tag = client.focus.screen.tags[i]
                          if tag then
                              client.focus:move_to_tag(tag)
                          end
                     end
                  end,
                  {description = "move focused client to tag #"..i, group = "tag"}),
        -- Toggle tag on focused client.
        awful.key({ modkey, "Control", "Shift" }, "#" .. i + 9,
                  function ()
                      if client.focus then
                          local tag = client.focus.screen.tags[i]
                          if tag then
                              client.focus:toggle_tag(tag)
                          end
                      end
                  end,
                  {description = "toggle focused client on tag #" .. i, group = "tag"})
    )
end

-- Set keys
root.keys(globalkeys)

-- ==================== Rules ====================
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {
    -- All clients
    { rule = { },
      properties = { border_width = beautiful.border_width,
                     border_color = beautiful.border_normal,
                     focus = awful.client.focus.filter,
                     raise = true,
                     keys = clientkeys,
                     screen = awful.screen.preferred,
                     placement = awful.placement.no_overlap+awful.placement.no_offscreen
     }
    },

    -- Floating clients.
    { rule_any = {
        instance = {
          "DTA",  -- Firefox addon DownThemAll.
          "copyq",  -- Includes session name in class.
          "pinentry",
        },
        class = {
          "Arandr",
          "Blueman-manager",
          "Gpick",
          "Kruler",
          "MessageWin",  -- kalarm.
          "Sxiv",
          "Tor Browser", -- Needs a fixed window size to avoid fingerprinting by screen size.
          "Wpa_gui",
          "veromix",
          "xtightvncviewer"},

        -- Note that the name property shown in xprop might be set slightly after creation of the client
        -- and the name shown there might not match defined rules here.
        name = {
          "Event Tester",  -- xev.
        },
        role = {
          "AlarmWindow",  -- Thunderbird's calendar.
          "ConfigManager",  -- Thunderbird's about:config.
          "pop-up",       -- e.g. Google Chrome's (detached) Developer Tools.
        }
      }, properties = { floating = true }},

    -- Add titlebars to normal clients and dialogs
    { rule_any = {type = { "normal", "dialog" }
      }, properties = { titlebars_enabled = false }
    },
}

-- ==================== Signals ====================
-- Signal function to execute when a new client appears.
client.connect_signal("manage", function (c)
    -- Set the windows at the slave
    -- i.e. put it at the end of others instead of setting it master.
    -- if not awesome.startup then awful.client.setslave(c) end

    if awesome.startup
      and not c.size_hints.user_position
      and not c.size_hints.program_position then
        -- Prevent clients from being unreachable after screen count changes.
        awful.placement.no_offscreen(c)
    end
end)

-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", function(c)
    c:emit_signal("request::activate", "mouse_enter", {raise = false})
end)

client.connect_signal("focus", function(c) c.border_color = beautiful.border_focus end)
client.connect_signal("unfocus", function(c) c.border_color = beautiful.border_normal end)


-- ==================== AUTOSTART APPLICATIONS ====================
awful.spawn.with_shell("compton")
awful.spawn.with_shell("xfce4-power-manager")
