#!/bin/bash

# switch to a 'personal-notes' session with my personal notes open in neovim
# create the session if it does not exist

tmux has-session -t personal-notes ||
    tmux new -s personal-notes -d "cd ~/gDrive/1-personal-notes/; nvim Dashboard.md";

tmux switch-client -t personal-notes