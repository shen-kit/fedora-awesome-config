local map = vim.keymap.set
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "

map("i", "jk", "<ESC>", opts)

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
map("v", "(", "c()<ESC>Pgvlolo", opts)
map("v", "<leader>[", "c[]<ESC>Pgvlolo", opts)
map("v", "<leader>{", "c{}<ESC>Pgvlolo", opts)
map("v", "<leader><", "c<><ESC>Pgvlolo", opts)
map("v", "<leader>\"", "c\"\"<ESC>Pgvlolo", opts)
map("v", "<leader>'", "c''<ESC>Pgvlolo", opts)
