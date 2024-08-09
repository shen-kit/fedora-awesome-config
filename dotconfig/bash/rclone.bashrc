# google drive
# don't upload tuition resources as it doesn't change and is a large folder
alias gdrive-upload="rclone sync ~/gDrive/ gdrive: --exclude-from $HOME/.config/rclone/exclude-list.txt"
alias gdrive-download="rclone sync gdrive: ~/gDrive --exclude-from $HOME/.config/rclone/exclude-list.txt"
alias gdrive-status="rclone check gdrive: ~/gDrive"
alias gdrive-dedupe="rclone dedupe gdrive: --dedupe-mode newest"

alias obsidian-upload="rclone sync ~/gDrive/1-personal-notes/ gdrive:1-personal-notes/; rclone sync ~/gDrive/2-zettelkasten/ gdrive:2-zettelkasten/"

# onedrive
# alias onedrive-upload="rclone sync ~/onedrive/ onedrive:"
# alias onedrive-download="rclone sync onedrive: ~/onedrive"
# alias onedrive-status="rclone check onedrive: ~/onedrive"

# both
alias rclone-download="gdrive-sync-download" #"onedrive-sync-download"
alias rclone-upload="gdrive-sync-upload" #onedrive-sync-upload

# status
alias rs="tail -5 ~/.cache/rclone/rclone.log" # most recent status update
alias rsh="cat .cache/rclone/rclone.log | head -1" # download finished yet?

