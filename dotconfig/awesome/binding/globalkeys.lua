-- Standard awesome library
local gears = require("gears")
local awful = require("awful")
-- local hotkeys_popup = require("awful.hotkeys_popup").widget
local hotkeys_popup = require("awful.hotkeys_popup")
-- Menubar library
local menubar = require("menubar")

local beautiful = require("beautiful")

-- Resource Configuration
local modkey        = RC.vars.modkey
local altkey        = RC.vars.altkey
local terminal      = RC.vars.terminal
local browser       = RC.vars.browser
local file_explorer = RC.vars.file_explorer

local _M = {}

-- ==================== HELPER FUNCTIONS ====================
local function sendToSpotify(command)
    return function ()
      awful.util.spawn_with_shell("dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player." .. command)
    end
  end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

function _M.get()
  local globalkeys = gears.table.join(
    -- awesome
    awful.key({ modkey, "Control" }, "r", awesome.restart,
              {description = "reload awesome", group = "awesome"}),
    awful.key({ modkey, "Control" }, "q", awesome.quit,
              {description = "quit awesome", group = "awesome"}),
    awful.key({ modkey }, "z",      hotkeys_popup.show_help,
              {description="show help", group="awesome"}),
    awful.key({ modkey }, "w", function ()
            for s in screen do
                s.wibox_one.visible = not s.wibox_one.visible
                if s.wibox_two then
                    s.wibox_two.visible = not s.wibox_two.visible
                end
            end
        end,
        {description = "toggle wibox", group = "awesome"}),

    -- toggle systray visibility
    awful.key({ modkey }, "=",
      function()
        screen.primary.systray.visible = not screen.primary.systray.visible
      end,
      {description="show help", group="awesome"}),

    -- switch tags
    awful.key({ modkey }, "h",
      function() awful.tag.viewprev() end,
      {description = "view previous", group = "switch tags"}),
    awful.key({ modkey }, "l",
      function() awful.tag.viewnext() end,
      {description = "view next", group = "switch tags"}),

    -- window focus
    awful.key({ modkey }, "j",
      function () awful.client.focus.byidx(-1) end,
      {description = "focus previous by index", group = "window focus"}
    ),
    awful.key({ modkey }, "k",
      function () awful.client.focus.byidx( 1) end,
      {description = "focus next by index", group = "window focus"}
    ),
    awful.key({ modkey, "Shift"   }, "j", function () awful.client.swap.byidx(-1)    end,
      {description = "swap with previous client", group = "window focus"}),
    awful.key({ modkey, "Shift"   }, "k", function () awful.client.swap.byidx(1)    end,
      {description = "swap with next client", group = "window focus"}),
    awful.key({ modkey, "Control" }, "j", function () awful.screen.focus_relative( 1) end,
      {description = "focus next screen", group = "window focus"}),
    awful.key({ modkey, "Control" }, "k", function () awful.screen.focus_relative(-1) end,
              {description = "focus previous screen", group = "window focus"}),

    -- launch applications
    awful.key({ modkey }, "r", function () os.execute("rofi -show drun") end,
              {description = "launch rofi", group = "launch applications"}),
    awful.key({ modkey }, "Return", function () awful.spawn(terminal) end,
              {description = "open a terminal", group = "launch applications"}),
    awful.key({ modkey }, "1",
              function () awful.util.spawn("flatpak run com.spotify.Client") end,
              {description = "spotify", group = "launch applications"}),
    awful.key({ modkey }, "2", function () awful.spawn(browser) end,
              {description = "firefox", group = "launch applications"}),
    awful.key({ modkey }, "3", function () awful.spawn.with_shell("Discord") end,
              {description = "discord", group = "launch applications"}),
    awful.key({ modkey }, "4", function () awful.spawn("flatpak run md.obsidian.Obsidian") end,
              {description = "obsidian", group = "launch applications"}),
    awful.key({ modkey }, "e", function () awful.spawn(file_explorer) end,
              {description = "file explorer", group = "launch applications"}),

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
              {description = "restore minimized", group = "window focus"}),

    -- screenshot
    -- https://github.com/lcpz/dots/blob/master/bin/screenshot
    awful.key({ }, "Print", function()
            awful.util.spawn("scrot -z -s -e 'xclip -selection clipboard -t image/png -i $f && rm $f'") end,
            {description = "screenshot selection to clipboard", group = "utilities"}),

    -- Screen brightness
    awful.key({ }, "XF86MonBrightnessUp", function () os.execute("light -A 7.5") end,
              {description = "+7.5%", group = "utilities"}),
    awful.key({ }, "XF86MonBrightnessDown", function () os.execute("light -U 7.5") end,
              {description = "-7.5%", group = "utilities"}),

    -- ALSA volume control
    awful.key({ }, "XF86AudioRaiseVolume",
        function ()
            os.execute(string.format("amixer -q set Master 2%%+"))
            beautiful.volume.update()
        end,
        {description = "volume up", group = "utilities"}),
    awful.key({ }, "XF86AudioLowerVolume",
        function ()
            os.execute(string.format("amixer -q set Master 2%%-"))
            beautiful.volume.update()
        end,
        {description = "volume down", group = "utilities"}),
    awful.key({ }, "XF86AudioMute",
        function ()
            os.execute(string.format("amixer -q set Master toggle"))
            beautiful.volume.update()
        end,
        {description = "toggle mute", group = "utilities"}),

    -- music controls
    awful.key({ }, "XF86AudioPlay", sendToSpotify("PlayPause"), {description = "play/pause", group = "music"}),
    awful.key({ }, "XF86AudioNext", sendToSpotify("Next"), {description = "next track", group = "music"}),
    awful.key({ }, "XF86AudioPrev", sendToSpotify("Previous"), {description = "previous track", group = "music"}),
    awful.key({ "Control", "Shift" }, "space", sendToSpotify("PlayPause"), {description = "play/pause", group = "music"}),
    awful.key({ "Control", altkey }, "Right", sendToSpotify("Next"), {description = "next track", group = "music"}),
    awful.key({ "Control", altkey }, "Left", sendToSpotify("Previous"), {description = "previous track", group = "music"}),

    -- Copy primary to clipboard (terminals to gtk)
    awful.key({ modkey }, "c", function () awful.spawn.with_shell("xsel | xsel -i -b") end,
              {description = "copy terminal to gtk", group = "utilities"})

  )

  return globalkeys
end

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

return setmetatable({}, { 
  __call = function(_, ...) return _M.get(...) end 
})
