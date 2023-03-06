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
alias figma="flatpak run io.github.Figma_Linux.figma_linux"

# command shortcuts
alias vim="nvim"
alias py="python"
alias cls="clear"
alias ls="ls --color=auto" #colorise output
alias ll="ls -la" #long listing format
alias l.="ls -d .* --color=auto" #hidden files
alias mkdir="mkdir -pv" #create parent directories + verbose

alias gdrive-sync-upload="rclone sync ~/shared/gDrive/ gdrive:"
alias gdrive-sync-download="rclone sync gdrive: ~/shared/gDrive"
alias gdrive-status="rclone check gdrive: ~/shared/gDrive"

alias onedrive-sync="onedrive --synchronize"
alias onedrive-sync="onedrive --synchronize"
alias onedrive-sync-download-only="onedrive --synchronize --download-only"
alias suspend="systemctl suspend"

alias reboot-sync-onedrive="onedrive --synchronize && reboot"
alias shutdown-sync-onedrive="onedrive --synchronize && shutdown now"

alias rm="trash"

# more complex commands
alias connect-headphones="bluetoothctl connect 2C:FD:B3:8C:50:89"
alias connect-earphones="bluetoothctl connect 00:1B:66:26:98:87"
alias connect-earphones-force="bluetoothctl remove 00:1B:66:26:98:87;bluetoothctl pair 00:1B:66:26:98:87;bluetoothctl connect 00:1B:66:26:98:87"
alias screen-off="sleep 0.2 && xset dpms force off"

# scripts
alias pwds="py ~/OneDrive/password-manager/password-manager.py"

# prompt
export PS1="[\[$(tput sgr0)\]\[\033[38;5;11m\]\A\[$(tput sgr0)\]] \[$(tput sgr0)\]\[$(tput bold)\]\[\033[38;5;9m\]\w\[$(tput sgr0)\]\n\\$ \[$(tput sgr0)\]"

# ls colours
export LS_COLORS='ow=1;35'

# github credential manager
export GPG_TTY=$(tty)

# gcalcli
alias cal=gcalcli
# get x number of weeks from today (argument)
calw() {
	if [ $# -eq 0 ] ; then
		gcalcli calw
	else 
		gcalcli calw today "$1"
	fi
}
# search for an event, giving details
cals() {
	gcalcli search "$1" today $2 --details description --details location --details length --details reminders --no-military 
}

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
