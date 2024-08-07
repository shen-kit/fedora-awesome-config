local map = vim.keymap.set
local opts = { noremap = true, silent = true }
local nosilent = { noremap = true, silent = false }

map('i', 'jk', '<ESC>', opts)

-- set working directory to the current buffer's directory
map('n', '<leader>cd', '<CMD>cd %:h<CR>', {noremap = true, silent = false})

-- jump forward in jump list (alacritty specific)
map("n", "\u{00A5}", "<C-i>", opts)

-- ============================================================
--                            Editing
-- ============================================================

-- map ctrl+enter to new line below
map('i', '\u{00A1}', '<C-o>o', opts)
map('n', '\u{00A1}', 'o<ESC>', opts)
map('i', '\u{00A2}', '<C-o>O', opts)
map('n', '\u{00A2}', 'O<ESC>', opts)
map('n', '<CR>', 'o<ESC>', opts)

-- move lines
map('x', '<C-M-j>', ":m '>+1<CR>gv=gv", opts)
map('x', '<C-M-k>', ":m '<-2<CR>gv=gv", opts)
map('n', '<C-M-k>', ":m -2<CR>", opts)
map('n', '<C-M-j>', ":m +1<CR>", opts)
map('i', '<C-M-k>', "<esc>:m -2<CR>a", opts)
map('i', '<C-M-j>', "<esc>:m +1<CR>a", opts)

-- indenting
map('x', '<', '<gv', opts)
map('x', '>', '>gv', opts)

-- folds
map('n', '<leader>z', 'zA', opts)

-- commenting
map({'i', 'n'}, '<C-_>', '<CMD>CommentToggle<CR>', opts)
map('x', '<C-_>', ':CommentToggle<CR>gv', opts)

-- keep cursor in place
map('n', 'J', 'mzJ`z', opts)
-- map({'n', 'x'}, 'j', 'jzz', opts)
-- map({'n', 'x'}, 'k', 'kzz', opts)
-- map({'n', 'x'}, 'G', 'Gzz', opts)
map('n', '<C-u>', '<C-u>zz', opts)
map('n', '<C-d>', '<C-d>zz', opts)
map('n', '<C-f>', '<C-f>zz', opts)
map('n', '<C-b>', '<C-b>zz', opts)

-- search and replace the word under the cursor
map('n', '<leader>r', [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], nosilent)

-- surround text with parentheses/quotes
map('x', '(', 'c()<ESC>Pgvlolo', opts)
map('x', '<leader>[', 'c[]<ESC>Pgvlolo', opts)
map('x', '<leader>{', 'c{}<ESC>Pgvlolo', opts)
map('x', '<leader><', 'c<><ESC>Pgvlolo', opts)
map('x', '<leader>\'', 'c\'\'<ESC>Pgvlolo', opts)
map('x', '<leader>"', 'c""<ESC>Pgvlolo', opts)

-- ============================================================
--                    Working With Files
-- ============================================================

-- find file
map("n", "<leader>fd", ":find \\c*", nosilent)

-- cycle through buffers
map('n', '<S-H>', vim.cmd.bprevious, opts)
map('n', '<S-L>', vim.cmd.bnext, opts)

-- close current buffer (ctrl+shift+D)
map('n', '\u{00A3}', vim.cmd.bdelete, opts)
-- close all buffers except current (ctrl+shift+B)
map('n', '\u{00A4}', ':%bd|e#<CR>:bnext<CR>:bdelete<CR>', opts)

-- save / exit
map({'i', 'n', 'x'}, '<C-s>', '<CMD>w<CR>', nosilent)
map('n', '<C-Q>', '<CMD>wqa<CR>', opts)

-- switch tabs
map('n', '<TAB>', vim.cmd.tabnext, opts)
map('n', '<S-TAB>', vim.cmd.tabprevious, opts)

-- copy to system clipboard
map('x', 'Y', '"+y', opts)

-- ============================================================
--                          Plugins
-- ============================================================

-- nvim tree
map('n', '<C-p>', vim.cmd.NvimTreeToggle, opts)
map('n', '<leader>fc', vim.cmd.NvimTreeFindFile, opts)

-- oil
map('n', '<C-l>', '<CMD>Oil --float<CR>', opts)

-- telescope
local telescope = require('telescope.builtin')
map('n', '<leader>ff', telescope.find_files, opts)
map('n', '<leader>fb', telescope.buffers, opts)
map('n', '<leader>fg', telescope.grep_string, opts)

-- undotree
map('n', '<leader>u', vim.cmd.UndotreeToggle, opts)

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

