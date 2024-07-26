#!/bin/bash

# create tmux sessions if not exists
sessionNames=("main")
startCmds=("cd ~ && clear")
# sessionNames=("main" "personal-notes")
# startCmds=("cd ~ && clear" "cd ~/gDrive/1-personal-notes && clear && v Dashboard.md")
# sessionNames=("main" "personal-notes" "zettelkasten")
# startCmds=("cd ~ && clear" "cd ~/gDrive/1-personal-notes && clear && v Dashboard.md" "cd ~/gDrive/2-zettelkasten && clear && v .")

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
