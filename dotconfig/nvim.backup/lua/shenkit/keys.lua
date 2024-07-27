local map = vim.keymap.set
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "

map("i", "jk", "<ESC>", opts)

-- quick capture
map("n", "<leader>nn", ":e ~/gDrive/1-personal-notes/📥 Inbox.md<CR>", opts)
map("n", "<leader>nz", ":e ~/gDrive/2-zettelkasten/_inbox.md<CR>", opts)

-- jump forward in jump list (alacritty specific)
map("n", "\u{00A5}", "<C-i>", opts)
map("n", "<leader>fd", ":find \\c*", { noremap = true, silent = false })

-- quit
map("n", "Q", ":wqa<CR>", opts)

-- save file in insert mode
map("i", "<C-s>", "<ESC>:w<CR>", opts)
map("n", "<C-s>", ":w<CR>", opts)

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

-- keep cursor in place when joining lines
map("n", "J", "mzJ`z", opts)

-- perform <action> without replacing the buffer
map("x", "<leader>p", [["_dP]], opts)   -- paste 
map("x", "<leader>d", [[^"_D]])         -- delete line
map("x", "<leader>x", [["_x]])          -- delete char
map("x", "<leader>s", [["_s]])          -- delete and enter insert mode

-- copy to system clipboard
map("x", "Y", '"+y', opts)

-- search and replace the word under the cursor
map("n", "<leader>r", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], {silent = false})

-- surround text with parentheses/quotes
map("x", "(", "c()<ESC>Pgvlolo", opts)
map("x", "<leader>[", "c[]<ESC>Pgvlolo", opts)
map("x", "<leader>{", "c{}<ESC>Pgvlolo", opts)
map("x", "<leader><", "c<><ESC>Pgvlolo", opts)
map("x", "<leader>\"", "c\"\"<ESC>Pgvlolo", opts)
map("x", "<leader>'", "c''<ESC>Pgvlolo", opts)


-- ==============================================================================================
--                                          PLUGINS
-- ==============================================================================================

-- telescope
local builtin = require('telescope.builtin')
map('n', '<leader>ff', builtin.find_files, opts)
map('n', '<leader>fb', builtin.buffers, opts)
map('n', '<leader>fg', function() builtin.grep_string({ search = vim.fn.input("Grep > ") }) end, opts)

-- nvim tree
map("n", "<C-p>", ":NvimTreeToggle<CR>", opts)
map("n", "<leader>fc", ":NvimTreeFindFile<CR>", opts)

-- undotree
map("n", "<leader>u", vim.cmd.UndotreeToggle, opts)

-- toggle comments
map("i", "<C-_>", "<ESC>:CommentToggle<CR>a", opts)
map("n", "<C-_>", "<ESC>:CommentToggle<CR>", opts)
map("v", "<C-_>", ":CommentToggle<CR>gv", opts)

-- lsp
map('n', 'gl', '<cmd>lua vim.diagnostic.open_float()<cr>', opts)
map('n', '[d', '<cmd>lua vim.diagnostic.goto_prev()<cr>', opts)
map('n', ']d', '<cmd>lua vim.diagnostic.goto_next()<cr>', opts)

-- toggle diagnostic messages
vim.api.nvim_create_user_command("DiagnosticToggle", function()
    local config = vim.diagnostic.config
    config {
        virtual_text = not config().virtual_text,
        signs = not config().virtual_text,
    }
end, { desc = "toggle diagnostic" })

-- easy align
map("x", "ga", ":EasyAlign ")
map("n", "ga", "vip:EasyAlign ")

-- lazygit
map("n", "<leader>lg", vim.cmd.LazyGit, opts)

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

