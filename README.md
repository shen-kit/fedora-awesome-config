run `sudo dnf upgrade && sudo dnf update` first!

# Install the Following

## DNF
- arndr
- awesome
- alacritty
- conky
- git
- light
- neovim
- nodejs
- okular
- picom
- python3
- scrot
- sddm
- thunar
- tldr
- trash-cli
- rofi
- xinput
- xrandr
- zoxide

## RPM (external DNF libraries)
- brave
- discord

## Flatpak
- obsidian
- spotify

# Move the Files
- `dotconfig` -> `~/.config/`
- `home-dir` -> `~/`
- `./sddm-themes/` -> `/usr/share/sddm/themes/`
- run `crontab -e` and replace contents with with `crontab-e`

# Configuration

## SDDM 
- enable and set graphical target
	- `sudo systemctl enable sddm`
	- `sudo systemctl set-default graphical.target`
- `/etc/sddm.conf` -> `Current=sugar-candy`

## Nvim
- install plugins by saving `~/.config/nvim/lua/plugins.lua`
- uncomment `init.lua` and `keys.lua`

