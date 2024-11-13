# path
# export PATH="/var/lib/flatpak/app/org.wezfurlong.wezterm/current/active/export/bin:$PATH"
export PATH="/usr/bin/wezterm-gui:$PATH"

# default text editor
export EDITOR=nvim
export VISUAL=nvim

# ls colours --> "other-writeable" in bold cyan, directories in bold light purple
# export LS_COLORS='ow=1;35:di=1;95'

# github credential manager
export GPG_TTY=$(tty)

# fcitx
export GTK_IM_MODULE='fcitx'
export QT_IM_MODULE='fcitx'
export XMODIFIERS='@im=fcitx'

# how much detail to show in rclone output
export RCLONE_VERBOSE=0

# starship
export STARSHIP_CONFIG="$HOME/.config/starship/starship.toml"

# colourise less output
export LESS=R
