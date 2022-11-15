-- [[ init.lua ]]

-- LEADER
vim.g.mapleader = '\\'

-- theme
--vim.cmd('colorscheme dracula')
vim.cmd('colorscheme nord')
--vim.cmd('colorscheme gloombuddy')
-- vim.cmd('colorscheme molokai')

-- IMPORTS
require('vars')
require('opts')
require('keys')
require('plugins')

-- nvim-tree (file explorer)
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

require('nvim-tree').setup()
