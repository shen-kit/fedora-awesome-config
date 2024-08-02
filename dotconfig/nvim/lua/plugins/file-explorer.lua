return {
  {
    'stevearc/oil.nvim',
    dependencies = { "nvim-tree/nvim-web-devicons" },
    opts = {
      -- true to open when opening nvim to a directory
      default_file_explorer = false,
      view_options = {
        show_hidden = true,
        case_insensitive = true,
        sort = {
          { 'type', 'asc' },
          { 'name', 'asc' },
        },
      },
      keymaps = {
        ["<C-v>"] = { "actions.select", opts = { vertical = true }, desc = "Open the entry in a vertical split" },
        ["<Tab>"] = "actions.preview",
        ["<C-l>"] = "actions.close", -- same as open, use to toggle
        ["q"] = "actions.close",
      },
      delete_to_trash = true,
      use_default_keymaps = true,
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
