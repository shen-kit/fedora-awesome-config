require("nvim-tree").setup({
  sort = {
    sorter = "case_sensitive",
  },
  view = {
    width = 30,
  },
  renderer = {
    group_empty = true,
  },
  filters = {
    dotfiles = true,
  },
})

vim.keymap.set("n", "<C-p>", ":NvimTreeToggle<CR>")
-- find the current file in the tree
vim.keymap.set("n", "<leader>tf", ":NvimTreeFindFile<CR>")

