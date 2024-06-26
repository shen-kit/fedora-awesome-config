# google drive
# don't upload tuition resources as it doesn't change and is a large folder
alias gdrive-upload="rclone sync ~/gDrive/ gdrive: --exclude '3-work/tuition/resources/**'"
alias gdrive-download="rclone sync gdrive: ~/gDrive --exclude '3-work/tuition/resources/**'"
alias gdrive-status="rclone check gdrive: ~/gDrive"
alias gdrive-dedupe="rclone dedupe gdrive: --dedupe-mode newest"

# onedrive
alias onedrive-upload="rclone sync ~/onedrive/ onedrive:"
alias onedrive-download="rclone sync onedrive: ~/onedrive"
alias onedrive-status="rclone check onedrive: ~/onedrive"

# both
alias rclone-download="onedrive-sync-download && gdrive-sync-download"
alias rclone-upload="onedrive-sync-upload && gdrive-sync-upload"

# status
alias rs="tail -5 ~/.cache/rclone/rclone.log" # most recent status update
alias rsh="cat .cache/rclone/rclone.log | head -1" # download finished yet?

