local map = vim.keymap.set
local opts = { noremap = true, silent = true }

map('n', '<leader>dpr', function() require('dap-python').test_method() end, opts)
