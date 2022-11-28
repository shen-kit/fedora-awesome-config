run `sudo dnf upgrade && sudo dnf update` first!

# Install the Following

## DNF
- awesome
- alacritty
- dmenu
- neovim
- zoxide
- okular
- compton
- nautilus
- git
- sddm
- tldr
- trash-cli
- xinput
- xrandr
- arndr
- light

## RPM (external DNF libraries)
- discord
- brave

## Flatpak
- spotify
- obsidian

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

