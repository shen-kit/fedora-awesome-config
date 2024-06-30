# ========== NVIM ==========

alias vim=nvim
alias vi=nvim
alias v=nvim
alias sv=sudoedit
alias vfind=nvimFind
alias vf=nvimFind

function nvimFind() {
    nvim "$(find $1 -type f | fzf)"
}

# ========== FILES / NAVIGATION ==========

# vifm
alias fm=vifm

# call ls after zoxide, unless going back to home dir
function cd() {
    if [ $# -eq 0 ]; then
        z ~
    else
        z "$1"
        dirs
        echo
        ls
        echo
    fi
} 
alias c=cd
alias ..="cd .."
alias ...="cd ../.."

alias cat=bat

alias ls="ls --color=auto"                      # colorise ls output
alias l1="ls --color=auto -1"                   # output one file per line
alias lv="ls --color=auto -1v"                  # natural sort by numbers, one per line
alias l="ls --color=auto"                       # ls shortcut
alias ll="ls -lh"                               # long-listing, human-readable
alias lla="ls -lah"                             # long-listing, all files, human-readable
alias l.="ls -d .* --color=auto"                # hidden files only
alias lss="du -sh * | sort -hr"                 # list file/folder sizes descending

alias ii="mimeopen -n"
alias mkdir="mkdir -pv"                         # create parent directories + verbose
alias rm="trashrm"                              # use trash-cli, if fail then use default rm

alias cls=clear                                 # clear terminal screen

# interactive mode by default (ask to override)
alias cp="cp -i"
alias mv="mv -i"

# ========== CLIPBOARD ==========

alias cpwd="pwd | xclip -selection clipboard"   # copy current directory path to clipboard
alias cpc="xclip -sel c < "                     # copy file contents to clipboard

# ========== BLUETOOTH ==========

alias connect-bt-speaker="bluetoothctl connect F4:2B:7D:03:22:2F"
alias connect-bt-earphones="bluetoothctl connect 84:AC:60:1F:91:05"
alias connect-bt-headphones="bluetoothctl connect 2C:FD:B3:8C:50:89"

# ========== CODING / SCRIPTS ==========

alias py="python"                               # python
alias pwds="py ~/onedrive/01\ password-manager/password-manager.py"

# GIT

alias lg="lazygit"                              # open lazygit
alias gl="git log --graph --color=always"
alias glo="git log --oneline --graph --color=always"
function gac () {
    git add .;
    git commit -m "$1";
}
function gacp () {
    git add .;
    git commit -m "$1";
    git push;
}

# ========== MISC. ==========

alias ntfy="notify-send"
alias zettelkasten="~/.config/tmux/tmux-zettelkasten.sh"
