require('smart-splits').setup({})

local map = vim.keymap.set

-- moving between splits
map('n', '<M-h>', require('smart-splits').move_cursor_left)
map('n', '<M-j>', require('smart-splits').move_cursor_down)
map('n', '<M-k>', require('smart-splits').move_cursor_up)
map('n', '<M-l>', require('smart-splits').move_cursor_right)
map('n', '<M-\\>', require('smart-splits').move_cursor_previous)
-- resizing splits
map('n', '<M-H>', require('smart-splits').resize_left)
map('n', '<M-J>', require('smart-splits').resize_down)
map('n', '<M-K>', require('smart-splits').resize_up)
map('n', '<M-L>', require('smart-splits').resize_right)
-- swapping buffers between windows
map('n', '<leader><leader>h', require('smart-splits').swap_buf_left)
map('n', '<leader><leader>j', require('smart-splits').swap_buf_down)
map('n', '<leader><leader>k', require('smart-splits').swap_buf_up)
map('n', '<leader><leader>l', require('smart-splits').swap_buf_right)
