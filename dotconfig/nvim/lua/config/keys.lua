local map = vim.keymap.set
local opts = { noremap = true, silent = true }
local nosilent = { noremap = true, silent = false }

map('i', 'jk', '<ESC>', opts)

-- set working directory to the current buffer's directory
map('n', '<leader>cd', '<CMD>cd %:h<CR>', { noremap = true, silent = false })

-- ============================================================
--                            Editing
-- ============================================================

-- map ctrl+enter to new line below
map('i', '<C-S-CR>', '<C-o>O', opts)
map('i', '<C-CR>', '<C-o>o', opts)
map('n', '<C-S-CR>', 'O<ESC>', opts)
map('n', '<C-CR>', 'o<ESC>', opts)

-- move lines
map('x', '<M-C-j>', ":m '>+1<CR>gv=gv", opts)
map('x', '<M-C-k>', ":m '<-2<CR>gv=gv", opts)
map('n', '<M-C-k>', ":m -2<CR>", opts)
map('n', '<M-C-j>', ":m +1<CR>", opts)
map('i', '<M-C-k>', "<ESC>:m -2<CR>a", opts)
map('i', '<M-C-j>', "<ESC>:m +1<CR>a", opts)

-- indenting
map('x', '<', '<gv', opts)
map('x', '>', '>gv', opts)
map('n', '<', '<<', opts)
map('n', '>', '>>', opts)
map('i', '<S-Tab>', '<C-D>', opts)

-- commenting
map('i', '<C-_>', "<ESC>my:norm gcc<CR>`ya", opts)
map('n', '<C-_>', 'my:norm gcc<CR>`y', opts)
map('x', '<C-_>', ":norm gcc<CR>gv", opts)

-- keep cursor in place
map('n', 'J', 'mzJ`z', opts)

-- search and replace the word under the cursor
map('n', '<leader>r', [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], nosilent)

-- surround text with parentheses/quotes
map('x', '<leader>(', 'c()<ESC>Pgvlolo', opts)
map('x', '<leader>[', 'c[]<ESC>Pgvlolo', opts)
map('x', '<leader>{', 'c{}<ESC>Pgvlolo', opts)
map('x', '<leader><', 'c<><ESC>Pgvlolo', opts)
map('x', '<leader>\'', 'c\'\'<ESC>Pgvlolo', opts)
map('x', '<leader>"', 'c""<ESC>Pgvlolo', opts)
map("x", "<leader>`", "c``<ESC>Pgvlolo", opts)

-- ============================================================
--                    Working With Files
-- ============================================================

-- find file
map("n", "<leader>fd", ":find \\c*", nosilent)

-- cycle through buffers
map('n', '<S-H>', vim.cmd.bprevious, opts)
map('n', '<S-L>', vim.cmd.bnext, opts)

-- close current buffer (ctrl+shift+D)
-- move to previous buffer then delete the last buffer we were on to keep splits
map('n', '<C-S-D>', ':w<bar>bp<bar>sp<bar>bn<bar>bd<CR>', opts)
-- close all buffers except current (ctrl+shift+B)
map('n', '<C-S-B>', ':%bd|e#<CR>:bnext<CR>:bdelete<CR>', opts)

-- save / exit
map({ 'i', 'n', 'x' }, '<C-s>', '<CMD>w<CR>', nosilent)
map('n', '<C-S-Q>', '<CMD>wqa<CR>', opts)

-- switch tabs
map({ 'n', 'i' }, '<C-TAB>', vim.cmd.tabnext, opts)
map({ 'n', 'i' }, '<C-S-TAB>', vim.cmd.tabprevious, opts)

-- yank keeping cursor in-place
map('x', 'y', "ygv<ESC>", opts)
map('x', 'Y', '"+ygv<ESC>', opts) -- to system clipboard

-- ============================================================
--                          Plugins
-- ============================================================

-- nvim tree
map({ 'i', 'n' }, '<C-S-P>', vim.cmd.NvimTreeToggle, opts)
map('n', '<leader>fc', vim.cmd.NvimTreeFindFile, opts)

-- oil
map('n', '<C-l>', '<CMD>Oil --float<CR>', opts)

-- telescope
local telescope = require('telescope.builtin')
map('n', '<leader>ff', telescope.find_files, opts)
map('n', '<leader>fp', telescope.git_files, opts)
map('n', '<leader>fg', function()
  telescope.grep_string({ search = vim.fn.input("Grep > ") })
end, opts)

-- harpoon
map('n', '<leader>h', function() require('harpoon.ui').nav_file(1) end, opts)
map('n', '<leader>j', function() require('harpoon.ui').nav_file(2) end, opts)
map('n', '<leader>k', function() require('harpoon.ui').nav_file(3) end, opts)
map('n', '<leader>l', function() require('harpoon.ui').nav_file(4) end, opts)
map('n', '<leader>e', function() require('harpoon.ui').toggle_quick_menu() end, opts)
map('n', '<leader>a', function() require("harpoon.mark").add_file() end, opts)

-- undotree
map('n', '<leader>u', vim.cmd.UndotreeToggle, opts)

-- auto-session
map('n', '<leader>ss', ':SessionSearch<CR>', opts)

-- smart splits
-- moving between splits
map('n', '<M-h>', require('smart-splits').move_cursor_left, opts)
map('n', '<M-j>', require('smart-splits').move_cursor_down, opts)
map('n', '<M-k>', require('smart-splits').move_cursor_up, opts)
map('n', '<M-l>', require('smart-splits').move_cursor_right, opts)
map('n', '<M-\\>', require('smart-splits').move_cursor_previous, opts)
-- resizing splits
map('n', '<M-H>', require('smart-splits').resize_left, opts)
map('n', '<M-J>', require('smart-splits').resize_down, opts)
map('n', '<M-K>', require('smart-splits').resize_up, opts)
map('n', '<M-L>', require('smart-splits').resize_right, opts)
-- swapping buffers between windows
map('n', '<leader><leader>h', require('smart-splits').swap_buf_left, opts)
map('n', '<leader><leader>j', require('smart-splits').swap_buf_down, opts)
map('n', '<leader><leader>k', require('smart-splits').swap_buf_up, opts)
map('n', '<leader><leader>l', require('smart-splits').swap_buf_right, opts)

-- align
map('x', 'ga', ':EasyAlign ', nosilent)
map('n', 'ga', 'vip:EasyAlign ', nosilent)

-- debugging
map('n', '<leader>db', '<CMD>DapToggleBreakpoint<CR>', opts)
map('n', '<leader>dr', '<CMD>DapContinue<CR>', opts)
