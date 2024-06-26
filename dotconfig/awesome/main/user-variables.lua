-- {{{ Global Variable Definitions
-- moved here in module as local variable
-- }}}

local _M = {
  terminal = "wezterm", -- alacritty
  browserA  = "brave-browser --profile-directory='Default'",
  browserB  = "brave-browser --profile-directory='Profile 3'",
  file_explorer = "thunar",

  -- device, used in vicious widget
  wlandev = 'wlan0',
  --wlandev = 'wlp2s0b1', # void on notebook

  -- Default modkey.
  -- Usually, Mod4 is the key with a logo between Control and Alt.
  -- If you do not like this or do not have such a key,
  -- I suggest you to remap Mod4 to another key using xmodmap or other tools.
  -- However, you can use another modifier like Mod1, but it may interact with others.
  modkey = "Mod4",
  altkey = "Mod1",
}

return _M

