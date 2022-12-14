-- [[ init.lua ]]

-- disable netrw
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- theme
vim.cmd 'colorscheme nord'

-- IMPORTS

require 'shenkit.opts'
require 'shenkit.keys'
require 'shenkit.plugins'
require 'shenkit.cmp'
require 'shenkit.lsp'
require 'shenkit.treesitter'
require 'shenkit.autopairs'
require 'shenkit.toggleterm'

-- setup
require 'nvim-tree'.setup({
  view = {
    side = "right",
    width = 40,
  },
  filters = {
    dotfiles = true,
  },
  actions = {
    open_file = {
      quit_on_open = true,
    },
  },
})

require 'nvim-ts-autotag'.setup()
require 'prettier'.setup()
