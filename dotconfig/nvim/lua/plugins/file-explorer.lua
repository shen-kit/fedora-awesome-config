return {
  {
    'stevearc/oil.nvim',
    dependencies = { "nvim-tree/nvim-web-devicons" },
    opts = {
      view_options = {
        show_hidden = true,
        case_insensitive = true,
        sort = {
          { 'type', 'asc' },
          { 'name', 'asc' },
        },
      },
    },
  },
  
  {
    "nvim-tree/nvim-tree.lua",
    opts = {
      view = { width = 40 },
      filters = { dotfiles = true },
      actions = {
        open_file = {
          quit_on_open = true,
        },
      },
    },
    dependencies = { "nvim-lua/plenary.nvim" }
  },

  {
    "nvim-telescope/telescope.nvim",
    dependencies = { "nvim-lua/plenary.nvim" },
  }
}
