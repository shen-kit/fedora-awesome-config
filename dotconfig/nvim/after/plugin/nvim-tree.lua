require("nvim-tree").setup({
  sort = {
    sorter = "case_sensitive",
  },
  view = {
    width = 40,
    number = true,
    relativenumber = true,
  },
  renderer = {
    group_empty = true,
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

vim.keymap.set("n", "<C-p>", ":NvimTreeToggle<CR>")
-- find the current file in the tree
vim.keymap.set("n", "<leader>fc", ":NvimTreeFindFile<CR>")

