local wezterm = require 'wezterm'
local config  = wezterm.config_builder()

-- ==================================================
-- =                    plugins                     =
-- ==================================================

-- Smart Splits

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
    mods = resize_or_move == 'resize' and 'SHIFT|ALT' or 'ALT',
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = resize_or_move == 'resize' and 'SHIFT|ALT' or 'ALT' },
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

-- Workspace Switcher (switch between existing workspaces)

local workspace_switcher       = wezterm.plugin.require("https://github.com/MLFlexer/smart_workspace_switcher.wezterm")
workspace_switcher.get_choices = function(_) -- only show existing workspaces
  return workspace_switcher.choices.get_workspace_elements({})
end

-- Sessioniser (create new sessions from git directories)

local sessionizer              = wezterm.plugin.require("https://github.com/mikkasendke/sessionizer.wezterm")
sessionizer.apply_to_config(config, true)
sessionizer.config = {
  paths = { "/home/shenkit/comp-sci", "/home/shenkit/fedora-awesome-config/" }
}


-- ====================================================
-- =                    appearance                    =
-- ====================================================

config.font              = wezterm.font('FiraCode Nerd Font Mono', { weight = 500 })
config.font_rules        = {
  {
    intensity = 'Bold',
    italic = true,
    font = wezterm.font('Monaspace Radon', { weight = 700 }),
  },
  {
    intensity = 'Normal',
    italic = true,
    font = wezterm.font('Monaspace Radon', { weight = 400 }),
  },
}
config.harfbuzz_features = { 'calt', 'liga', 'ss01', 'ss02', 'ss03', 'ss09' }
config.font_size         = 11


config.default_cursor_style           = 'SteadyBar'
config.color_scheme                   = 'catppuccin-mocha'
config.window_background_opacity      = 0.95
config.window_padding                 = { left = 0, top = 0, right = 0, bottom = 0 }

config.use_fancy_tab_bar              = false
config.tab_bar_at_bottom              = true
config.show_new_tab_button_in_tab_bar = false

config.colors                         = {
  tab_bar = {
    background = "#0b0022",

    active_tab = {
      bg_color = '#d193d9',
      fg_color = '#000000',
      intensity = 'Bold',
      italic = true,
    },

    inactive_tab = {
      bg_color = '#0b0022',
      fg_color = '#dddddd',
    },
  }
}

-- workspaces

wezterm.on('update-right-status', function(win, _)
  win:set_right_status(wezterm.format({
    { Background = { Color = "#3ebd40" } },
    { Foreground = { Color = "#111111" } },
    { Text = " " .. win:active_workspace() .. " " },
  }))
end)

-- ===================================================
-- =                    key binds                    =
-- ===================================================

local act     = wezterm.action
config.leader = { mods = 'CTRL', key = ' ' }
config.keys   = {

  -- tabs
  { mods = 'LEADER',     key = 't',          action = act.SpawnTab 'CurrentPaneDomain' },
  { mods = 'LEADER',     key = 'c',          action = act.SpawnCommandInNewTab { cwd = wezterm.home_dir } },
  { mods = 'CTRL|ALT',   key = 'h',          action = act.ActivateTabRelative(-1) },
  { mods = 'CTRL|ALT',   key = 'l',          action = act.ActivateTabRelative(1) },
  { mods = 'CTRL|SHIFT', key = 'LeftArrow',  action = act.MoveTabRelative(-1) },
  { mods = 'CTRL|SHIFT', key = 'RightArrow', action = act.MoveTabRelative(1) },

  -- panes
  { mods = 'LEADER',     key = 'v',          action = act.SplitHorizontal },
  { mods = 'LEADER',     key = '-',          action = act.SplitVertical },
  split_nav('move', 'h'),
  split_nav('move', 'j'),
  split_nav('move', 'k'),
  split_nav('move', 'l'),
  split_nav('resize', 'h'),
  split_nav('resize', 'j'),
  split_nav('resize', 'k'),
  split_nav('resize', 'l'),

  -- workspaces
  { mods = 'ALT',        key = ']',   action = act.SwitchWorkspaceRelative(1) },
  {
    mods = 'LEADER',
    key = 'o',
    action = act.SwitchToWorkspace {
      name = 'obsidian',
      spawn = {
        args = { 'nvim', '/home/shenkit/gDrive/1_obsidian/Dashboard.md' },
      }
    }
  },
  {
    mods = 'ALT',
    key = 'w',
    action = workspace_switcher.switch_workspace(),
  },
  {
    mods = 'CTRL|ALT',
    key = 'w',
    action = sessionizer.show,
  },

  -- disable defaults
  { mods = 'CTRL|SHIFT', key = 'p',   action = act.DisableDefaultAssignment },
  { mods = 'CTRL',       key = 'Tab', action = act.DisableDefaultAssignment },
  { mods = 'CTRL|SHIFT', key = 'Tab', action = act.DisableDefaultAssignment },
  { mods = 'CTRL|SHIFT', key = 'l',   action = act.DisableDefaultAssignment },
}

return config
