vim.g.mapleader = ' '

-- vim.bullets settings
vim.g.bullets_outline_levels = { 'num', 'std-' } -- if indenting after a number, use unordered list
vim.g.bullets_nested_checkboxes = 0              -- don't toggle parents to 'partial' state when child checked
vim.g.bullets_set_mappings = 0                   -- disable default mappings
vim.g.bullets_custom_mappings = {
  -- list continuation
  { 'imap', '<CR>',  '<Plug>(bullets-newline)' },
  { 'nmap', 'o',     '<Plug>(bullets-newline)' },
  -- indenting
  { 'imap', '<C-t>', '<Plug>(bullets-demote)' },
  { 'imap', '<C-d>', '<Plug>(bullets-promote)' },
  { 'nmap', '>',     '<Plug>(bullets-demote)' },
  { 'vmap', '>',     '<Plug>(bullets-demote)gv' },
  { 'nmap', '<',     '<Plug>(bullets-promote)' },
  { 'vmap', '<',     '<Plug>(bullets-promote)gv' },
  -- renumbering lists
  { 'imap', '<C-2>', '<Plug>(bullets-renumber)' },
  { 'nmap', '<C-2>', '<Plug>(bullets-renumber)' },
  { 'vmap', '<C-2>', '<Plug>(bullets-renumber)gv' },
}

-- vim-table-mode settings
vim.g.table_mode_tableize_map = '<leader><leader>t'

require("config.autocmds")
require("config.opts")
require("config.lazy")
require("config.cmds")
require("config.keys")
