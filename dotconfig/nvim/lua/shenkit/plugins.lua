local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
    vim.fn.system({
        "git",
        "clone",
        "--filter=blob:none",
        "https://github.com/folke/lazy.nvim.git",
        "--branch=stable", -- latest stable release
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)


local plugins = {
    {
        "nvim-telescope/telescope.nvim",
        tag = "0.1.6",
        dependencies = { "nvim-lua/plenary.nvim" }
    },

    -- appearance
    {
        "folke/tokyonight.nvim",
        lazy = false,
        priority = 1000,
        config = function() vim.cmd("colorscheme tokyonight") end
    },

    {
        "nvim-lualine/lualine.nvim",
        dependencies = { "kyazdani42/nvim-web-devicons" },
        options = {
            theme = "tokyonight",
        },
    },

    -- lsp / completion
    "neovim/nvim-lspconfig",
    "williamboman/mason.nvim",
    "williamboman/mason-lspconfig.nvim",
    "hrsh7th/nvim-cmp",
    "hrsh7th/cmp-nvim-lsp",
    {
        "L3MON4D3/LuaSnip",
        dependencies = {
            "rafamadriz/friendly-snippets",
            "saadparwaiz1/cmp_luasnip",
        },
        version = "v2.*", -- follow latest version
        build = "make install_jsregexp",
    },
    {
        "nvim-treesitter/nvim-treesitter",
        build = ":TSUpdate"
    },

    -- formatting
    {
        "jose-elias-alvarez/null-ls.nvim",
        dependencies = {
            "averms/black-nvim",
        },
    },
    {
        "windwp/nvim-autopairs",
        event = "InsertEnter",
        config = true,
    },

    -- git integration
    {
        "kdheepak/lazygit.nvim",
        dependencies = {"nvim-lua/plenary.nvim"},
    },

    -- tmux integration
    {
        "christoomey/vim-tmux-navigator",
        cmd = {
            "TmuxNavigateLeft",
            "TmuxNavigateDown",
            "TmuxNavigateUp",
            "TmuxNavigateRight",
            "TmuxNavigatePrevious",
        },
        keys = {
            { "<M-h>", "<cmd>TmuxNavigateLeft<cr>" },
            { "<M-j>", "<cmd>TmuxNavigateDown<cr>" },
            { "<M-k>", "<cmd>TmuxNavigateUp<cr>" },
            { "<M-l>", "<cmd>TmuxNavigateRight<cr>" },
            { "<M-\\>", "<cmd>TmuxNavigatePrevious<cr>" },
        },
    },

    "mbbill/undotree",
    "nvim-tree/nvim-tree.lua",

    -- "vifm/vifm.vim",
    {
        "rolv-apneseth/tfm.nvim",
        lazy = false,
        opts = {
            file_manager = "vifm",
            replace_netrw = true,
            enable_cmds = true,
            keybindings = {
                ["<ESC>"] = ":q<CR>",
                ["<C-v>"] = "<C-\\><C-O>:lua require('tfm').set_next_open_mode(require('tfm').OPEN_MODE.vsplit)<CR><CR>",
                ["<C-x>"] = "<C-\\><C-O>:lua require('tfm').set_next_open_mode(require('tfm').OPEN_MODE.split)<CR><CR>",
                ["<C-t>"] = "<C-\\><C-O>:lua require('tfm').set_next_open_mode(require('tfm').OPEN_MODE.tabedit)<CR><CR>",
            },
        },
        keys = {
            {
                "<leader>e",
                ":Tfm<CR>",
                desc = "TFM",
            }
        }
    },

    -- obsidian
    {
        "epwalsh/obsidian.nvim",
        version = "*",  -- recommended, use latest release instead of latest commit
        lazy = true,
        event = { -- only load obsidian.nvim for markdown files in my vault
            "BufReadPre " .. vim.fn.expand "~" .. "/onedrive/obsidian_zettelkasten/**.md",
            "BufNewFile " .. vim.fn.expand "~" .. "/onedrive/obsidian_zettelkasten/**.md",
        },
        dependencies = {
            "nvim-lua/plenary.nvim", -- required
            "hrsh7th/nvim-cmp", -- note reference completion
        },
    },

    "bullets-vim/bullets.vim",

    -- comments
    "terrortylor/nvim-comment",
}

require("lazy").setup(plugins, opts)
