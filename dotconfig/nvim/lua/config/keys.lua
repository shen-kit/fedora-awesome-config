local map = vim.keymap.set
local opts = { noremap = true, silent = true }

map("i", "jk", "<ESC>", opts)

-- jump forward in jump list (alacritty specific)
map("n", "\u{00A5}", "<C-i>", opts)
map("n", "<leader>fd", ":find \\c*", { noremap = true, silent = false })

-- ============================================================
--                            Editing
-- ============================================================

-- map ctrl+enter to new line below
map("i", "\u{00A1}", "<C-o>o", opts)
map("n", "\u{00A1}", "o<ESC>", opts)
map("i", "\u{00A2}", "<C-o>O", opts)
map("n", "\u{00A2}", "O<ESC>", opts)

-- move lines
map("x", "<C-M-j>", ":m '>+1<CR>gv=gv", opts)
map("x", "<C-M-k>", ":m '<-2<CR>gv=gv", opts)
map("n", "<C-M-k>", ":m -2<CR>", opts)
map("n", "<C-M-j>", ":m +1<CR>", opts)
map("i", "<C-M-k>", "<esc>:m -2<CR>a", opts)
map("i", "<C-M-j>", "<esc>:m +1<CR>a", opts)

-- indenting
map("x", "<", "<gv", opts)
map("x", ">", ">gv", opts)

-- keep cursor in place when joining lines
map("n", "J", "mzJ`z", opts)

-- search and replace the word under the cursor
map("n", "<leader>r", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], {silent = false})

-- surround text with parentheses/quotes
map("x", "(", "c()<ESC>Pgvlolo", opts)
--map("x", "<leader>[", "c[]<ESC>Pgvlolo", opts)
--map("x", "<leader>{", "c{}<ESC>Pgvlolo", opts)
--map("x", "<leader><", "c<><ESC>Pgvlolo", opts)
--map("x", "<leader>\"", "c\"\"<ESC>Pgvlolo", opts)
--map("x", "<leader>'", "c''<ESC>Pgvlolo", opts)

-- ============================================================
--                       Multiple Files
-- ============================================================

-- cycle through buffers
map("n", "<S-H>", ":bprevious<CR>", opts)
map("n", "<S-L>", ":bnext<CR>", opts)
-- close current buffer (ctrl+shift+D)
map("n", "\u{00A3}", ":bdelete<CR>", opts)
-- close all buffers except current
map("n", "\u{00A4}", ":%bd|e#<CR>:bnext<CR>:bdelete<CR>", opts)

-- switch tabs
map("n", "<TAB>", ":tabnext<CR>", opts)
map("n", "<S-TAB>", ":tabprevious<CR>", opts)

-- copy to system clipboard
map("x", "Y", '"+y', opts)

-- ============================================================
--                          Plugins
-- ============================================================

-- nvim tree
map("n", "<C-p>", ":NvimTreeToggle<CR>", opts)
map("n", "<leader>fc", ":NvimTreeFindFile<CR>", opts)

-- oil
map("n", "<C-l>", "<CMD>Oil --float<CR>", opts)

-- telescope
local telescope = require('telescope.builtin')
map('n', '<leader>ff', telescope.find_files, opts)
map('n', '<leader>fb', telescope.buffers, opts)
map('n', '<leader>fg', telescope.grep_string, opts)

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
map("x", "ga", ":EasyAlign ", { noremap = true, silent = false })
map("n", "ga", "vip:EasyAlign ", { noremap = true, silent = false })
