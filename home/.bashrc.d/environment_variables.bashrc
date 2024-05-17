# default text editor
export EDITOR=nvim
export VISUAL=nvim

# ls colours --> "other-writeable" in bold cyan, directories in bold light purple
export LS_COLORS='ow=1;35:di=1;95'

# github credential manager
export GPG_TTY=$(tty)

# fcitx
export GTK_IM_MODULE='fcitx'
export QT_IM_MODULE='fcitx'
export XMODIFIERS='@im=fcitx'

# make rclone verbose
export RCLONE_VERBOSE=1

# starship
export STARSHIP_CONFIG="$HOME/.config/starship/starship.toml"
