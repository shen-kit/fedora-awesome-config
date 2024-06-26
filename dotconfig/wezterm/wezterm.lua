local wezterm = require("wezterm")
local config  = {}
local mux     = wezterm.mux

-- multiplexing
-- config.unix_domains = { { name = "session" } }
-- config.default_gui_startup_args = { 'connect', 'session' }

-- setup default windows
wezterm.on('gui-startup', function()
   mux.spawn_window({ workspace = "main" })

   local _, pane, _ = mux.spawn_window({
       workspace = "personal-notes",
       cwd       = wezterm.home_dir .. "/gDrive/1-personal-notes",
       args      = {},
   })
   pane:send_text("v Dashboard.md\n")

   _, pane, _ = mux.spawn_window({
       workspace = "zettelkasten",
       cwd       = wezterm.home_dir .. "/gDrive/2-zettelkasten",
       args      = {}
   })
   pane:send_text("v .\n")

   mux.set_active_workspace("main")
end)

-- fonts
config.font      = wezterm.font("MesloLGS NF", {weight = "Regular"})
config.font_size = 11.0

-- window
config.color_scheme              = "The Hulk"
config.window_background_opacity = 0.95
config.window_close_confirmation = "NeverPrompt"
config.window_padding            = {
    left   = 0,
    right  = 0,
    top    = 0,
    bottom = 0,
}

-- tab bar
config.tab_bar_at_bottom                          = true
config.use_fancy_tab_bar                          = false
config.show_new_tab_button_in_tab_bar             = false
config.switch_to_last_active_tab_when_closing_tab = true
config.tab_max_width                              = 18
config.colors = {
    tab_bar = {
        background = "#222",
        active_tab = {
            bg_color  = "#3c7eb5",
            fg_color  = "#222",
            intensity = "Bold",
        },
        inactive_tab = {
            fg_color  = "#3c7eb5",
            bg_color  = "#222",
            intensity = "Bold",
        },
        -- do nothing on inactive tab hover
        inactive_tab_hover = {
            fg_color  = "#3c7eb5",
            bg_color  = "#222",
            intensity = "Bold",
        },
    },
}

config.automatically_reload_config = true
config.cursor_thickness            = "1px"

local function is_vim(pane)
  -- this is set by the plugin, and unset on ExitPre in Neovim
  return pane:get_user_vars().IS_NVIM == 'true'
end

local direction_keys = {
  h = 'Left',
  j = 'Down',
  k = 'Up',
  l = 'Right',
}

local function split_nav(resize_or_move, key)
  return {
    key = key,
    mods = resize_or_move == 'resize' and 'ALT|SHIFT' or 'ALT',
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = resize_or_move == 'resize' and 'ALT|SHIFT' or 'ALT' },
        }, pane)
      else
        if resize_or_move == 'resize' then
          win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
        else
          win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
        end
      end
    end),
  }
end

-- keys
config.leader = { key = " ", mods = "CTRL", timeout_milliseconds = 300 }
config.keys = {
    -- panes
    {
        mods   = "LEADER",
        key    = "v",
        action = wezterm.action.SplitHorizontal({ domain = 'CurrentPaneDomain' })
    },
    {
        mods   = "LEADER",
        key    = "-",
        action = wezterm.action.SplitVertical({ domain = 'CurrentPaneDomain' })
    },
    {
        mods   = "LEADER",
        key    = "0",
        action = wezterm.action.PaneSelect { mode = "SwapWithActive" },
    },
    -- toggle zoom into current pane
    {
        mods = 'LEADER',
        key = 'm',
        action = wezterm.action.TogglePaneZoomState
    },
    -- move between split panes
    split_nav('move', 'h'),
    split_nav('move', 'j'),
    split_nav('move', 'k'),
    split_nav('move', 'l'),
    -- resize panes
    split_nav('resize', 'h'),
    split_nav('resize', 'j'),
    split_nav('resize', 'k'),
    split_nav('resize', 'l'),
    -- close pane without confirmation
    {
        mods = "CTRL|SHIFT",
        key = "w",
        action = wezterm.action.CloseCurrentPane({ confirm = false })
    },

    -- copy mode
    {
        mods = "LEADER",
        key = "Enter",
        action = wezterm.action.ActivateCopyMode,
    },

    -- switch windows
    {
        mods = "CTRL",
        key = "[",
        action = wezterm.action.SwitchWorkspaceRelative(-1),
    },
    {
        mods = "CTRL",
        key = "]",
        action = wezterm.action.SwitchWorkspaceRelative(1),
    },
}

wezterm.on('update-right-status', function(window, pane)
  window:set_right_status(window:active_workspace())
end)

return config
