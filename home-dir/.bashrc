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
#bind -s 'set completion-ignore-case on'

# ======= MY ADDITIONS =======

if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
  tmux a -t default || exec tmux new -s default && exit;
fi

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
alias cd="z"

alias ii="xdg-open"
alias rm="trash"

# remotes
alias gdrive-sync-upload="rclone sync ~/gDrive/ gdrive:"
alias gdrive-sync-download="rclone sync gdrive: ~/gDrive"
alias gdrive-status="rclone check gdrive: ~/gDrive"

alias onedrive-sync-upload="rclone sync ~/onedrive/ onedrive:"
alias onedrive-sync-download="rclone sync onedrive: ~/onedrive"
alias onedrive-status="rclone check onedrive: ~/onedrive"

alias rclone-download="onedrive-sync-download && gdrive-sync-download"
alias rclone-upload="onedrive-sync-upload && gdrive-sync-upload"
alias rclone-status="tail -5 ~/.config/rclone.log"
alias rs=rclone-status

# power
alias suspend="systemctl suspend"
alias screen-off="sleep 0.2 && xset dpms force off"
# alias shutdown="remotes-sync-upload && \shutdown now"
# alias reboot="remotes-sync-upload && \reboot"

# bluetooth
alias connect-mouse="bluetoothctl pair DA:7D:CF:0F:BB:BB; bluetoothctl connect DA:7D:CF:0F:BB:BB"
#alias connect-headphones="bluetoothctl connect 2C:FD:B3:8C:50:89"

# scripts
alias pwds="py ~/onedrive/01\ password-manager/password-manager.py"


# ===== STARTUP =====

# prompt
export PS1="[\[$(tput sgr0)\]\[\033[38;5;11m\]\A\[$(tput sgr0)\]] \[$(tput sgr0)\]\[$(tput bold)\]\[\033[38;5;9m\]\w\[$(tput sgr0)\]\n\\$ \[$(tput sgr0)\]"

# ls colours
export LS_COLORS='ow=1;35'

# github credential manager
export GPG_TTY=$(tty)

# default text editor
export VISUAL=nvim

# make rclone verbose when called
export RCLONE_VERBOSE=1
