require("catppuccin").setup({
    integrations = {
        cmp        = true,
        gitsigns   = true,
        nvimtree   = true,
        treesitter = true,
    },
})

vim.cmd.colorscheme "catppuccin-mocha"
