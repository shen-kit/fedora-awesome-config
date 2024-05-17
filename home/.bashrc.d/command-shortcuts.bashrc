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

alias c=z
alias cd=z
alias cat=bat

alias ls="ls --color=auto"                      # colorise ls output
alias l="ls --color=auto"                       # ls shortcut
alias ll="ls -lah"                              # long-listing, all files, human-readable
alias l.="ls -d .* --color=auto"                # hidden files only

alias ii="mimeopen -n"
alias mkdir="mkdir -pv"                         # create parent directories + verbose
alias rm="trash"

alias cls=clear                                 # clear terminal screen

# ========== CLIPBOARD ==========

alias cpc="xclip -sel c < "                     # copy file contents to clipboard
alias cpwd="pwd | xclip -selection clipboard"   # copy current directory path to clipboard

# ========== CODING / SCRIPTS ==========
alias py="python"                               # python
alias lg="lazygit"                              # open lazygit
alias pwds="py ~/onedrive/01\ password-manager/password-manager.py"

# sends a message to telegram
# usage: notifyPhone "<message here>"
function ntfyPhone() {
    curl -X POST https://api.telegram.org/bot6377693743:AAGy7wNviLLwqI9xbJE2qsPWkEz9-7Gpy0g/sendMessage -H \
        'Content-Type: application/json' -d \
        '{"chat_id": "5964916686", "text": "'"$1"'"}'
    echo ""
}
alias ntfy="notify-send"

