#!/bin/bash

# switch to a 'zettelkasten' session with my zettelkasten open in neovim
# create the session if it does not exist

tmux has-session -t zettelkasten ||
    tmux new -s zettelkasten -d "cd ~/gDrive/2-zettelkasten; nvim _inbox.md";

tmux switch-client -t zettelkasten
