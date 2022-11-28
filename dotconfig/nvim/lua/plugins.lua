-- [[ plugins.lua ]]

local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath "data" .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
  PACKER_BOOTSTRAP = fn.system {
    "git",
    "clone",
    "--depth",
    "1",
    "https://github.com/wbthomason/packer.nvim",
    install_path,
  }
  print "Installing packer close and reopen Neovim..."
  vim.cmd [[packadd packer.nvim]]
end

-- Autocommand that reloads neovim whenever you save the plugins.lua file
vim.cmd [[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerSync
  augroup end
]]

-- Use a protected call so we don't error out on first use
local status_ok, packer = pcall(require, "packer")
if not status_ok then
  return
end

-- Have packer use a popup window
packer.init {
  display = {
    open_fn = function()
      return require("packer.util").float { border = "rounded" }
    end,
  },
  git = {
    clone_timeout = 300, -- Timeout, in seconds, for git clones
  },
}

-- startup and add configure plugins
packer.startup(function(use)

	use { 'wbthomason/packer.nvim' } -- packer manage itself
	use { "nvim-lua/plenary.nvim"} -- useful lua functions used by lots of plugins

	-- treesitter (syntax highlighting)
	use { 'nvim-treesitter/nvim-treesitter' }

	-- fuzzy finding
	use { 'nvim-lua/telescope.nvim' }
	use { 'nvim-lua/popup.nvim' }
	use { 'BurntSushi/ripgrep' }
	
	-- nvim-tree
	use {
		'nvim-tree/nvim-tree.lua',
		requires = {
			'nvim-tree/nvim-web-devicons'
		}
	}

	-- LSP and linting
	use { 'neovim/nvim-lspconfig' } -- enable LSP
	use { 'williamboman/mason.nvim' }
	use { 'williamboman/mason-lspconfig.nvim' }

	-- comments
	use {
		'numToStr/Comment.nvim',
		config = function()
			require('Comment').setup()
		end
	}
	
	-- themes
	use { 'arcticicestudio/nord-vim' }
	use { 'tjdevries/colorbuddy.nvim' }
	use { 'bkegley/gloombuddy' }
	use { 'tomasr/molokai' }
	use { 'Mofiqul/dracula.nvim' }

	end
)

