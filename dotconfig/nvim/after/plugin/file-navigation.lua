require("harpoon").setup()

require("nvim-tree").setup({
  view = { width = 40 },
  filters = { dotfiles = true },
  actions = {
    open_file = {
      quit_on_open = true,
    },
  },
  hijack_directories = {
    enable = true, -- set to false for auto-session to load a session instantly when nvim is started with a directory argument
  },
})
