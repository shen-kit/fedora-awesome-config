-- [[ keys.lua ]]

-- map(mode, sequence, command, options)
local map = vim.api.nvim_set_keymap

-- leave insert mode with 'jk'
map('i', 'jj', '<ESC>', {})

-- pane navigation
map("n", "<C-h>", "<C-w>h", {})
map("n", "<C-j>", "<C-w>j", {})
map("n", "<C-k>", "<C-w>k", {})
map("n", "<C-l>", "<C-w>l", {})

-- resizing panes
map("n", "<C-Up>", ":resize -2<CR>", {})
map("n", "<C-Down>", ":resize +2<CR>", {})
map("n", "<C-Left>", ":vertical resize -2<CR>", {})
map("n", "<C-Right>", ":vertical resize +2<CR>", {})


---- telescope
--local builtin = require('telescope.builtin')
--map('n', '<C-p>', ':lua require"telescope.builtin".find_files()<CR>', {})
--map('n', '<leader>fg', ':lua require"telescope.builtin".live_grep()<CR>', {})
--map('n', '<leader>fb', ':lua require"telescope.builtin".buffers()<CR>', {})
--map('n', '<leader>fh', ':lua require"telescope.builtin".help_tags()<CR>', {})
--
---- nvim-tree
--map("n", "<C-f>", ":NvimTreeToggle<CR>", {})
--
---- comment
--map('n', '<leader>\\', ':lua require("Comment.api").toggle.linewise.current()<CR>', {})
--map('i', '<leader>\\', '<ESC>:lua require("Comment.api").toggle.linewise.current()<CR>i', {})
--
---- tabs
--map('n', '<Tab>', 'gt', {})
--map('n', '<S-Tab>', 'gT', {})
--map('n', '<Leader>1', '1gt', {})
--map('n', '<Leader>2', '2gt', {})
--map('n', '<Leader>3', '3gt', {})
--map('n', '<Leader>4', '4gt', {})
--map('n', '<Leader>5', '5gt', {})
