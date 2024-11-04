return {

  {
    "catppuccin/nvim",
    lazy = false,
    priority = 1000,
    name = "catppuccin",
    config = function() vim.cmd("colorscheme catppuccin") end,
  },

  {
    "nvim-lualine/lualine.nvim",
    dependencies = { "kyazdani42/nvim-web-devicons" },
    options = { theme = "catppuccin" },
  },

  { "nvim-treesitter/nvim-treesitter" },

  {
    "folke/ts-comments.nvim",
    event = "VeryLazy",
    opts = {},
  },

  -- highlight the word under the cursor
  {
    'echasnovski/mini.cursorword',
    version = '*'
  },

  -- center buffer
  {
    "shortcuts/no-neck-pain.nvim",
    version = "*"
  },
}
