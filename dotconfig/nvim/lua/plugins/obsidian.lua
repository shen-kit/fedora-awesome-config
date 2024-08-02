return {
  {
    "epwalsh/obsidian.nvim",
    version = "*",  -- use latest release instead of latest commit
    lazy = true,
    event = { -- only load obsidian.nvim for markdown files in my vault
      "BufReadPre " .. vim.fn.expand "~" .. "/gDrive/1-personal-notes/**.md",
      "BufNewFile " .. vim.fn.expand "~" .. "/gDrive/1-personal-notes/**.md",
      "BufReadPre " .. vim.fn.expand "~" .. "/gDrive/2-zettelkasten/**.md",
      "BufNewFile " .. vim.fn.expand "~" .. "/gDrive/2-zettelkasten/**.md",
    },
    dependencies = {
      "nvim-lua/plenary.nvim", -- required
      "hrsh7th/nvim-cmp", -- note reference completion
    },
  },
  {
    "lukas-reineke/headlines.nvim",
    dependencies = "nvim-treesitter/nvim-treesitter",
  },
  { "bullets-vim/bullets.vim" },
  { "dhruvasagar/vim-table-mode" },
}
