local map = vim.keymap.set
local opts = { noremap = true, silent = true }

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

