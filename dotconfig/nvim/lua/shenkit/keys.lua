local map = vim.keymap.set
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "

map("i", "jk", "<ESC>", opts)

-- quit
map("n", "Q", ":wqa<CR>", opts)

-- save file in insert mode
map("i", "<C-s>", "<ESC>:w<CR>", opts)

-- map ctrl+enter to new line below
map("i", "<C-CR>", "<C-o>o", opts)
map("n", "<C-CR>", "o<ESC>", opts)
map("i", "<C-S-CR>", "<C-o>O", opts)
map("n", "<C-S-CR>", "O<ESC>", opts)

-- move lines
map("v", "<C-M-j>", ":m '>+1<CR>gv=gv", opts)
map("v", "<C-M-k>", ":m '<-2<CR>gv=gv", opts)
map("n", "<C-M-k>", ":m -2<CR>", opts)
map("n", "<C-M-j>", ":m +1<CR>", opts)
map("i", "<C-M-k>", "<esc>:m -2<CR>a", opts)
map("i", "<C-M-j>", "<esc>:m +1<CR>a", opts)

-- indenting
map("v", "<", "<gv", opts)
map("v", ">", ">gv", opts)

-- cycle through buffers
map("n", "<S-H>", ":bprevious<CR>", opts)
map("n", "<S-L>", ":bnext<CR>", opts)
-- close current buffer
map("n", "<C-S-D>", ":bdelete<CR>", opts)
-- close all buffers except current
map("n", "<C-S-B>", ":%bd|e#<CR>:bnext<CR>:bdelete<CR>", opts)

-- switch tabs using tab and shift+tab
map("n", "<TAB>", ":tabnext<CR>", opts)
map("n", "<S-TAB>", ":tabprevious<CR>", opts)

-- keep cursor in place when joining lines
map("n", "J", "mzJ`z", opts)

-- keep cursor in middle when jumping half pages, and when searching
map("n", "<C-d>", "<C-d>zz", opts)
map("n", "<C-u>", "<C-u>zz", opts)
map("n", "n", "nzzzv", opts)
map("n", "N", "Nzzzv", opts)

-- toggle comment with <C-/> (C-_) is a special key
map("i", "<C-/>", "<ESC>:CommentToggle<CR>a", opts)
map("n", "<C-/>", "<ESC>:CommentToggle<CR>", opts)
map("v", "<C-/>", ":CommentToggle<CR>gv", opts)

-- perform <action> without replacing the buffer
map("x", "<leader>p", [["_dP]], opts)   -- paste 
map("x", "<leader>d", [[^"_D]])         -- delete line
map("x", "<leader>x", [["_x]])          -- delete char
map("x", "<leader>s", [["_s]])          -- delete and enter insert mode

map("x", "Y", '"+y', opts) -- copy to system clipboard

-- search and replace the word under the cursor
map("n", "<leader>r", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], {silent = false})

-- add parentheses/quotes in visual mode
map("v", "(", "c()<ESC>Pgvlolo", opts)
map("v", "<leader>[", "c[]<ESC>Pgvlolo", opts)
map("v", "<leader>{", "c{}<ESC>Pgvlolo", opts)
map("v", "<leader>\"", "c\"\"<ESC>Pgvlolo", opts)
map("v", "<leader>'", "c''<ESC>Pgvlolo", opts)

-- easy align
map("x", "ea", "<CMD>EasyAlign<CR>")

-- toggle diagnostic messages
vim.api.nvim_create_user_command("DiagnosticToggle", function()
    local config = vim.diagnostic.config
    config {
        virtual_text = not config().virtual_text,
        signs = not config().virtual_text,
    }
end, { desc = "toggle diagnostic" })
