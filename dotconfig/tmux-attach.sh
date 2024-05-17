#!/bin/bash

# create tmux sessions if not exists
sessionNames=("main" "obsidian")
startCmds=("cd ~ && clear" "cd ~/onedrive/obsidian_zettelkasten && clear && v Dashboard.md")

for i in ${!sessionNames[@]}; do
    session=${sessionNames[$i]}
    tmux has-session -t $session &> /dev/null
    # session doesn't exist with name
    if [ $? != 0 ]
    then
        tmux new-session -s $session -d
        tmux send-keys -t $session "${startCmds[$i]}" Enter
    fi
done

# attach to tmux if not in a tmux session
if [[ -z "$TMUX" ]] then
    tmux attach -t main
fi
