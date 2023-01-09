-- [[ init.lua ]]

-- disable netrw
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1
vim.g.startup_bookmarks = {
  ['n'] = '~/.config/nvim/',
  ['c'] = '~/coding/courses/',
  ['p'] = '~/coding/projects/',
}

-- [[ THEME ]]
-- vim.cmd 'colorscheme nord'
vim.cmd 'colorscheme nightfox'

-- [[ IMPORTS ]]

require 'shenkit.opts'
require 'shenkit.keys'
require 'shenkit.plugins'
require 'shenkit.cmp'
require 'shenkit.lsp'
require 'shenkit.treesitter'
require 'shenkit.autopairs'
require 'shenkit.toggleterm'
require 'shenkit.startup'

-- [[ PLUGIN SETUP ]]
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
      -- quit_on_open = true,
    },
  },
})

require 'nightfox'.setup({
  options = {
    styles = {
      comments = 'italic',
    }
  }
})

require 'nvim-ts-autotag'.setup()
require 'prettier'.setup()
require 'lualine'.setup()
