# source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# add user bin to path
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]
then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
fi
export PATH

# attach to tmux
~/.config/tmux-attach.sh

# load custom aliases and functions from ~/.bashrc.d
if [ -d ~/.bashrc.d ]; then 
	for rc in ~/.bashrc.d/*; do
		if [ -f "$rc" ]; then
			. "$rc"
		fi
	done
fi
unset rc

# setup programs required at the end of .bashrc

eval "$(zoxide init bash)"

eval "$(starship init bash)"
