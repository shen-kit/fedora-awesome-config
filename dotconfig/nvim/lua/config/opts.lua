-- ============================================================
--                       Global Options
-- ============================================================

local g = vim.g
g.markdown_folding = 1

-- ============================================================
--                       Local Options
-- ============================================================

local opt = vim.opt

opt.swapfile = false

-- [[ context ]]
opt.number = true
opt.relativenumber = true
opt.scrolloff = 5
opt.sidescrolloff = 5
opt.signcolumn = 'yes'
opt.completeopt = { 'menu', 'menuone', 'noselect' }
opt.pumheight = 7

-- [[ theme / appearance ]]
opt.termguicolors = true
opt.linebreak = true    -- only wrap after a space
opt.textwidth = 999     -- don't hard-wrap at 80 chars, override in ftplugin/<filetype>.lua for specific files
opt.wrap = false        -- whether to wrap at edges of screen
opt.showtabline = 2     -- always show
opt.conceallevel = 0    -- show characters as they are

-- [[ indents ]]
opt.tabstop = 2
opt.softtabstop = 2
opt.shiftwidth = 2
opt.expandtab = true
opt.smartindent = true

-- [[ folding ]]
opt.foldmethod = 'indent'
opt.foldlevelstart = 99

-- [[ search ]]
opt.ignorecase = true
opt.smartcase = true 	  -- case sensitive if search contains capitals
opt.hlsearch = false    -- don't highlight all occurrences
opt.incsearch = true    -- incremental search (update while typing)

-- [[ splits ]]
opt.splitright = true 	-- split right instead of left by default
opt.splitbelow = true	  -- split down instead of up by default

-- [[ sequences ]]
opt.timeoutlen = 400

-- [[ misc ]]
opt.updatetime = 50
opt.path:append '**'
