

local plugins = {
    -- file explorer
    "nvim-tree/nvim-tree.lua",
    {
        "nvim-telescope/telescope.nvim",
        tag = "0.1.6",
        dependencies = { "nvim-lua/plenary.nvim" }
    },
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

    -- appearance
    {
        "catppuccin/nvim",
        name = "catppuccin",
        priority = 1000,
    },
    -- {
    --     "folke/tokyonight.nvim",
    --     lazy = false,
    --     priority = 1000,
    --     config = function() vim.cmd("colorscheme tokyonight") end
    -- },
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
    {
        "kylechui/nvim-surround",
        version = "*", -- for stability
        event = "VeryLazy",
        config = function()
            require("nvim-surround").setup({
                -- Configuration here, or leave empty to use defaults
            })
        end,
    },

    -- git 
    {
        "kdheepak/lazygit.nvim",
        dependencies = {"nvim-lua/plenary.nvim"},
    },

    -- integrate splits with tmux panes
    {
        "mrjones2014/smart-splits.nvim",
        lazy = false,
    },

    "mbbill/undotree",

    "junegunn/vim-easy-align",

    -- comments
    "terrortylor/nvim-comment",


    -- ===== notes =====
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
    {
        "lukas-reineke/headlines.nvim",
        dependencies = "nvim-treesitter/nvim-treesitter",
    },
    "dhruvasagar/vim-table-mode",
}

require("lazy").setup(plugins, {
    performance = {
        rtp = {
            -- disable some rtp plugins
            disabled_plugins = {
                "gzip",
                "matchit",
                "matchparen",
                "netrwPlugin",
                "tarPlugin",
                "tohtml",
                "tutor",
                "zipPlugin",
            },
        },
    },
})
