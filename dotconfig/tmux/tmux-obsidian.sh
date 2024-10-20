#!/bin/bash

# switch to a 'obsidian' session with my personal notes open in neovim
# create the session if it does not exist

tmux has-session -t obsidian ||
    (tmux new -s obsidian -d && tmux send-keys "cd ~/gDrive/1-obsidian/; nvim Dashboard.md" Enter)

tmux switch-client -t obsidian
