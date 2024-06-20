# source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# attach to tmux
~/.config/tmux-attach.sh

# load custom aliases and functions from ~/.bashrc.d
if [ -d ~/.config/bash ]; then 
	for rc in ~/.config/bash/*; do
		if [ -f "$rc" ]; then
			. "$rc"
		fi
	done
fi
unset rc

# setup programs required at the end of .bashrc
eval "$(starship init bash)"

eval "$(zoxide init bash)"
alias z=cd
