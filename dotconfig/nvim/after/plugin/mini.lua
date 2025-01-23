require('mini.ai').setup()
require('mini.surround').setup()
require('mini.bracketed').setup()
require('mini.bufremove').setup()
require('mini.pairs').setup()
require('mini.align').setup()
require('mini.files').setup({
  mappings = { synchronize = '<C-s>' },
  windows = {
    preview = true,
    width_preview = 80,
  },
})
require('mini.comment').setup({
  mappings = { comment_visual = '<C-/>' },
})
