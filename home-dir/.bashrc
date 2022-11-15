# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# User specific environment
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]
then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
fi
export PATH

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
if [ -d ~/.bashrc.d ]; then
	for rc in ~/.bashrc.d/*; do
		if [ -f "$rc" ]; then
			. "$rc"
		fi
	done
fi

unset rc

# case insensitive
bind -s 'set completion-ignore-case on'

# ======= MY ADDITIONS =======

eval "$(zoxide init bash)"

# ------ aliases ------
# apps
alias spotify="flatpak run com.spotify.Client"
alias discord="flatpak run com.discordapp.Discord"
alias notion="notion-snap"
alias obsidian="flatpak run md.obsidian.Obsidian"

# command shortcuts
alias vim="nvim"
alias py="python"
alias cls="clear"
alias ls="ls --color=auto" #colorise output
alias ll="ls -la" #long listing format
alias l.="ls -d .* --color=auto" #hidden files
alias mkdir="mkdir -pv" #create parent directories + verbose

alias c="z"
alias ci="zi"
alias cd="z"
alias cdi="zi"

# more complex commands
alias activate-monitor="xrandr --output HDMI1 --primary --mode 1920x1080 --right-of eDP1"
alias connect-headphones="bluetoothctl connect 2C:FD:B3:8C:50:89"
alias screen-off="sleep 0.2 && xset dpms force off"

alias tl="task my_list"
alias t="task"

# prompt
#export PS1="[\[$(tput sgr0)\]\[\033[38;5;226m\]\A\[$(tput sgr0)\]] \[$(tput sgr0)\]\[$(tput bold)\]\[\033[38;5;9m\]\w\[$(tput sgr0)\]> \[$(tput sgr0)\]"
export PS1="[\[$(tput sgr0)\]\[\033[38;5;11m\]\A\[$(tput sgr0)\]] \[$(tput sgr0)\]\[$(tput bold)\]\[\033[38;5;9m\]\w\[$(tput sgr0)\]\n\\$ \[$(tput sgr0)\]"

