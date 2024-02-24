local map = vim.api.nvim_set_keymap
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "

map("i", "jk", "<ESC>", opts)

-- open directory of current file
map("n", "<leader>pv", ":Explore<CR>", opts)

-- move lines
map("v", "<M-j>", ":m '>+1<CR>gv=gv", opts)
map("v", "<M-k>", ":m '<-2<CR>gv=gv", opts)
map("n", "<M-k>", ":m -2<CR>", opts)
map("n", "<M-j>", ":m +1<CR>", opts)

-- keep cursor in middle when jumping half pages, and when searching
map("n", "<C-d>", "<C-d>zz", opts)
map("n", "<C-u>", "<C-u>zz", opts)
map("n", "n", "nzzzv", opts)
map("n", "N", "Nzzzv", opts)

-- paste without replacing the buffer
map("x", "<leader>p", [["_dP]], opts)


map("n", "<leader>s", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], {silent = false})
