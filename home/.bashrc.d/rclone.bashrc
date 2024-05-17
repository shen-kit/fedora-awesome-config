# google drive
alias gdrive-upload="rclone sync ~/gDrive/ gdrive:"
alias gdrive-download="rclone sync gdrive: ~/gDrive"
alias gdrive-status="rclone check gdrive: ~/gDrive"
alias gdrive-dedupe="rclone dedupe gdrive: --dedupe-mode newest"

# onedrive
alias onedrive-upload="rclone sync ~/onedrive/ onedrive:"
alias onedrive-download="rclone sync onedrive: ~/onedrive"
alias onedrive-status="rclone check onedrive: ~/onedrive"

# both
alias rclone-download="onedrive-sync-download && gdrive-sync-download"
alias rclone-upload="onedrive-sync-upload && gdrive-sync-upload"
alias rclone-status="tail -5 ~/.config/rclone/rclone.log"
alias rs=rclone-status

