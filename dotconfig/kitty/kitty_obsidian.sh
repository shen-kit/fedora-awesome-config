kitty @ ls | grep '"title": "obsidian"'
if [[ $? -ne 0 ]]; then
  kitty @ launch --type=tab --tab-title=obsidian --cwd=~/gDrive/1-obsidian/ nvim
else
  kitty @ focus-tab --match title:obsidian
fi
