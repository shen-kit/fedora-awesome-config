-- [[ keys.lua ]]

-- map(mode, sequence, command, options)
local map = vim.api.nvim_set_keymap

local opts = { noremap = true, silent = true }

map('', '<Space>', '<Nop>', opts)
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

-- leave insert mode with 'jk'
map('i', 'jk', '<ESC>', opts)

-- pane navigation
map("n", "<C-h>", "<C-w>h", opts)
map("n", "<C-j>", "<C-w>j", opts)
map("n", "<C-k>", "<C-w>k", opts)
map("n", "<C-l>", "<C-w>l", opts)

-- resizing panes
map("n", "<C-Up>", ":resize +2<CR>", opts)
map("n", "<C-Down>", ":resize -2<CR>", opts)
map("n", "<C-Left>", ":vertical resize -2<CR>", opts)
map("n", "<C-Right>", ":vertical resize +2<CR>", opts)

-- navigate buffers
map('n', '<S-l>', ':bnext<CR>', opts)
map('n', '<S-h>', ':bprevious<CR>', opts)

-- move text up and down
map('n', '<A-j>', 'ddp', opts)
map('n', '<A-k>', 'ddkP', opts)

-- VISUAL --
-- stay in indent mode
map('v', '<', '<gv', opts)
map('v', '>', '>gv', opts)

-- Visual Block --
-- Move text up and down
map("x", "<A-j>", ":move '>+1<CR>gv-gv", opts)
map("x", "<A-k>", ":move '<-2<CR>gv-gv", opts)

-- telescope
map('n', '<leader>p', ':lua require"telescope.builtin".find_files()<CR>', opts)
map('n', '<leader>fg', ':lua require"telescope.builtin".live_grep()<CR>', opts)
map('n', '<leader>fb', ':lua require"telescope.builtin".buffers()<CR>', opts)
map('n', '<leader>fh', ':lua require"telescope.builtin".help_tags()<CR>', opts)

-- nvim-tree
map("n", "<C-p>", ":NvimTreeToggle<CR>", opts)

-- lsp
map('n', 'gd', ':lua vim.lsp.buf.definition()<CR>', opts)
map('n', 'gr', ':lua vim.lsp.buf.references()<CR>', opts)
map('n', '<leader>r', ':lua vim.lsp.buf.rename()<CR>', opts)
map('n', 'K', ':lua vim.lsp.buf.hover()<CR>', opts)
map('n', '<C-K>', ':lua vim.lsp.buf.signature_help()<CR>', opts)
map('n', '<leader>ca', ':lua vim.lsp.buf.code_action()<CR>', opts)

-- diagnostics
map('n', 'gl', ':lua vim.diagnostic.open_float()<CR>', opts)
map('n', 'g[', ':lua vim.diagnostic.goto_prev()<CR>', opts)
map('n', 'g]', ':lua vim.diagnostic.goto_next()<CR>', opts)


-- comment
map('n', '<leader>\\', ':lua require("Comment.api").toggle.linewise.current()<CR>', opts)
map('i', '<leader>\\', '<ESC>:lua require("Comment.api").toggle.linewise.current()<CR>i', opts)

-- tabs
map('n', '<Tab>', 'gt', opts)
map('n', '<S-Tab>', 'gT', opts)
map('n', '<Leader>1', '1gt', opts)
map('n', '<Leader>2', '2gt', opts)
map('n', '<Leader>3', '3gt', opts)
map('n', '<Leader>4', '4gt', opts)
map('n', '<Leader>5', '5gt', opts)

-- unhighlight search
map('n', '<C-n>', ':nohl<CR>', opts)
