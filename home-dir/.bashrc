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
alias obsidian="flatpak run md.obsidian.Obsidian"

# command shortcuts
alias vim="nvim"
alias vi="nvim"
alias v="nvim"
alias py="python"
alias cls="clear"
alias l="ls --color=auto"
alias ls="ls --color=auto" #colorise output
alias ll="ls -la" #long listing format
alias l.="ls -d .* --color=auto" #hidden files
alias mkdir="mkdir -pv" #create parent directories + verbose

alias rm="trash"

# remotes
alias gdrive-sync-upload="rclone sync ~/gDrive/ gdrive:"
alias gdrive-sync-download="rclone sync gdrive: ~/gDrive"
alias gdrive-status="rclone check gdrive: ~/gDrive"

alias onedrive-sync-upload="rclone sync ~/onedrive/ onedrive:"
alias onedrive-sync-download="rclone sync onedrive: ~/onedrive"
alias onedrive-status="rclone check onedrive: ~/onedrive"

alias remotes-sync-download="onedrive-sync-download && gdrive-sync-download"
alias remotes-sync-upload="onedrive-sync-upload && gdrive-sync-upload"
alias status-remotes="onedrive-status && gdrive-status"

# power
alias suspend="systemctl suspend"
alias screen-off="sleep 0.2 && xset dpms force off"
# alias shutdown="remotes-sync-upload && \shutdown now"
# alias reboot="remotes-sync-upload && \reboot"

# bluetooth
alias connect-mouse="bluetoothctl pair DA:7D:CF:0F:BB:BB; bluetoothctl connect DA:7D:CF:0F:BB:BB"
#alias connect-headphones="bluetoothctl connect 2C:FD:B3:8C:50:89"

# scripts
alias pwds="py ~/onedrive/password-manager/password-manager.py"


# ===== STARTUP =====

# prompt
export PS1="[\[$(tput sgr0)\]\[\033[38;5;11m\]\A\[$(tput sgr0)\]] \[$(tput sgr0)\]\[$(tput bold)\]\[\033[38;5;9m\]\w\[$(tput sgr0)\]\n\\$ \[$(tput sgr0)\]"

# ls colours
export LS_COLORS='ow=1;35'

# github credential manager
export GPG_TTY=$(tty)

# default text editor
export VISUAL=nvim

# gcalcli
#alias cal=gcalcli
## get x number of weeks from today (argument)
#calw() {
#	if [ $# -eq 0 ] ; then
#		gcalcli calw
#	else 
#		gcalcli calw today "$1"
#	fi
#}
## search for an event, giving details
#cals() {
#	gcalcli search "$1" today $2 --details description --details location --details length --details reminders --no-military 
#}

#export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
