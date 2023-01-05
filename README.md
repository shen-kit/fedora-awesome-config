run `sudo dnf upgrade && sudo dnf update` first!

# Install the Following

## DNF
- arndr
- awesome
- alacritty
- compton
- dmenu
- gcalcli
- git
- libreoffice
- light
- neovim
- nodejs
- okular
- python3
- scrot
- sddm
- thunar
- tldr
- trash-cli
- xinput
- xrandr
- zoxide

## RPM (external DNF libraries)
- brave
- discord

## Flatpak
- obsidian
- spotify

## Other
- git credential manager

# Move the Files
- `dotconfig` -> `~/.config/`
- `home-dir` -> `~/`
- `./sddm-themes/` -> `/usr/share/sddm/themes/`

# Configuration

## SDDM 
- enable and set graphical target
	- `sudo systemctl enable sddm`
	- `sudo systemctl set-default graphical.target`
- `/etc/sddm.conf` -> `Current=sugar-candy`

## Nvim 
- install Packer
	- run :checkhealth and fix errors
- install plugins by saving `~/.config/nvim/lua/plugins.lua`
- uncomment `init.lua` and `keys.lua`

